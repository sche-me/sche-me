package com.colecto.colecto.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.Instant

@Entity
class Publisher(
    val name: String,
    val url: String,
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
