package com.colecto.colecto.model

import jakarta.persistence.*
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import java.time.Instant

@Entity
class Rss(
    val url: String,
    @ManyToOne
    @JoinColumn(name = "publisher_id")
    val publisher: Publisher,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0

    var lastSyncedAt: Instant = Instant.MIN

    @CreatedDate
    var createdAt: Instant = Instant.now()
        private set

    @LastModifiedDate
    var createdAt: Instant = Instant.now()
        private set
}
