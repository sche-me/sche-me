package com.colecto.colecto.repository

import com.colecto.colecto.model.Publisher
import com.colecto.colecto.model.Rss
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNotEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.lang.Thread.sleep

@SpringBootTest
class RssReader {

    @Autowired
    lateinit var rssRepostiory: RssRepostiory

    @Autowired
    lateinit var publisherRepostiory: PublisherRepostiory

    @Autowired
    lateinit var articleRepostiory: ArticleRepostiory

    @BeforeEach
    fun reset() {
        publisherRepostiory.deleteAll()
        articleRepostiory.deleteAll()
        rssRepostiory.deleteAll()
    }

    @Test
    fun `sycn kakao data`() {
        assertEquals(0, articleRepostiory.findAll().count())
        val publisher = publisherRepostiory.save(
            Publisher("kakao", "https://tech.kakao.com/blog/"),
        )

        rssRepostiory.save(
            Rss(
                "https://tech.kakao.com/feed/",
                publisher,
            ),
        )

        sleep(5000)

        assertNotEquals(0, articleRepostiory.findAll().count())
    }
}
