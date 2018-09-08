-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2018 at 10:39 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nickscomputer`
--

-- --------------------------------------------------------

--
-- Table structure for table `attached_product_detail`
--

CREATE TABLE `attached_product_detail` (
  `apd_id` int(11) NOT NULL,
  `facebookid` varchar(500) DEFAULT NULL,
  `product_id` varchar(500) DEFAULT NULL,
  `brand` int(5) DEFAULT NULL,
  `phone` int(5) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` text,
  `updated_on` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attached_product_detail`
--

INSERT INTO `attached_product_detail` (`apd_id`, `facebookid`, `product_id`, `brand`, `phone`, `price`, `image`, `status`, `created_on`, `updated_on`) VALUES
(1, '1879276758759273', '13958011-4f21-5cb8-9465-6be3fb841d05', 1, 1, 3, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39332602_1173740216100177_4586102019231580160_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=c5ce3fd2126b7cb2dfefdae3303cb08d&oe=5C05B6AA', 0, '1534435371', '1534435371'),
(2, '1879276758759273', '13958011-4f21-5cb8-9465-6be3fb841d05', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39332602_1173740216100177_4586102019231580160_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=c5ce3fd2126b7cb2dfefdae3303cb08d&oe=5C05B6AA', 0, '1534435937', '1534435937'),
(3, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39261811_1364122293722351_3735466188432474112_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=2e9ee8cef52eac3fa7a60c37487a3fb6&oe=5BF1EA4D', 0, '1534436474', '1534436474'),
(4, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442180_244010006440724_5032689110897131520_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=38a518c1350e35a88d944a05f199a8ad&oe=5C10BB67', 0, '1534436821', '1534436821'),
(5, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442180_244010006440724_5032689110897131520_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=38a518c1350e35a88d944a05f199a8ad&oe=5C10BB67', 0, '1534437262', '1534437262'),
(6, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442180_244010006440724_5032689110897131520_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=38a518c1350e35a88d944a05f199a8ad&oe=5C10BB67', 0, '1534437267', '1534437267'),
(7, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442180_244010006440724_5032689110897131520_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=38a518c1350e35a88d944a05f199a8ad&oe=5C10BB67', 0, '1534437902', '1534437902'),
(8, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39284453_305457766696454_8659357764767711232_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=005d9adc91501553c7b0a58c9de82012&oe=5BFC9E82', 0, '1534438252', '1534438252'),
(9, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39404704_296762394465451_166125877560606720_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=b8122bc1202b742cf182f703c4299631&oe=5C075D26', 0, '1534505608', '1534505608'),
(10, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442747_250028968975634_3366522008010489856_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=a1726c78b3fa10f970886cb4db8aeb37&oe=5C0B3475', 0, '1534506477', '1534506477'),
(11, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 3, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39395235_1947065388677614_278438297393430528_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=6f96a9d145fdc4f47925fab3be204e3b&oe=5BF20D48', 0, '1534530906', '1534530906'),
(12, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 0, 0, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39467348_2174381915945470_1296168082791727104_n.png?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=f034862695372eb6bca39a9727e68497&oe=5BF99AF4', 0, '1534582599', '1534582599'),
(13, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39409331_277639659499110_3091837069652131840_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=cd0d14044531bee99daebfec375bf6c6&oe=5C06C522', 0, '1534588774', '1534588774'),
(14, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39442713_223733111640568_2248647049991946240_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=f9794cc7844be8efd5f0aa04267762fb&oe=5BFBB150', 0, '1534588828', '1534588828'),
(15, '1879276758759273', 'e2fa537b-7bec-5eed-9c28-ad4e9207012a', 1, 1, 1, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39453532_281543412659742_1687349645367312384_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=5f547d6f79c2cf1512762d95195a28e3&oe=5C07E6D9', 0, '1534589167', '1534589167');

-- --------------------------------------------------------

--
-- Table structure for table `attach_product_price`
--

CREATE TABLE `attach_product_price` (
  `ap_id` int(11) NOT NULL,
  `brand_fk` int(5) DEFAULT NULL,
  `phone_fk` int(5) DEFAULT NULL,
  `price_fk` int(5) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `shipping_cost` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` text,
  `updated_on` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attach_product_price`
--

INSERT INTO `attach_product_price` (`ap_id`, `brand_fk`, `phone_fk`, `price_fk`, `price`, `shipping_cost`, `discount`, `status`, `created_on`, `updated_on`) VALUES
(1, 1, 1, 1, 400, 50, 10, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `br_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brand`
--

INSERT INTO `brand` (`br_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 1, 'text', 'Apple', 'apple-1', 1, 2147483647, 2147483647),
(2, 1, 'text', 'Honour', 'honour-2', 1, 2147483647, 2147483647),
(3, 1, 'text', 'Lenovo', 'lenovo-3', 1, 2147483647, 2147483647),
(4, 1, 'text', 'Motorola', 'motorola-4', 1, 2147483647, 2147483647),
(5, 1, 'text', 'Oneplus', 'oneplus-5', 1, 2147483647, 2147483647),
(6, 1, 'text', 'Oppo', 'oppo-6', 1, 2147483647, 2147483647),
(7, 1, 'text', 'Samsung', 'samsung-7', 1, 2147483647, 2147483647),
(8, 1, 'text', 'Vivo', 'vivo-8', 1, 2147483647, 2147483647),
(9, 1, 'text', 'Xiaomi', 'xiaomi-9', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ct_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ct_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 12, 'text', 'Tv series-addict', 'tvseriesadict-1', 1, 2147483647, 2147483647),
(2, 12, 'text', 'Gammer', 'gammer-2', 1, 2147483647, 2147483647),
(3, 12, 'text', 'Sarcasm', 'sarcasm-3', 1, 2147483647, 2147483647),
(4, 12, 'text', 'LGBT', 'lgbt-4', 1, 2147483647, 2147483647),
(5, 12, 'text', 'GYM', 'gym-5', 1, 2147483647, 2147483647),
(6, 12, 'text', 'Quotes', 'quotes-6', 1, 2147483647, 2147483647),
(7, 12, 'text', 'Relationship', 'relationship-7', 1, 2147483647, 2147483647),
(8, 12, 'text', 'PUBG', 'pubg-8', 1, 2147483647, 2147483647),
(9, 12, 'text', 'Cricket', 'cricket-9', 1, 2147483647, 2147483647),
(10, 12, 'text', 'Back', 'categoryBack', 1, 2147483647, 2147483647),
(11, 12, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `contact` int(10) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `email`, `contact`, `status`, `created_on`, `updated_on`) VALUES
(1, 'Nitesh', 'jhanitesh10@gmail.com', 2147483647, 1, 2147483647, 2147483647),
(2, 'Nikhil', 'nikhil009@gmail.com', 1234567890, 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `complete_payment`
--

CREATE TABLE `complete_payment` (
  `pmt_id` int(11) NOT NULL,
  `payment_id` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `shorturl` varchar(200) DEFAULT NULL,
  `longurl` varchar(200) DEFAULT NULL,
  `purpose` varchar(250) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `fees` int(11) DEFAULT NULL,
  `currency` varchar(11) DEFAULT NULL,
  `buyer` varchar(100) DEFAULT NULL,
  `buyer_name` varchar(100) DEFAULT NULL,
  `buyer_phone` varchar(20) DEFAULT NULL,
  `payment_request_id` varchar(100) DEFAULT NULL,
  `mac` varchar(200) DEFAULT NULL,
  `createdat` int(11) DEFAULT NULL,
  `updatedat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complete_payment`
--

INSERT INTO `complete_payment` (`pmt_id`, `payment_id`, `status`, `shorturl`, `longurl`, `purpose`, `amount`, `fees`, `currency`, `buyer`, `buyer_name`, `buyer_phone`, `payment_request_id`, `mac`, `createdat`, `updatedat`) VALUES
(1, 'MOJO8807005A46534304', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/35fe3e92165940e2991f10583f231fb5', 'Freak Phone case payment', 19, 0, 'INR', 'noone@gmail.com', 'Nikhil Landge', '+911234567890', '35fe3e92165940e2991f10583f231fb5', '89582c667d5aba7877f592a96e9a6da717c1cc26', 1533660590, 1533660590),
(2, 'MOJO8807005A46534306', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/e7442b112cae4210bc807e1db7494815', 'Freak Phone case payment', 19, 0, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+919004250810', 'e7442b112cae4210bc807e1db7494815', 'de6775a3ddf72dea21f6c14eeafd3592f437f611', 1533660891, 1533660891),
(4, 'MOJO8807005A46534309', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/12b608838a2d4518b4ec4668f7d3392b', 'Freak Phone case payment', 19, 0, 'INR', 'nikhillandge50@yahoo.in', 'Nikhil Landge', '+911234567890', '12b608838a2d4518b4ec4668f7d3392b', '2d30ea3120b3f7932174173c1ae92978ea9ceb78', 1533661641, 1533661641),
(5, 'MOJO8808005A97056989', 'Failed', '', 'https://test.instamojo.com/@jhanitesh10/ced16fa0a05044f488e132a7076c8ace', 'Freak Phone case payment', 19, 0, 'INR', 'nikhillandge50@yahoo.in', 'Nikhil Landge', '+911234567890', 'ced16fa0a05044f488e132a7076c8ace', 'cebf2009dd3981adffc4bfcbc74f87e11d66bd54', 1533727019, 1533727019),
(9, 'MOJO8808005A97057061', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/237bdaafdd0241e089266dfd7802e5bb', 'Freak Phone case payment', 19, 0, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+919004250810', '237bdaafdd0241e089266dfd7802e5bb', 'aadcbf15719204616fed83baa4ef281d32f05f69', 1533729373, 1533729373),
(10, 'MOJO8808005A97057066', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/09e0948b87f847169faf4ad149ad13ff', 'Freak Phone case payment', 19, 0, 'INR', 'nikhillandge50@yahoo.in', 'Nikhil Landge', '+911234567890', '09e0948b87f847169faf4ad149ad13ff', 'f2b585044dd1d3d9ba96c1290ab29701ab195130', 1533729465, 1533729465),
(11, 'MOJO8808005A97057076', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/724cab125da24c959f676413080e000f', 'Freak Phone case payment', 19, 0, 'INR', 'nikhillandge50@yahoo.in', 'Nikhil Landge', '+911234567890', '724cab125da24c959f676413080e000f', '9206509fd69d9d9f8031df776715376f85443865', 1533729694, 1533729694),
(14, 'MOJO8808005A97057091', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/8b89ffd22dd84ef58d78ab1027aaf288', 'Freak Phone case payment', 19, 0, 'INR', 'nikhillandge50@yahoo.in', 'Nikhil Landge', '+911234567890', '8b89ffd22dd84ef58d78ab1027aaf288', 'ac4d3f3f0714834036f5ee67f59de6bcbb891bea', 1533730245, 1533730245),
(17, 'MOJO8808005A97057107', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/3b6813b731bd491ea8a256b27dedce23', 'Freak Phone case payment', 369, 7, 'INR', 'nitesh@convrg.io', 'Nikhil Landge', '+919004250810', '3b6813b731bd491ea8a256b27dedce23', '5ab145643cc9111658e85076b5d5e3336fa94f1a', 1533731061, 1533731061),
(19, 'MOJO8808005A97057122', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/da9a4a97fd9b47059b49be4512a7f811', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+911234567890', 'da9a4a97fd9b47059b49be4512a7f811', 'd5965408ff5e8905b838c587dcbabadfa2b21247', 1533731936, 1533731936),
(33, 'MOJO8809005A44288460', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/4e51b99a162241d484080bca35439fda', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+919004250810', '4e51b99a162241d484080bca35439fda', 'a5ee94c8adfc848cbba68b98ffa3edf30c83774f', 1533813636, 1533813636),
(37, 'MOJO8810005A82582759', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/75cd857317fd41a7967e2c2cf1257393', 'Freak Phone case payment', 960, 18, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+912342342234', '75cd857317fd41a7967e2c2cf1257393', '303a4557668232f3e671a57dc7f0e0ad674fb8a1', 1533929139, 1533929139),
(38, 'MOJO8816005A99507564', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/983c9f2c2a0a4d9eb6e7aeff1899dc56', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+911234567890', '983c9f2c2a0a4d9eb6e7aeff1899dc56', '2acdee8c18be14fee5ae4f2bf4b9453e1a7d7c53', 1534427718, 1534427718),
(41, 'MOJO8816005A99507635', 'Failed', '', 'https://test.instamojo.com/@jhanitesh10/8fa88b3310ad45b2ad5c99d24770a28c', 'Freak Phone case payment', 369, 0, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+919004250810', '8fa88b3310ad45b2ad5c99d24770a28c', 'fa30fdf0a480d0db5a199ea58b883f87727a9c78', 1534433219, 1534433219),
(42, 'MOJO8816005A99507641', 'Failed', '', 'https://test.instamojo.com/@jhanitesh10/965a8976c84e49da818b4dc5e897b9e9', 'Freak Phone case payment', 369, 0, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+911234557880', '965a8976c84e49da818b4dc5e897b9e9', '9006bc4f50f6db639a1db302d88a469b454f5d28', 1534433622, 1534433622),
(43, 'MOJO8816005A99507653', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/14a1d4f5ec1a409a9ab57075d97f72e8', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh10@gmail.com', 'Nikhil Landge', '+911234567890', '14a1d4f5ec1a409a9ab57075d97f72e8', '6fea74fd558e7e8582f38cc170c537348ac55365', 1534434509, 1534434509),
(46, 'MOJO8817005A84628481', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/51ec3980ce954d61a77b6a88b87688d4', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh1000@gmail.com', 'Nikhil Landge', '+911234567890', '51ec3980ce954d61a77b6a88b87688d4', 'e3c2c523ab10db322a1d1e28f10584be006ec548', 1534506271, 1534506271),
(48, 'MOJO8818005A49031844', 'Credit', '', 'https://test.instamojo.com/@jhanitesh10/1ecf1fe3b4f44384abf922a2c5d22c31', 'Freak Phone case payment', 369, 7, 'INR', 'jhanitesh1000@gmail.com', 'Nikhil Landge', '+911234567890', '1ecf1fe3b4f44384abf922a2c5d22c31', '3799c066dfd00e9158c7d34cce2648b708893630', 1534587402, 1534587402);

-- --------------------------------------------------------

--
-- Table structure for table `facebook_user`
--

CREATE TABLE `facebook_user` (
  `user_id` int(11) NOT NULL,
  `facebookid` varchar(30) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `locale` varchar(50) DEFAULT NULL,
  `timezone` varchar(50) DEFAULT NULL,
  `photos` text,
  `picture` text,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facebook_user`
--

INSERT INTO `facebook_user` (`user_id`, `facebookid`, `name`, `firstname`, `lastname`, `gender`, `locale`, `timezone`, `photos`, `picture`, `created_on`, `updated_on`) VALUES
(1, '1229755263793213', 'Nitesh Jha', 'Nitesh', 'Jha', 'male', 'en_US', '5.5', '{\"data\":[{\"created_time\":\"2018-03-16T01:37:13+0000\",\"id\":\"1729673010429434\"},{\"created_time\":\"2017-06-11T03:56:49+0000\",\"id\":\"1928892754049103\"},{\"created_time\":\"2017-06-09T09:05:39+0000\",\"id\":\"1356756437752549\"}],\"paging\":{\"cursors\":{\"before\":\"TVRjeU9UWTNNekF4TURReU9UUXpORG94TlRJeE1UWTBNemN6T2pNNU5EQTRPVFkwTURZAME56ZA3pOZAz09\",\"after\":\"TVRNMU5qYzFOalF6TnpjMU1qVTBPVG94TkRrMk9UazVOVFkzT2pNNU5EQTRPVFkwTURZAME56ZA3pOZAz09\"}}}', '{\"data\":{\"height\":50,\"is_silhouette\":true,\"url\":\"https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1229755263793213&height=50&width=50&ext=1529770326&hash=AeRAQaHa31DqWwhO\",\"width\":50}}', 1529511127, 1529511127),
(2, '1879276758759273', 'Nikhil Landge', 'Nikhil', 'Landge', 'male', 'en_GB', '5.5', NULL, '{\"data\":{\"height\":50,\"is_silhouette\":false,\"url\":\"https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1879276758759273&height=50&width=50&ext=1537543008&hash=AeSdAeQ_N5g05b1F\",\"width\":50}}', 1532598968, 1534951005),
(3, '2090529420958579', 'Nitesh Jha', 'Nitesh', 'Jha', 'male', 'en_US', '5.5', NULL, '{\"data\":{\"height\":50,\"is_silhouette\":true,\"url\":\"https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=2090529420958579&height=50&width=50&ext=1536396316&hash=AeSwFd926iswfaft\",\"width\":50}}', 1533749324, 1533804316);

-- --------------------------------------------------------

--
-- Table structure for table `help`
--

CREATE TABLE `help` (
  `h_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `help`
--

INSERT INTO `help` (`h_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 14, 'text', 'How to buy?', 'helpHowBuy', 1, 2147483647, 2147483647),
(2, 14, 'text', 'About', 'helpAbout', 1, 2147483647, 2147483647),
(3, 14, 'text', 'Contact', 'helpContact', 1, 2147483647, 2147483647),
(4, 14, 'text', 'FAQ', 'helpFaq', 1, 2147483647, 2147483647),
(5, 14, 'text', 'Feedback', 'helpFeedback', 1, 2147483647, 2147483647),
(6, 14, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `more`
--

CREATE TABLE `more` (
  `m_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `more`
--

INSERT INTO `more` (`m_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 13, 'text', 'Attache,what you want', 'moreAttachPic', 1, 2147483647, 2147483647),
(2, 13, 'text', 'Trendding', 'moreTopProduct', 1, 2147483647, 2147483647),
(3, 13, 'text', 'Help', 'moreHelp', 1, 2147483647, 2147483647),
(4, 13, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `pn_id` int(11) NOT NULL,
  `br_id` int(11) DEFAULT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`pn_id`, `br_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 1, 2, 'text', 'Iphone-4s', 'iphone4s-1', 1, 2147483647, 2147483647),
(2, 1, 2, 'text', 'Iphone-5', 'iphone5-2', 1, 2147483647, 2147483647),
(3, 1, 2, 'text', 'Iphone-5s', 'iphone5s-3', 1, 2147483647, 2147483647),
(4, 1, 2, 'text', 'Iphone-Se', 'iphonese-4', 1, 2147483647, 2147483647),
(5, 1, 2, 'text', 'Iphone-6', 'iphone6-5', 1, 2147483647, 2147483647),
(6, 1, 2, 'text', 'Iphone-7', 'iphone7-6', 1, 2147483647, 2147483647),
(7, 1, 2, 'text', 'Iphone-7plus', 'iphone7plus-7', 1, 2147483647, 2147483647),
(8, 1, 2, 'text', 'Iphone-X', 'iphonex-8', 1, 2147483647, 2147483647),
(9, 1, 2, 'text', 'Iphone-XPlus', 'iphonexplus-9', 1, 2147483647, 2147483647),
(10, 1, 2, 'text', 'Back', 'iphoneBack', 1, 2147483647, 2147483647),
(11, 1, 2, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(12, 2, 3, 'text', 'Honour-9Lite', 'honour9lite-1', 1, 2147483647, 2147483647),
(13, 2, 3, 'text', 'Honour-7X', 'honour7x-2', 1, 2147483647, 2147483647),
(14, 2, 3, 'text', 'Honour-7A', 'honour7a-3', 1, 2147483647, 2147483647),
(15, 2, 3, 'text', 'Honour-7C', 'honour7c-4', 1, 2147483647, 2147483647),
(16, 2, 3, 'text', 'Honour-8', 'honour8-5', 1, 2147483647, 2147483647),
(17, 2, 3, 'text', 'Honour-6X', 'hounour6x-6', 1, 2147483647, 2147483647),
(18, 2, 3, 'text', 'Back', 'honourBack', 1, 2147483647, 2147483647),
(19, 2, 3, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(20, 3, 4, 'text', 'Lenovo-K4 Note', 'lenovok4note-1', 1, 2147483647, 2147483647),
(21, 3, 4, 'text', 'Lenovo-k5 Vibe', 'lenovok5vibe-2', 1, 2147483647, 2147483647),
(22, 3, 4, 'text', 'Lenovo-k5 Note', 'lenovok5note-3', 1, 2147483647, 2147483647),
(23, 3, 4, 'text', 'Lenovo-k3 Note', 'lenovok3note-4', 1, 2147483647, 2147483647),
(24, 3, 4, 'text', 'Lenovo-K8 Note', 'lenovok8note-5', 1, 2147483647, 2147483647),
(25, 3, 4, 'text', 'Lenovo-K6 Power', 'lenovok6power-6', 1, 2147483647, 2147483647),
(26, 3, 4, 'text', 'Lenovo-k8 Plus', 'lenovok8plus-7', 1, 2147483647, 2147483647),
(27, 3, 4, 'text', 'Lenovo-P2', 'lenovop2-8', 1, 2147483647, 2147483647),
(28, 3, 4, 'text', 'Back', 'lenovoBack', 1, 2147483647, 2147483647),
(29, 3, 4, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(30, 4, 5, 'text', 'Moto-G4', 'motog4-1', 1, 2147483647, 2147483647),
(31, 4, 5, 'text', 'Moto-G5S Plus', 'motog5s-2', 1, 2147483647, 2147483647),
(32, 4, 5, 'text', 'Moto-X4', 'motox4-3', 1, 2147483647, 2147483647),
(33, 4, 5, 'text', 'Moto-G5S', 'motog5s-4', 1, 2147483647, 2147483647),
(34, 4, 5, 'text', 'Moto-G5', 'motog5-5', 1, 2147483647, 2147483647),
(35, 4, 5, 'text', 'Moto-G2', 'motog2-6', 1, 2147483647, 2147483647),
(36, 4, 5, 'text', 'Moto-G3', 'mtoog3-7', 1, 2147483647, 2147483647),
(37, 4, 5, 'text', 'Moto-XPlay', 'motoxplay-8', 1, 2147483647, 2147483647),
(38, 4, 5, 'text', 'Back', 'motorolaBack', 1, 2147483647, 2147483647),
(39, 4, 5, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(40, 5, 6, 'text', 'Oneplus-1', 'oneplus1-1', 1, 2147483647, 2147483647),
(41, 5, 6, 'text', 'Oneplus-2', 'oneplus2-2', 1, 2147483647, 2147483647),
(42, 5, 6, 'text', 'Oneplus-3', 'oneplus3-3', 1, 2147483647, 2147483647),
(43, 5, 6, 'text', 'Oneplus-3T', 'oneplus3t-4', 1, 2147483647, 2147483647),
(44, 5, 6, 'text', 'Oneplus-5', 'oneplus5-5', 1, 2147483647, 2147483647),
(45, 5, 6, 'text', 'Oneplus-5T', 'oneplus5t-6', 1, 2147483647, 2147483647),
(46, 5, 6, 'text', 'Oneplus-6', 'oneplus6-7', 1, 2147483647, 2147483647),
(47, 5, 6, 'text', 'Oneplus-6T', 'oneplus6t-8', 1, 2147483647, 2147483647),
(48, 5, 6, 'text', 'Back', 'oneplusBack', 1, 2147483647, 2147483647),
(49, 5, 6, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(50, 6, 7, 'text', 'Oppo-F5', 'oppof5-1', 1, 2147483647, 2147483647),
(51, 6, 7, 'text', 'Oppo-F7', 'oppof7-2', 1, 2147483647, 2147483647),
(52, 6, 7, 'text', 'Oppo-A37', 'oppoa37-3', 1, 2147483647, 2147483647),
(53, 6, 7, 'text', 'Oppo-A57', 'oppoa57-4', 1, 2147483647, 2147483647),
(54, 6, 7, 'text', 'Oppo-F1S', 'oppof1s-5', 1, 2147483647, 2147483647),
(55, 6, 7, 'text', 'Oppo-Real me 1', 'opporealme1-6', 1, 2147483647, 2147483647),
(56, 6, 7, 'text', 'Oppo-F3', 'oppof3-7', 1, 2147483647, 2147483647),
(57, 6, 7, 'text', 'Oppo-Neo 7', 'opponeo7-8', 1, 2147483647, 2147483647),
(58, 6, 7, 'text', 'Back', 'oppoBack', 1, 2147483647, 2147483647),
(59, 6, 7, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(60, 7, 8, 'text', 'Samsung G-J7', 'samsunggj7-1', 1, 2147483647, 2147483647),
(61, 7, 8, 'text', 'Samsung G-S9Plus', 'samsunggs9plus-2', 1, 2147483647, 2147483647),
(62, 7, 8, 'text', 'Samsung G-J8', 'samsunggj8-3', 1, 2147483647, 2147483647),
(63, 7, 8, 'text', 'Samsung G-A8Plus', 'samsungga8plus-4', 1, 2147483647, 2147483647),
(64, 7, 8, 'text', 'Samsung G-Note8', 'samsunggnote8-5', 1, 2147483647, 2147483647),
(65, 7, 8, 'text', 'Samsung G-J7Prime', 'sasunggj7prime-6', 1, 2147483647, 2147483647),
(66, 7, 8, 'text', 'Samsung G-J5Prime', 'samsunggj5primve-7', 1, 2147483647, 2147483647),
(67, 7, 8, 'text', 'Samsung G-J7Max', 'samsunggj7max-8', 1, 2147483647, 2147483647),
(68, 7, 8, 'text', 'Back', 'samsungBack', 1, 2147483647, 2147483647),
(69, 7, 8, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(70, 8, 9, 'text', 'Vivo-V9', 'vivov9-1', 1, 2147483647, 2147483647),
(71, 8, 9, 'text', 'Vivo-V5', 'vivov5-2', 1, 2147483647, 2147483647),
(72, 8, 9, 'text', 'Vivo-Y55', 'vivoy55-3', 1, 2147483647, 2147483647),
(73, 8, 9, 'text', 'Vivo-V7', 'vivov7-4', 1, 2147483647, 2147483647),
(74, 8, 9, 'text', 'Vivo-V7Plus', 'vivov7plus-5', 1, 2147483647, 2147483647),
(75, 8, 9, 'text', 'Vivo-Y53', 'vivoy53-6', 1, 2147483647, 2147483647),
(76, 8, 9, 'text', 'Vivo-Y21', 'vivoy21-7', 1, 2147483647, 2147483647),
(77, 8, 9, 'text', 'Vivo-Y83', 'vivoy83-8', 1, 2147483647, 2147483647),
(78, 8, 9, 'text', 'Back', 'vivoBack', 1, 2147483647, 2147483647),
(79, 8, 9, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647),
(80, 9, 10, 'text', 'Redmi Note-4', 'redminote4-1', 1, 2147483647, 2147483647),
(81, 9, 10, 'text', 'Redmi Note-5Pro', 'redminote5pro-2', 1, 2147483647, 2147483647),
(82, 9, 10, 'text', 'Redmi NOte-4', 'redminote4-3', 1, 2147483647, 2147483647),
(83, 9, 10, 'text', 'Redmi NOte-Y1', 'redminotey1-4', 1, 2147483647, 2147483647),
(84, 9, 10, 'text', 'Redmi Note-5', 'redminote5-5', 1, 2147483647, 2147483647),
(85, 9, 10, 'text', 'Redmi-5', 'redmi5-6', 1, 2147483647, 2147483647),
(86, 9, 10, 'text', 'Redmi Note-3', 'redminote3-7', 1, 2147483647, 2147483647),
(87, 9, 10, 'text', 'Redmi-A1', 'redmia1-8', 1, 2147483647, 2147483647),
(88, 9, 10, 'text', 'Back', 'redmiBack', 1, 2147483647, 2147483647),
(89, 9, 10, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `pr_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`pr_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 11, 'text', '199', 'price-1', 1, 2147483647, 2147483647),
(2, 11, 'text', '299-350', 'price-2', 1, 2147483647, 2147483647),
(3, 11, 'text', '399-500', 'price-3', 1, 2147483647, 2147483647),
(4, 11, 'text', 'Back', 'priceBack', 1, 2147483647, 2147483647),
(5, 11, 'text', 'Main-menu', 'mainMenu', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pr_id` int(11) NOT NULL,
  `product_type` varchar(50) DEFAULT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `subtitle` varchar(100) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `shipping_cost` int(11) DEFAULT NULL,
  `isAvailable` int(3) DEFAULT NULL,
  `product_count` int(11) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `top_status` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pr_id`, `product_type`, `product_id`, `title`, `subtitle`, `image`, `price`, `discount`, `shipping_cost`, `isAvailable`, `product_count`, `status`, `top_status`) VALUES
(1, 'type1', 'product1', 'MY first product no need to title', 'subtitle me', 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 399, 20, 50, 1, 100, 0, 1),
(2, 'type1', 'product2', 'MY first product no need to title', 'subtitle me', 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 4000, 80, 0, 1, 100, 0, 1),
(3, 'type1', 'product3', 'MY first product no need to title', 'subtitle me', 'https://ibb.co/iQWSd9', 299, 5, 50, 1, 10, 0, 0),
(4, 'type1', 'product4', 'MY first product no need to title', 'subtitle me', 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 400, 20, 0, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_attribute`
--

CREATE TABLE `product_attribute` (
  `pa_id` int(11) NOT NULL,
  `whom_fk` int(5) DEFAULT NULL,
  `brand_fk` int(5) DEFAULT NULL,
  `phone_fk` int(5) DEFAULT NULL,
  `price_fk` int(5) DEFAULT NULL,
  `category_fk` int(5) DEFAULT NULL,
  `product_fk` int(5) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_attribute`
--

INSERT INTO `product_attribute` (`pa_id`, `whom_fk`, `brand_fk`, `phone_fk`, `price_fk`, `category_fk`, `product_fk`, `status`, `created_on`, `updated_on`) VALUES
(1, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(2, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(3, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(4, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(5, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(6, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(7, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(8, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(9, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(10, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(11, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(12, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(13, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(14, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(15, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(16, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(17, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(18, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(19, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(20, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(21, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(22, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(23, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(24, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(25, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(26, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(27, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(28, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(29, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(30, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(31, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(32, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(33, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(34, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(35, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(36, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(37, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(38, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(39, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(40, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(41, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(42, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(43, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(44, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(45, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(46, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(47, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(48, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(49, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(50, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(51, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(52, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(53, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(54, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(55, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(56, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(57, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(58, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(59, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(60, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(61, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(62, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(63, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(64, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(65, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(66, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(67, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(68, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(69, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(70, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(71, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(72, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(73, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(74, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(75, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(76, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(77, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(78, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(79, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(80, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(81, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(82, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(83, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(84, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(85, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(86, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(87, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(88, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(89, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(90, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(91, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(92, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(93, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(94, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(95, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(96, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(97, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(98, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(99, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(100, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(101, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(102, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(103, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(104, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(105, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(106, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(107, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(108, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(109, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(110, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(111, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(112, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(113, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(114, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(115, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(116, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(117, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(118, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(119, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(120, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(121, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(122, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(123, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(124, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(125, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(126, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(127, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(128, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(129, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(130, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(131, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(132, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(133, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(134, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(135, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(136, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(137, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(138, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(139, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(140, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(141, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(142, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(143, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(144, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(145, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(146, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(147, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(148, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(149, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(150, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(151, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(152, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(153, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(154, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(155, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(156, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(157, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(158, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(159, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(160, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(161, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(162, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(163, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(164, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(165, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(166, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(167, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(168, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(169, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(170, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(171, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(172, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(173, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(174, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(175, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(176, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(177, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(178, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(179, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(180, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(181, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(182, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(183, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(184, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(185, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(186, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(187, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(188, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(189, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(190, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(191, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(192, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(193, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(194, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(195, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(196, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(197, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(198, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(199, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(200, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(201, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(202, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(203, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(204, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(205, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(206, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(207, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(208, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(209, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(210, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(211, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(212, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(213, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(214, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(215, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(216, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(217, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(218, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(219, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(220, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(221, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(222, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(223, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(224, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(225, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(226, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(227, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(228, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(229, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(230, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(231, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(232, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(233, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(234, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(235, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(236, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(237, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(238, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(239, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(240, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(241, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(242, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(243, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(244, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(245, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(246, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(247, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(248, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(249, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(250, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(251, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(252, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(253, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(254, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(255, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(256, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(257, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(258, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(259, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(260, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(261, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(262, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(263, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(264, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(265, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(266, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(267, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(268, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(269, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(270, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(271, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(272, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(273, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(274, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(275, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(276, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(277, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(278, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(279, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(280, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(281, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(282, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(283, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(284, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(285, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(286, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(287, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(288, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(289, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(290, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(291, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(292, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(293, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(294, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(295, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(296, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(297, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(298, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(299, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(300, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(301, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(302, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(303, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(304, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(305, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(306, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(307, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(308, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(309, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(310, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(311, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(312, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(313, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(314, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(315, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(316, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(317, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(318, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(319, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(320, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(321, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(322, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(323, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(324, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(325, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(326, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(327, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(328, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(329, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(330, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(331, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(332, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(333, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(334, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(335, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(336, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(337, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(338, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(339, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(340, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(341, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(342, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(343, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(344, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(345, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(346, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(347, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(348, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(349, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(350, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(351, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(352, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(353, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(354, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(355, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(356, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(357, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(358, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(359, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(360, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(361, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(362, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(363, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(364, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(365, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(366, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(367, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(368, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(369, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(370, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(371, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(372, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(373, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(374, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(375, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(376, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(377, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(378, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(379, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(380, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(381, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(382, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(383, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(384, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(385, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(386, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(387, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(388, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(389, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(390, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(391, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(392, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(393, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(394, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(395, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(396, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(397, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(398, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(399, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(400, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(401, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(402, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(403, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(404, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(405, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(406, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(407, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(408, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(409, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(410, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(411, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(412, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(413, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(414, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(415, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(416, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(417, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(418, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(419, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(420, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(421, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(422, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(423, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(424, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(425, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(426, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(427, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(428, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(429, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(430, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(431, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(432, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(433, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(434, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(435, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(436, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(437, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(438, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(439, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(440, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(441, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(442, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(443, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(444, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(445, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(446, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(447, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(448, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(449, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(450, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(451, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(452, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(453, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(454, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(455, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(456, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(457, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(458, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(459, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(460, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(461, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(462, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(463, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(464, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(465, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(466, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(467, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(468, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(469, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(470, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(471, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(472, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(473, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(474, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(475, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(476, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(477, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(478, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(479, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(480, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(481, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(482, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(483, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(484, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(485, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(486, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(487, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(488, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(489, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(490, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(491, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(492, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(493, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(494, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(495, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(496, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(497, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(498, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(499, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(500, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(501, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(502, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(503, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(504, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(505, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(506, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(507, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(508, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(509, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(510, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(511, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(512, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(513, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(514, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(515, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(516, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(517, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(518, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(519, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(520, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(521, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(522, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(523, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(524, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(525, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(526, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(527, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(528, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(529, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(530, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(531, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(532, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(533, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(534, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(535, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(536, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(537, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(538, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(539, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(540, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(541, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(542, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(543, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(544, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(545, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(546, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(547, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(548, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(549, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(550, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(551, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(552, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(553, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(554, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(555, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(556, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(557, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(558, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(559, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(560, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(561, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(562, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(563, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(564, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(565, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(566, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(567, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(568, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(569, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(570, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(571, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(572, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(573, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(574, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(575, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(576, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(577, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(578, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(579, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(580, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(581, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(582, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(583, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(584, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(585, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(586, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(587, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(588, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(589, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(590, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(591, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(592, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(593, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(594, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(595, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(596, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(597, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(598, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(599, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(600, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(601, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(602, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(603, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(604, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(605, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(606, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(607, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(608, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(609, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(610, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(611, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(612, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(613, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(614, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(615, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(616, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(617, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(618, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(619, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(620, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(621, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(622, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(623, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(624, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(625, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(626, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(627, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(628, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(629, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(630, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(631, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(632, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(633, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(634, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(635, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(636, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(637, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(638, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(639, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(640, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(641, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(642, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(643, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(644, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(645, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(646, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(647, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(648, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(649, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(650, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(651, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(652, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(653, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(654, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(655, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(656, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(657, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(658, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(659, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(660, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(661, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(662, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(663, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(664, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(665, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(666, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(667, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(668, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(669, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(670, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(671, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(672, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(673, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(674, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(675, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(676, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(677, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(678, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(679, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(680, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(681, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(682, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(683, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(684, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(685, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(686, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(687, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(688, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(689, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(690, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(691, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(692, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(693, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(694, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(695, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(696, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(697, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(698, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(699, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(700, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(701, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(702, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(703, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(704, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(705, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(706, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(707, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(708, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(709, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(710, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(711, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(712, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(713, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(714, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(715, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(716, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(717, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(718, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(719, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(720, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(721, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(722, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(723, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(724, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(725, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(726, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(727, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(728, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(729, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(730, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(731, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(732, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(733, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(734, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(735, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(736, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(737, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(738, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(739, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(740, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(741, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(742, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(743, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(744, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(745, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(746, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(747, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(748, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(749, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(750, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(751, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(752, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(753, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(754, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(755, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(756, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(757, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(758, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(759, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(760, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(761, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(762, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(763, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(764, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(765, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(766, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(767, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(768, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(769, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(770, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(771, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(772, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(773, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(774, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(775, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(776, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(777, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(778, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(779, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(780, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(781, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(782, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(783, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(784, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(785, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(786, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(787, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(788, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(789, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(790, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(791, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(792, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(793, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(794, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(795, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(796, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(797, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(798, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(799, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(800, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(801, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(802, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(803, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(804, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(805, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(806, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(807, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(808, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(809, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(810, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(811, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(812, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(813, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(814, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(815, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(816, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(817, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(818, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(819, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(820, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(821, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(822, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(823, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(824, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(825, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(826, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(827, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(828, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(829, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(830, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(831, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(832, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(833, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(834, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647),
(835, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(836, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(837, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(838, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(839, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(840, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(841, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(842, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(843, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(844, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(845, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(846, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(847, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(848, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(849, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(850, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(851, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(852, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(853, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(854, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(855, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(856, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(857, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(858, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(859, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(860, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(861, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(862, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(863, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(864, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647),
(865, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(866, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(867, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(868, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(869, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(870, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(871, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(872, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(873, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(874, NULL, 1, 1, 2, 1, 1, 1, 2147483647, 2147483647),
(875, NULL, 1, 1, 2, 2, 1, 1, 2147483647, 2147483647),
(876, NULL, 1, 1, 2, 3, 1, 1, 2147483647, 2147483647),
(877, NULL, 1, 1, 2, 4, 1, 1, 2147483647, 2147483647),
(878, NULL, 1, 1, 2, 5, 1, 1, 2147483647, 2147483647),
(879, NULL, 1, 1, 2, 6, 1, 1, 2147483647, 2147483647),
(880, NULL, 1, 1, 2, 7, 1, 1, 2147483647, 2147483647),
(881, NULL, 1, 1, 2, 8, 1, 1, 2147483647, 2147483647),
(882, NULL, 1, 1, 2, 9, 1, 1, 2147483647, 2147483647),
(883, NULL, 1, 1, 3, 1, 1, 1, 2147483647, 2147483647),
(884, NULL, 1, 1, 3, 2, 1, 1, 2147483647, 2147483647),
(885, NULL, 1, 1, 3, 3, 1, 1, 2147483647, 2147483647),
(886, NULL, 1, 1, 3, 4, 1, 1, 2147483647, 2147483647),
(887, NULL, 1, 1, 3, 5, 1, 1, 2147483647, 2147483647),
(888, NULL, 1, 1, 3, 6, 1, 1, 2147483647, 2147483647),
(889, NULL, 1, 1, 3, 7, 1, 1, 2147483647, 2147483647),
(890, NULL, 1, 1, 3, 8, 1, 1, 2147483647, 2147483647),
(891, NULL, 1, 1, 3, 9, 1, 1, 2147483647, 2147483647),
(892, NULL, 1, 1, 1, 1, 1, 1, 2147483647, 2147483647),
(893, NULL, 1, 1, 1, 2, 1, 1, 2147483647, 2147483647),
(894, NULL, 1, 1, 1, 3, 1, 1, 2147483647, 2147483647),
(895, NULL, 1, 1, 1, 4, 1, 1, 2147483647, 2147483647),
(896, NULL, 1, 1, 1, 5, 1, 1, 2147483647, 2147483647),
(897, NULL, 1, 1, 1, 6, 1, 1, 2147483647, 2147483647),
(898, NULL, 1, 1, 1, 7, 1, 1, 2147483647, 2147483647),
(899, NULL, 1, 1, 1, 8, 1, 1, 2147483647, 2147483647),
(900, NULL, 1, 1, 1, 9, 1, 1, 2147483647, 2147483647),
(901, NULL, 1, 2, 2, 1, 1, 1, 2147483647, 2147483647),
(902, NULL, 1, 2, 2, 2, 1, 1, 2147483647, 2147483647),
(903, NULL, 1, 2, 2, 3, 1, 1, 2147483647, 2147483647),
(904, NULL, 1, 2, 2, 4, 1, 1, 2147483647, 2147483647),
(905, NULL, 1, 2, 2, 5, 1, 1, 2147483647, 2147483647),
(906, NULL, 1, 2, 2, 6, 1, 1, 2147483647, 2147483647),
(907, NULL, 1, 2, 2, 7, 1, 1, 2147483647, 2147483647),
(908, NULL, 1, 2, 2, 8, 1, 1, 2147483647, 2147483647),
(909, NULL, 1, 2, 2, 9, 1, 1, 2147483647, 2147483647),
(910, NULL, 1, 3, 3, 1, 1, 1, 2147483647, 2147483647),
(911, NULL, 1, 3, 3, 2, 1, 1, 2147483647, 2147483647),
(912, NULL, 1, 3, 3, 3, 1, 1, 2147483647, 2147483647),
(913, NULL, 1, 3, 3, 4, 1, 1, 2147483647, 2147483647),
(914, NULL, 1, 3, 3, 5, 1, 1, 2147483647, 2147483647),
(915, NULL, 1, 3, 3, 6, 1, 1, 2147483647, 2147483647),
(916, NULL, 1, 3, 3, 7, 1, 1, 2147483647, 2147483647),
(917, NULL, 1, 3, 3, 8, 1, 1, 2147483647, 2147483647),
(918, NULL, 1, 3, 3, 9, 1, 1, 2147483647, 2147483647),
(919, NULL, 1, 4, 1, 1, 1, 1, 2147483647, 2147483647),
(920, NULL, 1, 4, 1, 2, 1, 1, 2147483647, 2147483647),
(921, NULL, 1, 4, 1, 3, 1, 1, 2147483647, 2147483647),
(922, NULL, 1, 4, 1, 4, 1, 1, 2147483647, 2147483647),
(923, NULL, 1, 4, 1, 5, 1, 1, 2147483647, 2147483647),
(924, NULL, 1, 4, 1, 6, 1, 1, 2147483647, 2147483647),
(925, NULL, 1, 4, 1, 7, 1, 1, 2147483647, 2147483647),
(926, NULL, 1, 4, 1, 8, 1, 1, 2147483647, 2147483647),
(927, NULL, 1, 4, 1, 9, 1, 1, 2147483647, 2147483647),
(928, NULL, 1, 5, 2, 1, 1, 1, 2147483647, 2147483647),
(929, NULL, 1, 5, 2, 2, 1, 1, 2147483647, 2147483647),
(930, NULL, 1, 5, 2, 3, 1, 1, 2147483647, 2147483647),
(931, NULL, 1, 5, 2, 4, 1, 1, 2147483647, 2147483647),
(932, NULL, 1, 5, 2, 5, 1, 1, 2147483647, 2147483647),
(933, NULL, 1, 5, 2, 6, 1, 1, 2147483647, 2147483647),
(934, NULL, 1, 5, 2, 7, 1, 1, 2147483647, 2147483647),
(935, NULL, 1, 5, 2, 8, 1, 1, 2147483647, 2147483647),
(936, NULL, 1, 5, 2, 9, 1, 1, 2147483647, 2147483647),
(937, NULL, 1, 6, 3, 1, 1, 1, 2147483647, 2147483647),
(938, NULL, 1, 6, 3, 2, 1, 1, 2147483647, 2147483647),
(939, NULL, 1, 6, 3, 3, 1, 1, 2147483647, 2147483647),
(940, NULL, 1, 6, 3, 4, 1, 1, 2147483647, 2147483647),
(941, NULL, 1, 6, 3, 5, 1, 1, 2147483647, 2147483647),
(942, NULL, 1, 6, 3, 6, 1, 1, 2147483647, 2147483647);
INSERT INTO `product_attribute` (`pa_id`, `whom_fk`, `brand_fk`, `phone_fk`, `price_fk`, `category_fk`, `product_fk`, `status`, `created_on`, `updated_on`) VALUES
(943, NULL, 1, 6, 3, 7, 1, 1, 2147483647, 2147483647),
(944, NULL, 1, 6, 3, 8, 1, 1, 2147483647, 2147483647),
(945, NULL, 1, 6, 3, 9, 1, 1, 2147483647, 2147483647),
(946, NULL, 1, 7, 1, 1, 1, 1, 2147483647, 2147483647),
(947, NULL, 1, 7, 1, 2, 1, 1, 2147483647, 2147483647),
(948, NULL, 1, 7, 1, 3, 1, 1, 2147483647, 2147483647),
(949, NULL, 1, 7, 1, 4, 1, 1, 2147483647, 2147483647),
(950, NULL, 1, 7, 1, 5, 1, 1, 2147483647, 2147483647),
(951, NULL, 1, 7, 1, 6, 1, 1, 2147483647, 2147483647),
(952, NULL, 1, 7, 1, 7, 1, 1, 2147483647, 2147483647),
(953, NULL, 1, 7, 1, 8, 1, 1, 2147483647, 2147483647),
(954, NULL, 1, 7, 1, 9, 1, 1, 2147483647, 2147483647),
(955, NULL, 1, 8, 2, 1, 1, 1, 2147483647, 2147483647),
(956, NULL, 1, 8, 2, 2, 1, 1, 2147483647, 2147483647),
(957, NULL, 1, 8, 2, 3, 1, 1, 2147483647, 2147483647),
(958, NULL, 1, 8, 2, 4, 1, 1, 2147483647, 2147483647),
(959, NULL, 1, 8, 2, 5, 1, 1, 2147483647, 2147483647),
(960, NULL, 1, 8, 2, 6, 1, 1, 2147483647, 2147483647),
(961, NULL, 1, 8, 2, 7, 1, 1, 2147483647, 2147483647),
(962, NULL, 1, 8, 2, 8, 1, 1, 2147483647, 2147483647),
(963, NULL, 1, 8, 2, 9, 1, 1, 2147483647, 2147483647),
(964, NULL, 1, 9, 3, 1, 1, 1, 2147483647, 2147483647),
(965, NULL, 1, 9, 3, 2, 1, 1, 2147483647, 2147483647),
(966, NULL, 1, 9, 3, 3, 1, 1, 2147483647, 2147483647),
(967, NULL, 1, 9, 3, 4, 1, 1, 2147483647, 2147483647),
(968, NULL, 1, 9, 3, 5, 1, 1, 2147483647, 2147483647),
(969, NULL, 1, 9, 3, 6, 1, 1, 2147483647, 2147483647),
(970, NULL, 1, 9, 3, 7, 1, 1, 2147483647, 2147483647),
(971, NULL, 1, 9, 3, 8, 1, 1, 2147483647, 2147483647),
(972, NULL, 1, 9, 3, 9, 1, 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `project_detail` varchar(100) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `client_id`, `project_detail`, `created_on`, `updated_on`) VALUES
(1, 1, 'Selling phone case for my testing', 2147483647, 2147483647),
(2, 2, 'Selling phone case Nickscomputer', 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `text`
--

CREATE TABLE `text` (
  `text_id` int(11) NOT NULL,
  `category` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `text_type` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `text` varchar(250) COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(3) DEFAULT NULL,
  `added_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `text`
--

INSERT INTO `text` (`text_id`, `category`, `text_type`, `text`, `status`, `added_on`, `updated_on`) VALUES
(1, 'brand', 'quick_replies', 'Lets get started.What Brand do you have ?', 1, 2147483647, 2147483647),
(2, 'phone', 'quick_replies', 'Oopps!iphone seems like you got lots of money in you pocket😜 ? #iphone\\ nLet \'s make our phone  look more cool with me.', 1, 2147483647, 2147483647),
(3, 'phone', 'quick_replies', 'Wow!Oppo seems like you want better feature at low price😜 ? #iphone\\ nLet \'s make our phone  look more cool with me😘', 1, 2147483647, 2147483647),
(4, 'phone', 'quick_replies', 'lenovo', 1, 2147483647, 2147483647),
(5, 'phone', 'quick_replies', 'moto', 1, 2147483647, 2147483647),
(6, 'phone', 'quick_replies', 'Impressed!Oneplus seems like you like the better feature😜 ? #iphone\\ nLet \'s make our phone  look more cool with me😘', 1, 2147483647, 2147483647),
(7, 'phone', 'quick_replies', 'oppo', 1, 2147483647, 2147483647),
(8, 'phone', 'quick_replies', 'samsung', 1, 2147483647, 2147483647),
(9, 'phone', 'quick_replies', 'vivo', 1, 2147483647, 2147483647),
(10, 'phone', 'quick_replies', 'xiomi', 1, 2147483647, 2147483647),
(11, 'price', 'quick_replies', 'Awesome!\\nJust let me know how much bucks you got in your pockek?💸\\n I wil sugget you something cool within that range sounds good!', 1, 2147483647, 2147483647),
(12, 'cateory', 'quick_replies', 'Wow👻you traveld long way to reach here - Thanks💖\\n It\'s time for me to make this walk worthy!\\nChoose category I will show you something great🎁', 1, 2147483647, 2147483647),
(13, 'more', 'quick_replies', 'Iam happy that i found these product for you😙\\n If you confuse or not happy with above product Don \'t worry I have surprise in \"More\" Opion🎁\r\n We have surprise for you ⛄ Choose what you want to explore?', 1, 2147483647, 2147483647),
(14, 'help', 'quick_replies', 'help', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `topproduct_price`
--

CREATE TABLE `topproduct_price` (
  `tpr_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topproduct_price`
--

INSERT INTO `topproduct_price` (`tpr_id`, `text_id`, `content_type`, `title`, `payload`, `status`, `created_on`, `updated_on`) VALUES
(1, 11, 'text', '199', 'morePrice-1', 1, 2147483647, 2147483647),
(2, 11, 'text', '299-350', 'morePrice-2', 1, 2147483647, 2147483647),
(3, 11, 'text', '399-500', 'morePrice-3', 1, 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `ad_id` int(11) NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `zip` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`ad_id`, `address`, `state`, `city`, `zip`) VALUES
(1, '30-feet road, Indira nagar manadala mankhurd', 'Maharashtra', 'Mumbai', 400123),
(2, '30-feet road, Indira nagar, manadala mankhurd ', 'Maharashtra', 'Mumbai', 400043),
(3, '30-feet road, Indira nagar manadala mankhurd', 'Maharashtra', 'Mumbai', 400043),
(4, 'Hshsh', 'Assam', 'Jsjejw', 727211),
(5, 'Hshs', 'Assam', 'Jshs', 363637),
(6, 'Bv', 'Assam', 'Mumbai', 490043),
(7, '30-feet road, indira nagar, mandala mankhurd mumbai 400043.', 'Maharashtra', 'Mumba', 400043),
(8, '30-feet road, indira nagar, mandala mankhurd mumbai 400043.', 'Maharashtra', 'Mumba', 400043),
(9, 'cool', 'Assam', 'Mumbai', 123456),
(10, 'lsakd', 'Assam', 'sllskdf', 123456),
(11, 'alkds', 'Assam', 'ghjk', 123456),
(12, 'cool', 'Assam', 'Mubai', 123456),
(13, 'cool', 'Assam', 'Mumbai', 123456),
(14, 'Bbzbs', 'Assam', 'Mumbai', 123456),
(15, 'asdkl', 'Assam', 'asdlkfj', 123456),
(16, '30-road, indira nagar, mandala mankhud', 'Maharashtra', 'Mumbai', 123452);

-- --------------------------------------------------------

--
-- Table structure for table `user_order`
--

CREATE TABLE `user_order` (
  `order_id` int(11) NOT NULL,
  `fk_user_id` varchar(20) DEFAULT NULL,
  `fk_product_id` int(11) DEFAULT NULL,
  `fk_add_id` int(11) DEFAULT NULL,
  `payment_request_id` varchar(150) DEFAULT NULL,
  `payment_created_at` int(11) DEFAULT NULL,
  `payment_modified_at` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact` int(15) DEFAULT NULL,
  `brand` varchar(60) DEFAULT NULL,
  `phone` varchar(60) DEFAULT NULL,
  `category` varchar(60) DEFAULT NULL,
  `price` int(60) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `shipping_cost` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `payment_status` int(3) DEFAULT NULL,
  `delivery_status` int(3) DEFAULT NULL,
  `createdat` int(11) DEFAULT NULL,
  `updatedat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_order`
--

INSERT INTO `user_order` (`order_id`, `fk_user_id`, `fk_product_id`, `fk_add_id`, `payment_request_id`, `payment_created_at`, `payment_modified_at`, `name`, `email`, `contact`, `brand`, `phone`, `category`, `price`, `discount`, `shipping_cost`, `total`, `image`, `description`, `payment_status`, `delivery_status`, `createdat`, `updatedat`) VALUES
(1, '1879276758759273', 1, 1, '983c9f2c2a0a4d9eb6e7aeff1899dc56', 1534427689, 1534427689, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'https://ibb.co/mQgw5p', 'Please make sure product will reach ASA', 1, 0, 1534427688, 1534427688),
(2, '1879276758759273', 1, 2, '8fa88b3310ad45b2ad5c99d24770a28c', 1534433183, 1534433183, 'Nikhil Landge', 'jhanitesh10@gmail.com', 2147483647, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'Please make sure product quality and finishing must be proper.', 1, 0, 1534433182, 1534433182),
(3, '1879276758759273', 1, 3, 'c9b37475366d455b88f834881163742a', 1534433458, 1534433458, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', '', 0, 0, 1534433457, 1534433457),
(4, '1879276758759273', 1, 4, '965a8976c84e49da818b4dc5e897b9e9', 1534433575, 1534433575, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234557880, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', '', 1, 0, 1534433574, 1534433574),
(5, '1879276758759273', 1, 5, '5b82fcffec3a470c917a03d9011201b7', 1534434141, 1534434141, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', '', 0, 0, 1534434140, 1534434140),
(6, '1879276758759273', 1, 6, '14a1d4f5ec1a409a9ab57075d97f72e8', 1534434445, 1534434445, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'Hah', 1, 0, 1534434444, 1534434444),
(7, '1879276758759273', 1, 7, 'f4c4f2d3bd0d4471b0097bf19cbc9b95', 1534505367, 1534505367, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', '', 0, 0, 1534505366, 1534505366),
(8, '1879276758759273', 1, 8, 'c1c9b10a1e7340e79f2d8bb1551e1a24', 1534505369, 1534505369, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', '', 0, 0, 1534505369, 1534505369),
(9, '1879276758759273', 1, 9, '73d5257d1c6d4551abea889805daa22a', 1534505446, 1534505446, 'Nikhil Landge', 'Nikhillandge50@yahoo.in', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'cool', 0, 0, 1534505444, 1534505444),
(10, '1879276758759273', 1, 10, '2dc1c5b5a49f44e494c4be81e93547bc', 1534505508, 1534505508, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 2147483647, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'alsdkj', 0, 0, 1534505505, 1534505505),
(11, '1879276758759273', 0, 11, '32d5c542b53d47eb9e595ffcdd860956', 1534505745, 1534505745, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'category', 400, 10, 50, 410, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39261811_1364122293722351_3735466188432474112_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=2e9ee8cef52eac3fa7a60c37487a3fb6&oe=5BF1EA4D', 'alksd', 0, 0, 1534505744, 1534505744),
(12, '1879276758759273', 1, 12, '51ec3980ce954d61a77b6a88b87688d4', 1534506215, 1534506215, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'cool', 1, 0, 1534506212, 1534506212),
(13, '1879276758759273', 0, 13, '0ae80bbea16c44daab6387bf01d4661a', 1534506578, 1534506578, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'category', 400, 10, 50, 410, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39261811_1364122293722351_3735466188432474112_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=2e9ee8cef52eac3fa7a60c37487a3fb6&oe=5BF1EA4D', 'cool', 0, 0, 1534506576, 1534506576),
(14, '1879276758759273', 0, 14, '3667a9b977c64069b6c3f44fe070e5fa', 1534506591, 1534506591, 'Nikhil Landge', 'jhanitesh10@gmail.com', 1234567895, 'Apple', 'Iphone-4s', 'category', 400, 10, 50, 410, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39261811_1364122293722351_3735466188432474112_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=2e9ee8cef52eac3fa7a60c37487a3fb6&oe=5BF1EA4D', 'Vzvsb', 0, 0, 1534506591, 1534506591),
(15, '1879276758759273', 0, 15, 'd21f06c6e2c943a0a7820c32d93110e9', 1534506690, 1534506690, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'category', 400, 10, 50, 410, 'https://scontent.xx.fbcdn.net/v/t1.15752-9/39261811_1364122293722351_3735466188432474112_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=2e9ee8cef52eac3fa7a60c37487a3fb6&oe=5BF1EA4D', 'alsdkj', 0, 0, 1534506689, 1534506689),
(16, '1879276758759273', 1, 16, '1ecf1fe3b4f44384abf922a2c5d22c31', 1534587368, 1534587368, 'Nikhil Landge', 'jhanitesh1000@gmail.com', 1234567890, 'Apple', 'Iphone-4s', 'Tv series-addict', 399, 20, 50, 369, 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 'i want my pp', 1, 0, 1534587367, 1534587367);

-- --------------------------------------------------------

--
-- Table structure for table `whom`
--

CREATE TABLE `whom` (
  `w_id` int(11) NOT NULL,
  `text_id` int(11) DEFAULT NULL,
  `content_type` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `payload` varchar(100) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `created_on` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attached_product_detail`
--
ALTER TABLE `attached_product_detail`
  ADD PRIMARY KEY (`apd_id`);

--
-- Indexes for table `attach_product_price`
--
ALTER TABLE `attach_product_price`
  ADD PRIMARY KEY (`ap_id`),
  ADD KEY `brand_fk` (`brand_fk`),
  ADD KEY `phone_fk` (`phone_fk`),
  ADD KEY `price_fk` (`price_fk`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`br_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ct_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `complete_payment`
--
ALTER TABLE `complete_payment`
  ADD PRIMARY KEY (`pmt_id`),
  ADD UNIQUE KEY `payment_id` (`payment_id`),
  ADD UNIQUE KEY `payment_request_id` (`payment_request_id`);

--
-- Indexes for table `facebook_user`
--
ALTER TABLE `facebook_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `facebookid` (`facebookid`);

--
-- Indexes for table `help`
--
ALTER TABLE `help`
  ADD PRIMARY KEY (`h_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `more`
--
ALTER TABLE `more`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`pn_id`),
  ADD KEY `text_id` (`text_id`),
  ADD KEY `br_id` (`br_id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`pr_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pr_id`),
  ADD UNIQUE KEY `product_id` (`product_id`);

--
-- Indexes for table `product_attribute`
--
ALTER TABLE `product_attribute`
  ADD PRIMARY KEY (`pa_id`),
  ADD KEY `whom_fk` (`whom_fk`),
  ADD KEY `brand_fk` (`brand_fk`),
  ADD KEY `phone_fk` (`phone_fk`),
  ADD KEY `price_fk` (`price_fk`),
  ADD KEY `category_fk` (`category_fk`),
  ADD KEY `product_fk` (`product_fk`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `text`
--
ALTER TABLE `text`
  ADD PRIMARY KEY (`text_id`);

--
-- Indexes for table `topproduct_price`
--
ALTER TABLE `topproduct_price`
  ADD PRIMARY KEY (`tpr_id`),
  ADD KEY `text_id` (`text_id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`ad_id`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `whom`
--
ALTER TABLE `whom`
  ADD PRIMARY KEY (`w_id`),
  ADD KEY `text_id` (`text_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attached_product_detail`
--
ALTER TABLE `attached_product_detail`
  MODIFY `apd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `attach_product_price`
--
ALTER TABLE `attach_product_price`
  MODIFY `ap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brand`
--
ALTER TABLE `brand`
  MODIFY `br_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `ct_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `complete_payment`
--
ALTER TABLE `complete_payment`
  MODIFY `pmt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `facebook_user`
--
ALTER TABLE `facebook_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `help`
--
ALTER TABLE `help`
  MODIFY `h_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `more`
--
ALTER TABLE `more`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `pn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `pr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_attribute`
--
ALTER TABLE `product_attribute`
  MODIFY `pa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=973;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `text`
--
ALTER TABLE `text`
  MODIFY `text_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `topproduct_price`
--
ALTER TABLE `topproduct_price`
  MODIFY `tpr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `ad_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user_order`
--
ALTER TABLE `user_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `whom`
--
ALTER TABLE `whom`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attach_product_price`
--
ALTER TABLE `attach_product_price`
  ADD CONSTRAINT `attach_product_price_ibfk_1` FOREIGN KEY (`brand_fk`) REFERENCES `brand` (`br_id`),
  ADD CONSTRAINT `attach_product_price_ibfk_2` FOREIGN KEY (`phone_fk`) REFERENCES `phone` (`pn_id`),
  ADD CONSTRAINT `attach_product_price_ibfk_3` FOREIGN KEY (`price_fk`) REFERENCES `price` (`pr_id`);

--
-- Constraints for table `brand`
--
ALTER TABLE `brand`
  ADD CONSTRAINT `brand_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `help`
--
ALTER TABLE `help`
  ADD CONSTRAINT `help_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `more`
--
ALTER TABLE `more`
  ADD CONSTRAINT `more_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `phone`
--
ALTER TABLE `phone`
  ADD CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`),
  ADD CONSTRAINT `phone_ibfk_2` FOREIGN KEY (`br_id`) REFERENCES `brand` (`br_id`);

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `product_attribute`
--
ALTER TABLE `product_attribute`
  ADD CONSTRAINT `product_attribute_ibfk_1` FOREIGN KEY (`whom_fk`) REFERENCES `whom` (`w_id`),
  ADD CONSTRAINT `product_attribute_ibfk_2` FOREIGN KEY (`brand_fk`) REFERENCES `brand` (`br_id`),
  ADD CONSTRAINT `product_attribute_ibfk_3` FOREIGN KEY (`phone_fk`) REFERENCES `phone` (`pn_id`),
  ADD CONSTRAINT `product_attribute_ibfk_4` FOREIGN KEY (`price_fk`) REFERENCES `price` (`pr_id`),
  ADD CONSTRAINT `product_attribute_ibfk_5` FOREIGN KEY (`category_fk`) REFERENCES `category` (`ct_id`),
  ADD CONSTRAINT `product_attribute_ibfk_6` FOREIGN KEY (`product_fk`) REFERENCES `product` (`pr_id`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

--
-- Constraints for table `topproduct_price`
--
ALTER TABLE `topproduct_price`
  ADD CONSTRAINT `topproduct_price_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);

--
-- Constraints for table `whom`
--
ALTER TABLE `whom`
  ADD CONSTRAINT `whom_ibfk_1` FOREIGN KEY (`text_id`) REFERENCES `text` (`text_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
