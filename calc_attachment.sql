CREATE TABLE `ucalc_prod5`.`calc_attachment` ( `attachment_id` BIGINT(21) NOT NULL AUTO_INCREMENT , `calc_id` INT NOT NULL , `real_name` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , `file_name` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , `dt_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`attachment_id`)) ENGINE = InnoDB;
