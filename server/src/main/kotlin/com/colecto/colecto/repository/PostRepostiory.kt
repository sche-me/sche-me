package com.colecto.colecto.repository

import com.colecto.colecto.model.Post
import org.springframework.data.jpa.repository.JpaRepository

interface PostRepostiory : JpaRepository<Post, Int>
