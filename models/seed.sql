-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: billionaire
-- ------------------------------------------------------
-- Server version	8.0.17

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

USE billionaire;
--
-- Table structure for table `Bills`
--

DROP TABLE IF EXISTS `Bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) NOT NULL,
  `dueDate` date NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RecurBillId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `RecurBillId` (`RecurBillId`),
  CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`RecurBillId`) REFERENCES `recurbills` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bills`
--

LOCK TABLES `Bills` WRITE;
/*!40000 ALTER TABLE `Bills` DISABLE KEYS */;
INSERT INTO `Bills` VALUES (1,275.49,'2019-11-17',0,'2019-11-16 20:21:31','2019-11-16 20:21:31',2),(2,125.05,'2019-11-20',0,'2019-11-17 01:07:00','2019-11-17 01:07:00',3),(4,950.00,'2019-12-05',0,'2019-11-17 01:08:00','2019-11-17 01:08:00',5),(5,68.30,'2019-11-17',0,'2019-11-17 01:12:00','2019-11-17 01:12:00',6),(6,100.50,'2019-11-20',0,'2019-11-17 01:12:00','2019-11-17 01:12:00',7),(7,347.59,'2019-12-10',0,'2019-11-17 01:13:00','2019-11-17 01:13:00',8),(8,75.97,'2019-11-19',0,'2019-11-17 01:14:00','2019-11-17 01:14:00',9),(9,275.49,'2019-12-01',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',2),(10,275.49,'2019-12-15',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',2),(11,275.49,'2019-12-29',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',2),(12,125.05,'2019-12-04',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',3),(13,125.05,'2019-12-18',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',3),(14,125.05,'2020-01-01',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',3),(15,950.00,'2020-01-05',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',5),(16,950.00,'2020-02-05',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',5),(17,950.00,'2020-03-05',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',5),(18,68.30,'2019-12-17',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',6),(19,68.30,'2020-01-17',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',6),(20,68.30,'2020-02-17',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',6),(21,100.50,'2019-12-20',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',7),(22,100.50,'2020-01-20',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',7),(23,100.50,'2020-02-20',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',7),(24,347.59,'2020-01-10',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',8),(25,347.59,'2020-02-10',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',8),(26,347.59,'2020-03-10',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',8),(27,75.97,'2019-12-19',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',9),(28,75.97,'2020-01-19',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',9),(29,75.97,'2020-02-19',0,'2019-11-17 01:23:00','2019-11-17 01:23:00',9);
/*!40000 ALTER TABLE `Bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RecurBills`
--

DROP TABLE IF EXISTS `RecurBills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RecurBills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `recurbills_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecurBills`
--

LOCK TABLES `RecurBills` WRITE;
/*!40000 ALTER TABLE `RecurBills` DISABLE KEYS */;
INSERT INTO `RecurBills` VALUES (2,'Car Payment',275.49,'bi-weekly','2019-11-03','2019-11-16 18:36:49','2019-11-16 18:36:49',1),(3,'Car Payment',125.05,'bi-weekly','2019-11-06','2019-11-17 01:06:10','2019-11-17 01:06:10',2),(5,'Rent',950.00,'monthly','2019-11-05','2019-11-17 01:07:50','2019-11-17 01:07:50',2),(6,'Electricity',68.30,'monthly','2019-11-17','2019-11-17 01:11:02','2019-11-17 01:11:02',2),(7,'Student Loan',100.50,'monthly','2019-11-20','2019-11-17 01:11:43','2019-11-17 01:11:43',2),(8,'Visa',347.59,'monthly','2019-11-10','2019-11-17 01:12:29','2019-11-17 01:12:29',2),(9,'Cell Phone',75.97,'monthly','2019-11-19','2019-11-17 01:13:19','2019-11-17 01:13:19',2);
/*!40000 ALTER TABLE `RecurBills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'test@test.com','$2a$10$1RiQt/Piov8V6k5eaelCkec.v/BHlZnIDVoVuCMo.FnTA.UCgBuy6','2019-11-16 18:36:42','2019-11-16 18:36:42'),(2,'bill@mail.com','$2a$10$SDFqkTDMqoNxIUtPVYQx4uIayczxKxM7m2qWjORwEiCCJLH6g4oBG','2019-11-17 00:59:59','2019-11-17 00:59:59');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-16 20:42:15
