package com.colecto.colecto.repository

import com.colecto.colecto.model.Article
import org.springframework.data.jpa.repository.JpaRepository

interface ArticleRepostiory : JpaRepository<Article, Int> {
    fun existsByUrl(url: String): Boolean
}
