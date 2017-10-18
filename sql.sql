-- phpMyAdmin SQL Dump
-- version 
-- http://www.phpmyadmin.net
--
-- Хост: u479966.mysql.masterhost.ru
-- Время создания: Окт 18 2017 г., 17:35
-- Версия сервера: 5.6.28
-- Версия PHP: 5.4.45-0+deb7u11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- База данных: `u479966`
--

-- --------------------------------------------------------

--
-- Структура таблицы `finger_user_email`
--

CREATE TABLE IF NOT EXISTS `finger_user_email` (
  `finger` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `try` int(11) NOT NULL DEFAULT '0',
  `dt_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `u_finger` (`finger`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `subscribe_email`
--

CREATE TABLE IF NOT EXISTS `subscribe_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `lang` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `subscribe` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `unsubscribe` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `dt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `email` (`email`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;
