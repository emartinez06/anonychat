CREATE TABLE `usernames` (
  `uid` bigint(25) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `usernick` varchar(50) NOT NULL UNIQUE
)