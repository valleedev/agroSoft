-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 16, 2025 at 10:13 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agrosoft`
--

-- --------------------------------------------------------

--
-- Table structure for table `collaborators`
--

DROP TABLE IF EXISTS `collaborators`;
CREATE TABLE IF NOT EXISTS `collaborators` (
  `id` int NOT NULL AUTO_INCREMENT,
  `identification` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `charge` varchar(255) NOT NULL,
  `contact` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `collaborators`
--

INSERT INTO `collaborators` (`id`, `identification`, `name`, `charge`, `contact`) VALUES
(4, 2147483647, 'Emanuel 2', 'Agrónomo 2', 22222),
(5, 1036160111, 'Johan Sebastian Valle', 'Agrónomo', 2147483647),
(11, 121212, '121212', '121212', 121212);

-- --------------------------------------------------------

--
-- Table structure for table `seeding`
--

DROP TABLE IF EXISTS `seeding`;
CREATE TABLE IF NOT EXISTS `seeding` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `cultivation` varchar(255) NOT NULL,
  `used_consumables` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `photo` varchar(255) NOT NULL,
  `seeding_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seeding`
--

INSERT INTO `seeding` (`id`, `location`, `cultivation`, `used_consumables`, `quantity`, `photo`, `seeding_date`) VALUES
(2, '34trdsge4er', 'Lulo', 'Abonos, Fumigadores, semilla', 100, 'sdfdgfherwwrsrdfh.png', '2025-05-05 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
CREATE TABLE IF NOT EXISTS `tools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `buy_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tools`
--

INSERT INTO `tools` (`id`, `reference`, `name`, `status`, `buy_date`) VALUES
(1, '34trdsge4er', 'Pala', 'En bodega', '2025-05-05 00:00:00'),
(2, '34trsdfdsge4er', 'Escoba', 'En bodega', '2025-05-05 00:00:00'),
(3, '1111111', 'pala22', 'Ya no esta melo', '2025-05-05 00:00:00'),
(6, '345', 'Hábitos Atómicos', 'En bodega', '2020-02-22 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `nombres` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`nombres`, `contrasena`, `correo`, `id`) VALUES
('agroSoft User', '$2b$10$KCnYB9jDYgRfHmBStr9mbOS.orVBmphg0BUo6JGBSPV3JQ6OEMABS', 'admin@agrosoft.com', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
