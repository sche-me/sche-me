package com.colecto.colecto.repository

import com.colecto.colecto.model.Publisher
import org.springframework.data.jpa.repository.JpaRepository

interface PublisherRepostiory : JpaRepository<Publisher, Int>
