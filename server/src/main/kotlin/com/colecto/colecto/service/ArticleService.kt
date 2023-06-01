package com.colecto.colecto.service

import com.colecto.colecto.model.Article
import com.colecto.colecto.model.Publisher
import com.colecto.colecto.model.Rss
import com.colecto.colecto.repository.ArticleRepostiory
import com.colecto.colecto.repository.PublisherRepostiory
import com.colecto.colecto.repository.RssRepostiory
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

@Service
class ArticleService(
    private val articleRepostiory: ArticleRepostiory,
    private val publisherRepostiory: PublisherRepostiory,
    private val rssRepostiory: RssRepostiory,
) {
    fun findAll(page: Int, limit: Int): List<Article> {
        initData()
        return articleRepostiory.findAll(PageRequest.of(page, limit)).content
    }

    private fun initData() {
        publisherRepostiory.findAll().find { it.name == "kakao" } ?: run {
            val publisher = publisherRepostiory.save(
                Publisher("kakao", "https://tech.kakao.com/blog/"),
            )

            rssRepostiory.save(
                Rss(
                    "https://tech.kakao.com/feed/",
                    publisher,
                ),
            )
        }
    }
}
