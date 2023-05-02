package com.colecto.colecto.controller

import com.colecto.colecto.entity.Product
import com.colecto.colecto.service.ProductService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping

@RestController
@RequestMapping("product")

class ProductController(
  private val productService: ProductService
) {

  @GetMapping
  fun index(): Array<Product> {
    return productService.findAll()
  }
}
