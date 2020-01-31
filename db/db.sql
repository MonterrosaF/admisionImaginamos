CREATE DATABASE IF NOT EXISTS pruebaapi DEFAULT CHARACTER SET UTF8 COLLATE utf8_spanish_ci;

USE pruebaapi;

CREATE TABLE IF NOT EXISTS `rol`(
    `id` int NOT NULL AUTO_INCREMENT,
    `type` varchar(50) NOT NULL, 
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users`(
    `id` int NOT NULL AUTO_INCREMENT,
    `rol_id` int NOT NULL, 
    `name` varchar(50) NOT NULL,
    `last_name` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL UNIQUE,
    `mobile` int(50) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`rol_id`) REFERENCES `rol`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `order`(
    `id` int NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL,
    `delivery_address` varchar(50) NOT NULL UNIQUE,
    `delivery_date` date NOT NULL,
    `time_duration` varchar(50) NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;