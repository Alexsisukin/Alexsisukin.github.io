--
-- Структура таблицы `calc_filiation`
--

CREATE TABLE `calc_filiation` (
  `id` int(11) NOT NULL,
  `calc_id` int(11) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `locality` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `house` varchar(255) DEFAULT NULL,
  `formatted_address` text NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
