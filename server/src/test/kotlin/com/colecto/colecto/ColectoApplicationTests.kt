package com.colecto.colecto

import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest

@DataJpaTest
class ColectoApplicationTests {

    @Test
    fun contextLoads() {
        println("test")
    }
}
