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
(4, 'Бесплатный', '3 проекта<br>без доступа к расширенным функциям', 2, 0, 100, 3, 0, NULL, '2017-10-16 09:03:16'),
(5, 'Базовый', '3 проекта<br>+ расширенные функции', 2, 0, 300, 3, 3, NULL, '2017-10-04 16:06:48'),
(6, 'Стандарт', '10 проектов<br>+ расширенные функции', 2, 10, 1000, 10, 8, NULL, '2017-10-04 16:06:48'),
(7, 'Премиум', '30 проектов<br>+ расширенные функции', 2, 30, 3000, 30, 20, NULL, '2017-10-04 16:06:48'),
(8, 'ПРО', 'Неограниченное количество проектов<br>+ расширенные функции', 2, 100, 10000, 999999999, 59, NULL, '2017-10-04 16:06:48');

-- --------------------------------------------------------
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
(21, 3, 10, 6),
(22, 6, 20, 6),
(23, 12, 30, 6),
(24, 24, 40, 6),
(25, 60, 50, 6),
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

-- --------------------------------------------------------
DROP TABLE IF EXISTS tariff_permission;
--
-- Структура таблицы `tariff_permission`
--

CREATE TABLE `tariff_permission` (
  `id` int(11) NOT NULL,
  `tariff_id` int(11) NOT NULL,
  `permission` varchar(255) NOT NULL,
  `description` text,
  `status_activ` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `tariff_permission`
--

INSERT INTO `tariff_permission` (`id`, `tariff_id`, `permission`, `description`, `status_activ`) VALUES
(1, 1, 'statistic', 'Статистика и цели', 0),
(2, 1, 'sendAdminEmail', 'Отправка email владельцу', 1),
(3, 1, 'sendAdminSms', 'Отправка sms владельцу', 0),
(4, 1, 'sendClientEmail', 'Отправка email клиенту', 0),
(5, 1, 'sendClientSms', 'Отправка sms клиенту', 0),
(6, 1, 'image', 'Использование картинок', 0),
(7, 1, 'pay', 'Прием оплаты', 0),
(8, 1, 'openLink', 'Использование ссылок', 0),
(9, 1, 'copyright', 'Отсутствие рекламы', 1),
(10, 1, 'html_code', 'Свой код', 0),
(11, 1, 'clone', 'Клонирование проектов', 0),
(12, 1, 'pay_pack', 'возможно докупить', 0),
(13, 1, 'support', 'Лайвчат саппорт', 0),
(14, 2, 'statistic', 'Статистика и цели', 1),
(15, 2, 'sendAdminEmail', 'Отправка email владельцу', 1),
(16, 2, 'sendAdminSms', 'Отправка sms владельцу', 1),
(17, 2, 'sendClientEmail', 'Отправка email клиенту', 1),
(18, 2, 'sendClientSms', 'Отправка sms клиенту', 1),
(19, 2, 'image', 'Использование картинок', 1),
(20, 2, 'pay', 'Прием оплаты', 1),
(21, 2, 'openLink', 'Использование ссылок', 1),
(22, 2, 'copyright', 'Отсутствие рекламы', 0),
(23, 2, 'html_code', 'Свой код', 1),
(24, 2, 'clone', 'Клонирование проектов', 1),
(25, 2, 'pay_pack', 'возможно докупить', 1),
(26, 2, 'support', 'Лайвчат саппорт', 1),
(27, 3, 'statistic', 'Статистика и цели', 1),
(28, 3, 'sendAdminEmail', 'Отправка email владельцу', 1),
(29, 3, 'sendAdminSms', 'Отправка sms владельцу', 1),
(30, 3, 'sendClientEmail', 'Отправка email клиенту', 1),
(31, 3, 'sendClientSms', 'Отправка sms клиенту', 1),
(32, 3, 'image', 'Использование картинок', 1),
(33, 3, 'pay', 'Прием оплаты', 1),
(34, 3, 'openLink', 'Использование ссылок', 1),
(35, 3, 'copyright', 'Отсутствие рекламы', 0),
(36, 3, 'html_code', 'Свой код', 0),
(37, 3, 'clone', 'Клонирование проектов', 1),
(38, 3, 'pay_pack', 'возможно докупить', 1),
(39, 3, 'support', 'Лайвчат саппорт', 1),
(40, 4, 'statistic', 'Статистика и цели', 0),
(41, 4, 'sendAdminEmail', 'Отправка email владельцу', 0),
(42, 4, 'sendAdminSms', 'Отправка sms владельцу', 0),
(43, 4, 'sendClientEmail', 'Отправка email клиенту', 0),
(44, 4, 'sendClientSms', 'Отправка sms клиенту', 0),
(45, 4, 'image', 'Использование картинок', 0),
(46, 4, 'pay', 'Прием оплаты', 0),
(47, 4, 'openLink', 'Использование ссылок', 0),
(48, 4, 'copyright', 'Отсутствие рекламы', 1),
(49, 4, 'html_code', 'Свой код', 0),
(50, 4, 'clone', 'Клонирование проектов', 0),
(51, 4, 'pay_pack', 'возможно докупить', 0),
(52, 4, 'support', 'Лайвчат саппорт', 0),
(53, 5, 'statistic', 'Статистика и цели', 1),
(54, 5, 'sendAdminEmail', 'Отправка email владельцу', 1),
(55, 5, 'sendAdminSms', 'Отправка sms владельцу', 1),
(56, 5, 'sendClientEmail', 'Отправка email клиенту', 1),
(57, 5, 'sendClientSms', 'Отправка sms клиенту', 1),
(58, 5, 'image', 'Использование картинок', 1),
(59, 5, 'pay', 'Прием оплаты', 1),
(60, 5, 'openLink', 'Использование ссылок', 1),
(61, 5, 'copyright', 'Отсутствие рекламы', 0),
(62, 5, 'html_code', 'Свой код', 1),
(63, 5, 'clone', 'Клонирование проектов', 1),
(64, 5, 'pay_pack', 'возможно докупить', 1),
(65, 5, 'support', 'Лайвчат саппорт', 0),
(66, 6, 'statistic', 'Статистика и цели', 1),
(67, 6, 'sendAdminEmail', 'Отправка email владельцу', 1),
(68, 6, 'sendAdminSms', 'Отправка sms владельцу', 1),
(69, 6, 'sendClientEmail', 'Отправка email клиенту', 1),
(70, 6, 'sendClientSms', 'Отправка sms клиенту', 1),
(71, 6, 'image', 'Использование картинок', 1),
(72, 6, 'pay', 'Прием оплаты', 1),
(73, 6, 'openLink', 'Использование ссылок', 1),
(74, 6, 'copyright', 'Отсутствие рекламы', 0),
(75, 6, 'html_code', 'Свой код', 1),
(76, 6, 'clone', 'Клонирование проектов', 1),
(77, 6, 'pay_pack', 'возможно докупить', 1),
(78, 6, 'support', 'Лайвчат саппорт', 1),
(79, 7, 'statistic', 'Статистика и цели', 1),
(80, 7, 'sendAdminEmail', 'Отправка email владельцу', 1),
(81, 7, 'sendAdminSms', 'Отправка sms владельцу', 1),
(82, 7, 'sendClientEmail', 'Отправка email клиенту', 1),
(83, 7, 'sendClientSms', 'Отправка sms клиенту', 1),
(84, 7, 'image', 'Использование картинок', 1),
(85, 7, 'pay', 'Прием оплаты', 1),
(86, 7, 'openLink', 'Использование ссылок', 1),
(87, 7, 'copyright', 'Отсутствие рекламы', 0),
(88, 7, 'html_code', 'Свой код', 1),
(89, 7, 'clone', 'Клонирование проектов', 1),
(90, 7, 'pay_pack', 'возможно докупить', 1),
(91, 7, 'support', 'Лайвчат саппорт', 1),
(92, 8, 'statistic', 'Статистика и цели', 1),
(93, 8, 'sendAdminEmail', 'Отправка email владельцу', 1),
(94, 8, 'sendAdminSms', 'Отправка sms владельцу', 1),
(95, 8, 'sendClientEmail', 'Отправка email клиенту', 1),
(96, 8, 'sendClientSms', 'Отправка sms клиенту', 1),
(97, 8, 'image', 'Использование картинок', 1),
(98, 8, 'pay', 'Прием оплаты', 1),
(99, 8, 'openLink', 'Использование ссылок', 1),
(100, 8, 'copyright', 'Отсутствие рекламы', 0),
(101, 8, 'html_code', 'Свой код', 1),
(102, 8, 'clone', 'Клонирование проектов', 1),
(103, 8, 'pay_pack', 'возможно докупить', 1),
(104, 8, 'support', 'Лайвчат саппорт', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tariff`
--
ALTER TABLE `tariff`
  ADD PRIMARY KEY (`tariff_id`);

--
-- Индексы таблицы `tariff_discount`
--
ALTER TABLE `tariff_discount`
  ADD PRIMARY KEY (`discount_id`);

--
-- Индексы таблицы `tariff_permission`
--
ALTER TABLE `tariff_permission`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tariff`
--
ALTER TABLE `tariff`
  MODIFY `tariff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT для таблицы `tariff_discount`
--
ALTER TABLE `tariff_discount`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT для таблицы `tariff_permission`
--
ALTER TABLE `tariff_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
