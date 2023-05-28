package com.colecto.colecto.service

import java.io.File
import java.io.FileReader
import java.io.BufferedReader
import org.springframework.stereotype.Service
import com.colecto.colecto.entity.Article
import com.google.gson.GsonBuilder
import com.google.gson.Gson

@Service
class ArticleService {
  fun findAll(limit: Int, page: Int): Array<Article> {
    val json = object {}.javaClass.getResource("/mock/TestArticleList.json")?.readText()
    val products = Gson().fromJson<Array<Article>>(json, Array<Article>::class.java)

    val total = products.size
    val start = limit * (page - 1)
    var end = limit * page - 1

    if (total <= end) {
      end = total - 1
    }

    return products.slice(start..end).toTypedArray()
  }
}
