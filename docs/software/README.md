# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними
## SQL-Скрипт для створення початкового наповнення бази даних

``` 
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lab4
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `lab4` ;

-- -----------------------------------------------------
-- Schema lab4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lab4` DEFAULT CHARACTER SET utf8mb3 ;
USE `lab4` ;

-- -----------------------------------------------------
-- Table `lab4`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`Role` ;

CREATE TABLE IF NOT EXISTS `lab4`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `lab4`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`User` ;

CREATE TABLE IF NOT EXISTS `lab4`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `lab4`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `lab4`.`MentionReport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`MentionReport` ;

CREATE TABLE IF NOT EXISTS `lab4`.`MentionReport` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_MentionReport_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_MentionReport_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `lab4`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `lab4`.`PubRequest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`PubRequest` ;

CREATE TABLE IF NOT EXISTS `lab4`.`PubRequest` (
  `User_id` INT UNSIGNED NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`),
  INDEX `fk_PubRequest_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubRequest_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `lab4`.`User` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `lab4`.`PubReview`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`PubReview` ;

CREATE TABLE IF NOT EXISTS `lab4`.`PubReview` (
  `status` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `PubRequest_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`User_id`, `PubRequest_User_id`),
  INDEX `fk_PubReview_PubRequest1_idx` (`PubRequest_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubReview_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `lab4`.`User` (`id`),
  CONSTRAINT `fk_PubReview_PubRequest1`
    FOREIGN KEY (`PubRequest_User_id`)
    REFERENCES `lab4`.`PubRequest` (`User_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `lab4`.`ResultData`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lab4`.`ResultData` ;

CREATE TABLE IF NOT EXISTS `lab4`.`ResultData` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sourse` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `mentionedAt` DATETIME NOT NULL,
  `mentions` INT NOT NULL,
  `MentionReport_id` INT UNSIGNED NOT NULL,
  `MentionReport_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `MentionReport_id`, `MentionReport_User_id`),
  INDEX `fk_ResultData_MentionReport1_idx` (`MentionReport_id` ASC, `MentionReport_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_ResultData_MentionReport1`
    FOREIGN KEY (`MentionReport_id` , `MentionReport_User_id`)
    REFERENCES `lab4`.`MentionReport` (`id` , `User_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `lab4`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `lab4`;
INSERT INTO `lab4`.`Role` (`id`, `name`, `description`) VALUES (1, 'User', 'Registered user, can get info about mentions');
INSERT INTO `lab4`.`Role` (`id`, `name`, `description`) VALUES (2, 'Editor', 'Can do the same as the user, can edit data');
INSERT INTO `lab4`.`Role` (`id`, `name`, `description`) VALUES (3, 'Admin', 'Can do the same as other, can give roles and can block users.');

COMMIT;
```
