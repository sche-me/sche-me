package com.colecto.colecto.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {
    @GetMapping("/")
    fun index(): String {
        return "Greetings from Spring Boot!"
    }
}
