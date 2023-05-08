package com.colecto.colecto.repository

import com.colecto.colecto.model.Rss
import org.springframework.data.jpa.repository.JpaRepository

interface RssRepostiory : JpaRepository<Rss, Int>
