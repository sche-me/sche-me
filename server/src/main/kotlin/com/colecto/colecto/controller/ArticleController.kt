package com.colecto.colecto.controller

import com.colecto.colecto.model.Article
import com.colecto.colecto.service.ArticleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/articles")
class ArticleController(
    private val articleService: ArticleService,
) {

    @GetMapping
    fun articles(
        @RequestParam("limit", defaultValue = "10") limit: Int,
        @RequestParam("page", defaultValue = "0") page: Int,
    ): List<Article> {
        return articleService.findAll(page, limit)
    }
}
