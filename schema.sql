CREATE DATABASE dateNight;
USE dateNight;
CREATE TABLE `users` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(50) NULL,
  `LastName` VARCHAR(50) NULL,
  `Gender` VARCHAR(50) NULL,
  `Email` VARCHAR(50) NULL,
  `Password` VARCHAR(12) NULL,
  PRIMARY KEY (`UserID`)
);


