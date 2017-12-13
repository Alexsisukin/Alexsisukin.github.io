--
-- Структура таблицы `calc_blocked`
--

CREATE TABLE `calc_blocked` (
  `id` int(11) NOT NULL,
  `calc_id` int(11) NOT NULL,
  `count_block` int(11) NOT NULL DEFAULT '0',
  `blocked_status` int(11) NOT NULL DEFAULT '0',
  `dt_block` timestamp NULL DEFAULT NULL,
  `dt_unblock` timestamp NULL DEFAULT NULL,
  `dt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `calc_blocked`
--
ALTER TABLE `calc_blocked`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `calc_blocked`
--
ALTER TABLE `calc_blocked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
