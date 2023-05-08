package com.colecto.colecto.controller

import com.colecto.colecto.entity.Article
import com.colecto.colecto.service.ArticleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping

@RestController
@RequestMapping("api/article")

class ArticleController(
  private val articleService: ArticleService
) {

  @GetMapping
  fun index(): Array<Article> {
    return articleService.findAll()
  }
}
