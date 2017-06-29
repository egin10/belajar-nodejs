-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.0.51b-community - MySQL Community Edition (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for belajar_nodejs
CREATE DATABASE IF NOT EXISTS `belajar_nodejs` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `belajar_nodejs`;

-- Dumping structure for table belajar_nodejs.events
CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int(11) NOT NULL auto_increment,
  `event_name` varchar(50) NOT NULL,
  `descriptions` text NOT NULL,
  `event_date` date NOT NULL,
  PRIMARY KEY  (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table belajar_nodejs.user
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY  (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
