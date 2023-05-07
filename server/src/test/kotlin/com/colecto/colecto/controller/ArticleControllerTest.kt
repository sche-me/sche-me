package com.colecto.colecto.controller

import com.colecto.colecto.IntegrationTest
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

class ArticleControllerTest : IntegrationTest() {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Test
    fun findAll() {
        val uri: String = "/article"
        mockMvc.perform(MockMvcRequestBuilders.get(uri))
            .andExpect(MockMvcResultMatchers.status().isOk)
    }
}
