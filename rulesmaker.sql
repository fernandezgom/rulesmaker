CREATE TABLE `users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT '1',
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into `users`(`username`,`password`,`enabled`,`email`) values ('alex','123456',1,'fasffasd@hotmail.com');
insert into `users`(`username`,`password`,`enabled`,`email`) values ('garamond','123456',1,'fasdf@hotmail.com');
insert into `users`(`username`,`password`,`enabled`,`email`) values ('pedrulo','12345',1,'xvcbc@hotmail.com');
insert into `users`(`username`,`password`,`enabled`,`email`) values ('tludmetal','12345',1,'rrrr@hotmail.com');
insert into `users`(`username`,`password`,`enabled`,`email`) values ('tludmetal2','12345',1,'sdgn@hotmail.com' );

CREATE TABLE `user_roles` (
  `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `ROLE` varchar(45) NOT NULL,
  PRIMARY KEY (`user_role_id`),
  UNIQUE KEY `uni_username_role` (`ROLE`,`username`),
  KEY `fk_username_idx` (`username`),
  CONSTRAINT `fk_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;


insert into `user_roles`(`user_role_id`,`username`,`ROLE`) values (7,'tludmetal','ROLE_ADMIN');
insert into `user_roles`(`user_role_id`,`username`,`ROLE`) values (3,'alex','ROLE_USER');
insert into `user_roles`(`user_role_id`,`username`,`ROLE`) values (6,'pedrulo','ROLE_USER');
insert into `user_roles`(`user_role_id`,`username`,`ROLE`) values (10,'tludmetal2','ROLE_USER');

