package com.colecto.colecto.controller

import com.colecto.colecto.entity.Article
import com.colecto.colecto.service.ArticleService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam

@RestController
@RequestMapping("article")

class ArticleController(
  private val articleService: ArticleService
) {

  @GetMapping
  fun index(@RequestParam("limit", defaultValue = "10") limit: Int, @RequestParam("page", defaultValue = "1") page: Int): Array<Article> {
    return articleService.findAll(limit, page)
  }
}
