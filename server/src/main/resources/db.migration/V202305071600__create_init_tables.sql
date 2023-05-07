CREATE TABLE publisher(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    url VARCHAR(1000) NOT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6)
) ENGINE = InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE rss(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    publisher_id INT UNSIGNED NOT NULL,
    url VARCHAR(1000) NOT NULL,
    last_synced_at DATETIME(6) NOT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6),

    FOREIGN KEY (publisher_id) REFERENCES publisher(id) ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE post(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    url VARCHAR(1000) NOT NULL,
    publisher_id INT UNSIGNED NOT NULL,
    description TEXT,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6),

    INDEX post__created_at(created_at),
    FOREIGN KEY (publisher_id) REFERENCES publisher(id) ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
