package com.colecto.colecto.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import org.springframework.data.annotation.CreatedDate
import jakarta.persistence.Id
import org.springframework.data.annotation.LastModifiedDate
import java.time.Instant

@Entity
class Post(
    val author: String,
    val title: String,
    val url: String,
    val description: String,
    @ManyToOne
    @JoinColumn(name = "publisher_id")
    val publisher: Publisher,
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0

    @CreatedDate
    var createdAt: Instant = Instant.now()
        private set

    @LastModifiedDate
    var updatedAt: Instant = Instant.now()
        private set
}
