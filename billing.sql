DROP TABLE IF EXISTS billing_calc;
--
-- Структура таблицы `billing_calc`
--

CREATE TABLE `billing_calc` (
  `id` int(11) NOT NULL,
  `calc_id` int(11) NOT NULL,
  `tariff_id` int(11) NOT NULL,
  `email_limit` int(11) NOT NULL,
  `email_limit_all` int(11) NOT NULL,
  `sms_limit` int(11) NOT NULL,
  `sms_limit_all` int(11) NOT NULL,
  `tariff_day` int(11) NOT NULL,
  `dt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dt_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `billing_calc`
--
ALTER TABLE `billing_calc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `billing_calc`
--
ALTER TABLE `billing_calc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

DROP TABLE IF EXISTS billing_user;
--
-- Структура таблицы `billing_user`
--

CREATE TABLE `billing_user` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tariff_id` int(11) NOT NULL,
  `email_limit` int(11) NOT NULL,
  `email_limit_all` int(11) NOT NULL,
  `sms_limit` int(11) NOT NULL,
  `sms_limit_all` int(11) NOT NULL,
  `tariff_day` int(11) NOT NULL,
  `dt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dt_update` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `billing_user`
--
ALTER TABLE `billing_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `billing_user`
--
ALTER TABLE `billing_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

DROP TABLE IF EXISTS tariff_discount;
--
-- Структура таблицы `tariff_discount`
--

CREATE TABLE `tariff_discount` (
  `discount_id` int(11) NOT NULL,
  `count_months` int(11) DEFAULT NULL,
  `sale_percent` int(11) DEFAULT NULL,
  `tariff_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tariff_discount`
--

INSERT INTO `tariff_discount` (`discount_id`, `count_months`, `sale_percent`, `tariff_id`) VALUES
(1, 1, 0, 2),
(2, 3, 5, 2),
(3, 6, 10, 2),
(4, 12, 20, 2),
(5, 24, 30, 2),
(6, 1, 0, 1),
(7, 3, 0, 1),
(8, 6, 0, 1),
(9, 12, 0, 1),
(10, 24, 0, 1),
(11, 60, 50, 2),
(12, 60, 0, 1),
(14, 1, 0, 5),
(15, 3, 0, 5),
(16, 6, 0, 5),
(17, 12, 0, 5),
(18, 24, 0, 5),
(19, 60, 0, 5),
(20, 1, 0, 6),
(21, 3, 0, 6),
(22, 6, 0, 6),
(23, 12, 0, 6),
(24, 24, 0, 6),
(25, 60, 0, 6),
(26, 1, 0, 7),
(27, 3, 0, 7),
(28, 6, 0, 7),
(29, 12, 0, 7),
(30, 24, 0, 7),
(31, 60, 0, 7),
(32, 1, 0, 8),
(33, 3, 0, 8),
(34, 6, 0, 8),
(35, 12, 0, 8),
(36, 24, 0, 8),
(37, 60, 0, 8);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tariff_discount`
--
ALTER TABLE `tariff_discount`
  ADD PRIMARY KEY (`discount_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tariff_discount`
--
ALTER TABLE `tariff_discount`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

DROP TABLE IF EXISTS tariff;
--
-- Структура таблицы `tariff`
--

CREATE TABLE `tariff` (
  `tariff_id` int(11) NOT NULL,
  `tariff_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tariff_desc` text CHARACTER SET utf8,
  `billing_type` tinyint(4) NOT NULL DEFAULT '1',
  `sms` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `calc_qty` int(11) NOT NULL,
  `price` float NOT NULL,
  `dt_update` timestamp NULL DEFAULT NULL,
  `dt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `tariff`
--

INSERT INTO `tariff` (`tariff_id`, `tariff_name`, `tariff_desc`, `billing_type`, `sms`, `email`, `calc_qty`, `price`, `dt_update`, `dt_create`) VALUES
(1, 'Бесплатный', NULL, 1, 0, 100, 999999999, 0, NULL, '2017-10-04 16:05:40'),
(2, 'Всё включено', NULL, 1, 0, 300, 999999999, 5, NULL, '2017-10-04 16:05:40'),
(3, 'Всё включено (Триал)', NULL, 1, 0, 100, 999999999, 0, NULL, '2017-10-04 16:06:48'),
(4, 'Бесплатный', NULL, 2, 0, 100, 3, 0, NULL, '2017-10-16 09:03:16'),
(5, 'Базовый', NULL, 2, 0, 300, 3, 3, NULL, '2017-10-04 16:06:48'),
(6, 'Стандарт', NULL, 2, 10, 1000, 10, 8, NULL, '2017-10-04 16:06:48'),
(7, 'Премиум', NULL, 2, 30, 3000, 30, 20, NULL, '2017-10-04 16:06:48'),
(8, 'ПРО', NULL, 2, 100, 10000, 999999999, 59, NULL, '2017-10-04 16:06:48');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tariff`
--
ALTER TABLE `tariff`
  ADD PRIMARY KEY (`tariff_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tariff`
--
ALTER TABLE `tariff`
  MODIFY `tariff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

DROP TABLE IF EXISTS tariff_permission;
--
-- Структура таблицы `tariff_permission`
--

CREATE TABLE `tariff_permission` (
  `tariff_id` int(11) NOT NULL,
  `permission` varchar(255) NOT NULL,
  `status_activ` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `tariff_permission`
--

INSERT INTO `tariff_permission` (`tariff_id`, `permission`, `status_activ`) VALUES
(1, 'statistic', 1),
(2, 'statistic', 1),
(3, 'statistic', 1),
(4, 'statistic', 1),
(5, 'statistic', 1),
(6, 'statistic', 1),
(1, 'statistic', 1),
(1, 'image', 1),
(1, 'clientSend', 1),
(1, 'pay', 1),
(1, 'openLink', 1),
(1, 'adminEmail', 1),
(1, 'sms', 1),
(1, 'copytight', 1),
(1, 'html_code', 1),
(2, 'statistic', 1),
(2, 'image', 1),
(2, 'clientSend', 1),
(2, 'pay', 1),
(2, 'openLink', 1),
(2, 'adminEmail', 1),
(2, 'sms', 1),
(2, 'copytight', 1),
(2, 'html_code', 1),
(3, 'statistic', 1),
(3, 'image', 1),
(3, 'clientSend', 1),
(3, 'pay', 1),
(3, 'openLink', 1),
(3, 'adminEmail', 1),
(3, 'sms', 1),
(3, 'copytight', 1),
(3, 'html_code', 1),
(4, 'statistic', 1),
(4, 'image', 1),
(4, 'clientSend', 1),
(4, 'pay', 1),
(4, 'openLink', 1),
(4, 'adminEmail', 1),
(4, 'sms', 1),
(4, 'copytight', 1),
(4, 'html_code', 1),
(5, 'statistic', 1),
(5, 'image', 1),
(5, 'clientSend', 1),
(5, 'pay', 1),
(5, 'openLink', 1),
(5, 'adminEmail', 1),
(5, 'sms', 1),
(5, 'copytight', 1),
(5, 'html_code', 1),
(6, 'statistic', 1),
(6, 'image', 1),
(6, 'clientSend', 1),
(6, 'pay', 1),
(6, 'openLink', 1),
(6, 'adminEmail', 1),
(6, 'sms', 1),
(6, 'copytight', 1),
(6, 'html_code', 1),
(7, 'statistic', 1),
(7, 'image', 1),
(7, 'clientSend', 1),
(7, 'pay', 1),
(7, 'openLink', 1),
(7, 'adminEmail', 1),
(7, 'sms', 1),
(7, 'copytight', 1),
(7, 'html_code', 1),
(8, 'statistic', 1),
(8, 'image', 1),
(8, 'clientSend', 1),
(8, 'pay', 1),
(8, 'openLink', 1),
(8, 'adminEmail', 1),
(8, 'sms', 1),
(8, 'copytight', 1),
(8, 'html_code', 1);


DROP TABLE IF EXISTS frost_calc_limit;
--
-- Структура таблицы `frost_calc_limit`
--

CREATE TABLE `frost_calc_limit` (
  `id` int(11) NOT NULL,
  `calc_id` int(11) NOT NULL,
  `type_limit` varchar(100) CHARACTER SET utf8 NOT NULL,
  `count_limit` int(11) NOT NULL,
  `all_limit` int(11) NOT NULL,
  `dt_frost` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `frost_calc_limit`
--
ALTER TABLE `frost_calc_limit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `frost_calc_limit`
--
ALTER TABLE `frost_calc_limit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
  
DROP TABLE IF EXISTS frost_user_limit;  
--
-- Структура таблицы `frost_user_limit`
--

CREATE TABLE `frost_user_limit` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_limit` varchar(100) CHARACTER SET utf8 NOT NULL,
  `count_limit` int(11) NOT NULL,
  `all_limit` int(11) NOT NULL,
  `dt_frost` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `frost_user_limit`
--
ALTER TABLE `frost_user_limit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `frost_user_limit`
--
ALTER TABLE `frost_user_limit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

DROP TABLE IF EXISTS user_orders; 
--
-- Структура таблицы `user_orders`
--

CREATE TABLE `user_orders` (
  `order_id` int(11) NOT NULL,
  `virtual_id` int(11) NOT NULL DEFAULT '0',
  `calc_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `tariff_id` int(11) DEFAULT NULL,
  `months` int(11) DEFAULT NULL,
  `packege_id` int(11) DEFAULT NULL,
  `notifi_qty` int(11) DEFAULT NULL,
  `billing_type` int(11) NOT NULL DEFAULT '1',
  `order_type` varchar(100) NOT NULL DEFAULT 'tariff',
  `pay_sum` float NOT NULL,
  `promo` varchar(255) DEFAULT NULL,
  `date_start` timestamp NULL DEFAULT NULL,
  `date_end` timestamp NULL DEFAULT NULL,
  `dt_create` timestamp NULL DEFAULT NULL,
  `dt_pay` timestamp NULL DEFAULT NULL,
  `status` int(1) DEFAULT '0',
  `ga_session` varchar(183) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user_orders`
--
ALTER TABLE `user_orders`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user_orders`
--
ALTER TABLE `user_orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;
  
