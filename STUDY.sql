-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- 생성 시간: 17-11-27 00:22
-- 서버 버전: 5.6.35
-- PHP 버전: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `STUDY`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `USER`
--

CREATE TABLE `USER` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` char(30) DEFAULT NULL,
  `user_name` char(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 테이블의 덤프 데이터 `USER`
--

INSERT INTO `USER` (`id`, `user_id`, `user_name`) VALUES
(1, 'xodnr631', '김태욱'),
(2, 'test_user', '테스트');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`id`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `USER`
--
ALTER TABLE `USER`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
