ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE DATABASE MEETING DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use MEETING;


CREATE TABLE `meeting_room` (
  `table_size` enum('4','6','8') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `member` (
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `department` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

CREATE TABLE `reservation` (
  `reservation_time` timestamp NOT NULL,
  `member_id` int(11) NOT NULL,
  `meeting_room_id` int(11) NOT NULL,
  UNIQUE KEY `reservation_UN` (`meeting_room_id`,`reservation_time`),
  KEY `reservation_member` (`member_id`),
  CONSTRAINT `reservation_meeting_room` FOREIGN KEY (`meeting_room_id`) REFERENCES `meeting_room` (`id`),
  CONSTRAINT `reservation_member` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO meeting_room(name, table_size) VALUES ("small", "4");
INSERT INTO meeting_room(name, table_size) VALUES ("middle", "6");
INSERT INTO meeting_room(name, table_size) VALUES ("large", "8");

INSERT INTO MEETING.`member`(name, department) VALUES ("pada", "development");
INSERT INTO MEETING.`member`(name, department) VALUES ("rosa", "marketing");
INSERT INTO MEETING.`member`(name, department) VALUES ("nene", "advertisement");
INSERT INTO MEETING.`member`(name, department) VALUES ("rogan", "sales");
INSERT INTO MEETING.`member`(name, department) VALUES ("syd", "accounting");
INSERT INTO MEETING.`member`(name, department) VALUES ("ander", "hr");