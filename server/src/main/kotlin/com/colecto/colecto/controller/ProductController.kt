package com.colecto.colecto.controller

import com.colecto.colecto.entity.Product
import com.colecto.colecto.service.ProductService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.beans.factory.annotation.Autowired

@RestController
class ProductController(
  @Autowired private val productService: ProductService
) {
  @GetMapping("/product")
  fun index(): Array<Product> {
    return productService.findAll()
  }
}
