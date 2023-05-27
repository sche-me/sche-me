package com.colecto.colecto.service

import com.colecto.colecto.model.Post
import com.colecto.colecto.model.Rss
import com.colecto.colecto.repository.PostRepostiory
import com.colecto.colecto.repository.RssRepostiory
import jakarta.transaction.Transactional
import okhttp3.OkHttpClient
import okhttp3.Request
import org.jsoup.Jsoup
import org.jsoup.parser.Parser
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import org.springframework.transaction.support.TransactionTemplate

@Service
class RssReader(private val rssRepostiory: RssRepostiory, private val postRepostiory: PostRepostiory, private val transactionTemplate: TransactionTemplate) {
    private val parser = Parser.xmlParser()
    private val client = OkHttpClient()

    @Scheduled(fixedDelay = 3000)
    @Transactional
    fun sync() {
        rssRepostiory.findAll().forEach {
            val posts = readAll(it)
            saveAll(posts)
        }
    }

    private fun readAll(rss: Rss): List<Post> {
        val request = Request.Builder()
            .url(rss.url)
            .build()
        val response = client.newCall(request).execute()
        val stream = response.body?.byteStream()!!
        val document = Jsoup.parse(stream, "utf-8", "", parser)
        return document.select("item").map {
            Post(
                url = it.select("link").text(),
                title = it.select("title").text(),
                author = rss.publisher.name,
                description = it.select("description").text(),
                publisher = rss.publisher,
            )
        }
    }

    private fun saveAll(posts: List<Post>) {
        posts.forEach {
            if (postRepostiory.existsByUrl(it.url)) {
                return@forEach
            }

            postRepostiory.save(it)
        }
    }
}
