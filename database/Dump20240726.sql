-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Equipment`
--

DROP TABLE IF EXISTS `Equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Equipment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `equipmentId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Equipment`
--

LOCK TABLES `Equipment` WRITE;
/*!40000 ALTER TABLE `Equipment` DISABLE KEYS */;
INSERT INTO `Equipment` VALUES (1,'EQ-12495'),(2,'EQ-12496'),(3,'EQ-12497');
/*!40000 ALTER TABLE `Equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SensorData`
--

DROP TABLE IF EXISTS `SensorData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SensorData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` double NOT NULL,
  `timestamp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipmentId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `equipmentId` (`equipmentId`),
  CONSTRAINT `SensorData_equipmentId_fkey` FOREIGN KEY (`equipmentId`) REFERENCES `Equipment` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SensorData`
--

LOCK TABLES `SensorData` WRITE;
/*!40000 ALTER TABLE `SensorData` DISABLE KEYS */;
INSERT INTO `SensorData` VALUES (1,78.42,'2024-07-23T01:30:00.000-05:00',1),(2,15,'2024-07-23T01:30:00.000-05:00',2),(3,87,'2024-07-23T01:30:00.000-05:00',2),(4,12,'2024-07-02T01:30:00.000-05:00',3),(5,78.42,'2024-07-23T01:30:00.000-05:00',1),(6,78.42,'2024-07-23T01:30:00.000-05:00',2),(7,78.42,'2024-07-23T01:30:00.000-05:00',3),(8,12,'2023-02-15T01:30:00.000-05:00',3),(9,78.42,'2023-02-15T01:30:00.000-05:00',1),(10,78.42,'2023-02-15T01:30:00.000-05:00',2),(11,78.42,'2023-02-15T01:30:00.000-05:00',3),(12,78.42,'2023-02-15T01:30:00.000-05:00',1),(13,78.42,'2023-02-15T01:30:00.000-05:00',2),(14,78.42,'2023-02-15T01:30:00.000-05:00',3),(15,78.42,'2023-02-15T01:30:00.000-05:00',1),(16,78.42,'2023-02-15T01:30:00.000-05:00',2),(17,78.42,'2023-02-15T01:30:00.000-05:00',3),(18,78.42,'2023-02-15T01:30:00.000-05:00',1),(19,78.42,'2023-02-15T01:30:00.000-05:00',2),(20,78.42,'2023-02-15T01:30:00.000-05:00',3),(21,78.42,'2023-02-15T01:30:00.000-05:00',1),(22,78.42,'2023-02-15T01:30:00.000-05:00',2),(23,78.42,'2023-02-15T01:30:00.000-05:00',3),(24,78.42,'2023-02-15T01:30:00.000-05:00',1),(25,78.42,'2023-02-15T01:30:00.000-05:00',2),(26,78.42,'2023-02-15T01:30:00.000-05:00',3),(27,78.42,'2023-02-15T01:30:00.000-05:00',1),(28,78.42,'2023-02-15T01:30:00.000-05:00',2),(29,78.42,'2023-02-15T01:30:00.000-05:00',3),(30,78.42,'2023-02-15T01:30:00.000-05:00',1),(31,78.42,'2023-02-15T01:30:00.000-05:00',2),(32,78.42,'2023-02-15T01:30:00.000-05:00',3),(33,78.42,'2023-02-15T01:30:00.000-05:00',1),(34,78.42,'2023-02-15T01:30:00.000-05:00',2),(35,78.42,'2023-02-15T01:30:00.000-05:00',3),(36,78.42,'2023-02-15T01:30:00.000-05:00',1),(37,78.42,'2023-02-15T01:30:00.000-05:00',2),(38,78.42,'2023-02-15T01:30:00.000-05:00',3),(39,78.42,'2023-02-15T01:30:00.000-05:00',1),(40,78.42,'2023-02-15T01:30:00.000-05:00',2),(41,78.42,'2023-02-15T01:30:00.000-05:00',3),(42,78.42,'2024-07-15T01:30:00.000-05:00',1),(43,15,'2024-07-15T01:30:00.000-05:00',2),(44,12,'2024-07-15T01:30:00.000-05:00',3),(45,78.42,'2024-07-15T01:30:00.000-05:00',1),(46,15,'2024-07-15T01:30:00.000-05:00',2),(47,12,'2024-07-15T01:30:00.000-05:00',3),(48,78.42,'2024-07-15T01:30:00.000-05:00',1),(49,15,'2024-07-15T01:30:00.000-05:00',2),(50,12,'2024-07-15T01:30:00.000-05:00',3),(51,78.42,'2024-07-24T01:30:00.000-05:00',1),(52,15,'2024-07-25T01:30:00.000-05:00',2),(53,12,'2024-07-15T01:30:00.000-05:00',3),(54,78.42,'2024-07-24T01:30:00.000-05:00',1),(55,15,'2024-07-25T23:30:00.000-05:00',2),(56,12,'2024-07-15T01:30:00.000-05:00',3),(57,78.42,'2024-07-24T01:30:00.000-05:00',1),(58,15,'2024-07-25T23:30:00.000-05:00',2),(59,700,'2024-07-25T23:30:00.000-05:00',3);
/*!40000 ALTER TABLE `SensorData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('627dd13b-d354-4e95-8351-8433abed16cc','d619d057ed283bedec9b50ee00a0c451bbb3fff6c269e933bf2e1e1645963e39','2024-07-26 00:34:34.799','20240726003433_init',NULL,NULL,'2024-07-26 00:34:33.639',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-26  0:56:23
