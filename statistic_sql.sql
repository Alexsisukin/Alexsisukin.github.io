CREATE TABLE IF NOT EXISTS `day_statistic_user` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `user_en` INT(11) NULL, `user_ru` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `pay_all` INT(11) NULL, `pay_ru` INT(11) NULL, `pay_en` INT(11) NULL, `pay_billing1` INT(11) NULL, `pay_billing2` INT(11) NULL, `pay_billing1_ru` INT(11) NULL, `pay_billing1_en` INT(11) NULL, `pay_billing2_ru` INT(11) NULL, `pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_new_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `new_pay_all` INT(11) NULL, `new_pay_ru` INT(11) NULL, `new_pay_en` INT(11) NULL, `new_pay_billing1` INT(11) NULL, `new_pay_billing2` INT(11) NULL, `new_pay_billing1_ru` INT(11) NULL, `new_pay_billing1_en` INT(11) NULL, `new_pay_billing2_ru` INT(11) NULL, `new_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_fail_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `fail_pay_all` INT(11) NULL, `fail_pay_ru` INT(11) NULL, `fail_pay_en` INT(11) NULL, `fail_pay_billing2` INT(11) NULL, `fail_pay_billing1` INT(11) NULL, `fail_pay_billing1_ru` INT(11) NULL, `fail_pay_billing1_en` INT(11) NULL, `fail_pay_billing2_ru` INT(11) NULL, `fail_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_repeat_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `repeat_pay_all` INT(11) NULL, `repeat_pay_ru` INT(11) NULL, `repeat_pay_en` INT(11) NULL, `repeat_pay_billing2` INT(11) NULL, `repeat_pay_billing1` INT(11) NULL, `repeat_pay_billing1_ru` INT(11) NULL, `repeat_pay_billing1_en` INT(11) NULL, `repeat_pay_billing2_ru` INT(11) NULL, `repeat_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_order_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `order_pay_all` INT(11) NULL, `order_pay_ru` INT(11) NULL, `order_pay_en` INT(11) NULL, `order_pay_billing2` INT(11) NULL, `order_pay_billing1` INT(11) NULL, `order_pay_billing1_ru` INT(11) NULL, `order_pay_billing1_en` INT(11) NULL, `order_pay_billing2_ru` INT(11) NULL, `order_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_sum_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `sum_pay_all` float NOT NULL, `sum_pay_ru` float NOT NULL, `sum_pay_en` float NOT NULL, `sum_pay_billing2` float NOT NULL, `sum_pay_billing1` float NOT NULL, `sum_pay_billing1_ru` float NOT NULL, `sum_pay_billing1_en` float NOT NULL, `sum_pay_billing2_ru` float NOT NULL, `sum_pay_billing2_en` float NOT NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_paypal_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `paypal_pay_all` INT(11) NULL, `paypal_pay_ru` INT(11) NULL, `paypal_pay_en` INT(11) NULL, `paypal_pay_billing2` INT(11) NULL, `paypal_pay_billing1` INT(11) NULL, `paypal_pay_billing1_ru` INT(11) NULL, `paypal_pay_billing1_en` INT(11) NULL, `paypal_pay_billing2_ru` INT(11) NULL, `paypal_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_paypal_order` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `paypal_order_all` INT(11) NULL, `paypal_order_ru` INT(11) NULL, `paypal_order_en` INT(11) NULL, `paypal_order_billing2` INT(11) NULL, `paypal_order_billing1` INT(11) NULL, `paypal_order_billing1_ru` INT(11) NULL, `paypal_order_billing1_en` INT(11) NULL, `paypal_order_billing2_ru` INT(11) NULL, `paypal_order_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_robokassa_pay` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `robokassa_pay_all` INT(11) NULL, `robokassa_pay_ru` INT(11) NULL, `robokassa_pay_en` INT(11) NULL, `robokassa_pay_billing2` INT(11) NULL, `robokassa_pay_billing1` INT(11) NULL, `robokassa_pay_billing1_ru` INT(11) NULL, `robokassa_pay_billing1_en` INT(11) NULL, `robokassa_pay_billing2_ru` INT(11) NULL, `robokassa_pay_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_robokassa_order` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `robokassa_order_all` INT(11) NULL, `robokassa_order_ru` INT(11) NULL, `robokassa_order_en` INT(11) NULL, `robokassa_order_billing2` INT(11) NULL, `robokassa_order_billing1` INT(11) NULL, `robokassa_order_billing1_ru` INT(11) NULL, `robokassa_order_billing1_en` INT(11) NULL, `robokassa_order_billing2_ru` INT(11) NULL, `robokassa_order_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_expired_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `expired_tariff_all` INT(11) NULL, `expired_tariff_ru` INT(11) NULL, `expired_tariff_en` INT(11) NULL, `expired_tariff_billing2` INT(11) NULL, `expired_tariff_billing1` INT(11) NULL, `expired_tariff_billing1_ru` INT(11) NULL, `expired_tariff_billing1_en` INT(11) NULL, `expired_tariff_billing2_ru` INT(11) NULL, `expired_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_expired_tariff_users` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `expired_tariff_users_all` INT(11) NULL, `expired_tariff_users_ru` INT(11) NULL, `expired_tariff_users_en` INT(11) NULL, `expired_tariff_users_billing2` INT(11) NULL, `expired_tariff_users_billing1` INT(11) NULL, `expired_tariff_users_billing1_ru` INT(11) NULL, `expired_tariff_users_billing1_en` INT(11) NULL, `expired_tariff_users_billing2_ru` INT(11) NULL, `expired_tariff_users_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_expired_tariff_calc` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `expired_tariff_calc_all` INT(11) NULL, `expired_tariff_calc_ru` INT(11) NULL, `expired_tariff_calc_en` INT(11) NULL, `expired_tariff_calc_billing1` INT(11) NULL, `expired_tariff_calc_billing1_ru` INT(11) NULL, `expired_tariff_calc_billing1_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_buy_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `buy_tariff_all` INT(11) NULL, `buy_tariff_ru` INT(11) NULL, `buy_tariff_en` INT(11) NULL, `buy_tariff_billing2` INT(11) NULL, `buy_tariff_billing1` INT(11) NULL, `buy_tariff_billing1_ru` INT(11) NULL, `buy_tariff_billing1_en` INT(11) NULL, `buy_tariff_billing2_ru` INT(11) NULL, `buy_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_self_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `self_tariff_all` INT(11) NULL, `self_tariff_ru` INT(11) NULL, `self_tariff_en` INT(11) NULL, `self_tariff_billing2` INT(11) NULL, `self_tariff_billing1` INT(11) NULL, `self_tariff_billing1_ru` INT(11) NULL, `self_tariff_billing1_en` INT(11) NULL, `self_tariff_billing2_ru` INT(11) NULL, `self_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_upgrade_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `upgrade_tariff_all` INT(11) NULL, `upgrade_tariff_ru` INT(11) NULL, `upgrade_tariff_en` INT(11) NULL, `upgrade_tariff_billing2` INT(11) NULL, `upgrade_tariff_billing1` INT(11) NULL, `upgrade_tariff_billing1_ru` INT(11) NULL, `upgrade_tariff_billing1_en` INT(11) NULL, `upgrade_tariff_billing2_ru` INT(11) NULL, `upgrade_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_downgrade_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `downgrade_tariff_all` INT(11) NULL, `downgrade_tariff_ru` INT(11) NULL, `downgrade_tariff_en` INT(11) NULL, `downgrade_tariff_billing2` INT(11) NULL, `downgrade_tariff_billing1` INT(11) NULL, `downgrade_tariff_billing1_ru` INT(11) NULL, `downgrade_tariff_billing1_en` INT(11) NULL, `downgrade_tariff_billing2_ru` INT(11) NULL, `downgrade_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_all_pay_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `all_pay_tariff_all` INT(11) NULL, `all_pay_tariff_ru` INT(11) NULL, `all_pay_tariff_en` INT(11) NULL, `all_pay_tariff_billing2` INT(11) NULL, `all_pay_tariff_billing1` INT(11) NULL, `all_pay_tariff_billing1_ru` INT(11) NULL, `all_pay_tariff_billing1_en` INT(11) NULL, `all_pay_tariff_billing2_ru` INT(11) NULL, `all_pay_tariff_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_new_calc` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `new_calc_all` INT(11) NULL, `new_calc_ru` INT(11) NULL, `new_calc_en` INT(11) NULL, `new_calc_billing2` INT(11) NULL, `new_calc_billing1` INT(11) NULL, `new_calc_billing1_ru` INT(11) NULL, `new_calc_billing1_en` INT(11) NULL, `new_calc_billing2_ru` INT(11) NULL, `new_calc_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_publish_calc` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `publish_calc_all` INT(11) NULL, `publish_calc_ru` INT(11) NULL, `publish_calc_en` INT(11) NULL, `publish_calc_billing2` INT(11) NULL, `publish_calc_billing1` INT(11) NULL, `publish_calc_billing1_ru` INT(11) NULL, `publish_calc_billing1_en` INT(11) NULL, `publish_calc_billing2_ru` INT(11) NULL, `publish_calc_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_exist_publish_calc` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `exist_publish_calc_all` INT(11) NULL, `exist_publish_calc_ru` INT(11) NULL, `exist_publish_calc_en` INT(11) NULL, `exist_publish_calc_billing2` INT(11) NULL, `exist_publish_calc_billing1` INT(11) NULL, `exist_publish_calc_billing1_ru` INT(11) NULL, `exist_publish_calc_billing1_en` INT(11) NULL, `exist_publish_calc_billing2_ru` INT(11) NULL, `exist_publish_calc_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_sms_total` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `sms_total_all` INT(11) NULL, `sms_total_ru` INT(11) NULL, `sms_total_en` INT(11) NULL, `sms_total_billing2` INT(11) NULL, `sms_total_billing1` INT(11) NULL, `sms_total_billing1_ru` INT(11) NULL, `sms_total_billing1_en` INT(11) NULL, `sms_total_billing2_ru` INT(11) NULL, `sms_total_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_sms_client` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `sms_client_all` INT(11) NULL, `sms_client_ru` INT(11) NULL, `sms_client_en` INT(11) NULL, `sms_client_billing2` INT(11) NULL, `sms_client_billing1` INT(11) NULL, `sms_client_billing1_ru` INT(11) NULL, `sms_client_billing1_en` INT(11) NULL, `sms_client_billing2_ru` INT(11) NULL, `sms_client_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_sms_admin` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `sms_admin_all` INT(11) NULL, `sms_admin_ru` INT(11) NULL, `sms_admin_en` INT(11) NULL, `sms_admin_billing2` INT(11) NULL, `sms_admin_billing1` INT(11) NULL, `sms_admin_billing1_ru` INT(11) NULL, `sms_admin_billing1_en` INT(11) NULL, `sms_admin_billing2_ru` INT(11) NULL, `sms_admin_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_email_total` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `email_total_all` INT(11) NULL, `email_total_ru` INT(11) NULL, `email_total_en` INT(11) NULL, `email_total_billing2` INT(11) NULL, `email_total_billing1` INT(11) NULL, `email_total_billing1_ru` INT(11) NULL, `email_total_billing1_en` INT(11) NULL, `email_total_billing2_ru` INT(11) NULL, `email_total_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_email_client` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `email_client_all` INT(11) NULL, `email_client_ru` INT(11) NULL, `email_client_en` INT(11) NULL, `email_client_billing2` INT(11) NULL, `email_client_billing1` INT(11) NULL, `email_client_billing1_ru` INT(11) NULL, `email_client_billing1_en` INT(11) NULL, `email_client_billing2_ru` INT(11) NULL, `email_client_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_email_admin` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `email_admin_all` INT(11) NULL, `email_admin_ru` INT(11) NULL, `email_admin_en` INT(11) NULL, `email_admin_billing2` INT(11) NULL, `email_admin_billing1` INT(11) NULL, `email_admin_billing1_ru` INT(11) NULL, `email_admin_billing1_en` INT(11) NULL, `email_admin_billing2_ru` INT(11) NULL, `email_admin_billing2_en` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_top_tariff` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `tariff_id` INT(11) NULL, `use_tariff` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `day_statistic_top_tariff_use` (
        `id` INT NOT NULL AUTO_INCREMENT,
         `tariff_id` INT(11) NULL, `use_tariff` INT(11) NULL,
        `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`))
        ENGINE = InnoDB DEFAULT CHARSET=utf8;
