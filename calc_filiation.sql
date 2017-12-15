DROP TABLE IF EXISTS calc_filiation;
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
  `lat` double NOT NULL,
  `lng` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `calc_filiation`
--
ALTER TABLE `calc_filiation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `calc_filiation`
--
ALTER TABLE `calc_filiation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
