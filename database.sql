-- phpMyAdmin SQL Dump
-- version 2.11.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 29, 2017 at 06:04 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `belajar_nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int(11) NOT NULL auto_increment,
  `event_name` varchar(50) NOT NULL,
  `descriptions` text NOT NULL,
  `event_date` varchar(20) NOT NULL,
  PRIMARY KEY  (`event_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `descriptions`, `event_date`) VALUES
(1, 'Pitching', 'Try to Pitching on your class room', '20-01-2017'),
(2, 'Rendering', 'Do rendering file', '20-02-2017'),
(3, 'Tagging', 'Do Tagging on there', '20-02-2017'),
(4, 'Googling', 'Try to Googling new topic over there', '19-03-2017'),
(5, 'Talking', 'Talking with my friends.', '19-04-2017'),
(6, 'Moving', 'Try to moving on from here.', '20-03-2017');
