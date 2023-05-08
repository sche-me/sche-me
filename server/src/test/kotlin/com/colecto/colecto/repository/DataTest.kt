package com.colecto.colecto.repository

import com.colecto.colecto.model.Post
import com.colecto.colecto.model.Publisher
import com.colecto.colecto.model.Rss
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class DataTest {

    @Autowired
    lateinit var rssRepostiory: RssRepostiory

    @Autowired
    lateinit var publisherRepostiory: PublisherRepostiory

    @Autowired
    lateinit var postRepostiory: PostRepostiory

    @Test
    fun `save all and find all`() {
        val publishers = publisherRepostiory.saveAll(
            listOf(
                Publisher("test1", "https://test1.com"),
                Publisher("test2", "https://test2.com"),
            ),
        )
        val posts = postRepostiory.saveAll(
            listOf(
                Post(
                    "test_author1",
                    "test_title1",
                    "https://test1.com/1",
                    "test_description1",
                    publishers[0],
                ),
                Post(
                    "test_author2",
                    "test_title2",
                    "https://test2.com/1",
                    "test_description1",
                    publishers[1],
                ),
            ),
        )
        val rss = rssRepostiory.saveAll(
            listOf(
                Rss(
                    "https://test1.com/feed",
                    publishers[0],
                ),
                Rss(
                    "https://test2.com/feed",
                    publishers[1],
                ),
            ),
        )

        assertEquals(publishers[0], publisherRepostiory.getReferenceById(publishers[0].id))
        assertEquals(publishers[1], publisherRepostiory.getReferenceById(publishers[1].id))

        val post1 = postRepostiory.getReferenceById(posts[0].id)
        assertEquals(posts[0], post1)
        assertEquals(publishers[0], post1.publisher)

        val post2 = postRepostiory.getReferenceById(posts[1].id)
        assertEquals(posts[1], post2)
        assertEquals(publishers[1], post2.publisher)

        val rss1 = rssRepostiory.getReferenceById(rss[0].id)
        assertEquals(rss[0], rss1)
        assertEquals(publishers[0], rss1.publisher)

        val rss2 = rssRepostiory.getReferenceById(rss[1].id)
        assertEquals(rss[1], rss2)
        assertEquals(publishers[1], rss2.publisher)
    }
}
