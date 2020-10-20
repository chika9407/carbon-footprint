CREATE TABLE `Recommendations`
(
	`Tips on decreasing the footprint` TEXT NOT NULL,
	`Organizations to join` TEXT NOT NULL,
	`Sign up for updates` TEXT NOT NULL
);

CREATE TABLE `Questions`
(
	`id` INT NOT NULL AUTO_INCREMENT UNIQUE,
	`Title` varchar
(255) NOT NULL,
	`Description` varchar
(255) NOT NULL,
	`Category` varchar
(255) NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `Surveys`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`LastName` varchar
(255) NOT NULL,
	`FirstName` varchar
(255) NOT NULL,
	`DateOfCompletion` TIMESTAMP NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `Answers`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`SurveyId` INT NOT NULL,
	`QuestionId` INT NOT NULL,
	`OptionID` INT NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `Options`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`OptionText` TEXT NOT NULL,
	PRIMARY KEY
(`id`)
);

ALTER TABLE `Answers`
ADD CONSTRAINT `Answers_fk0` FOREIGN KEY
(`SurveyId`) REFERENCES `Surveys`
(`id`);

ALTER TABLE `Answers`
ADD CONSTRAINT `Answers_fk1` FOREIGN KEY
(`QuestionId`) REFERENCES `Questions`
(`id`);

ALTER TABLE `Answers`
ADD CONSTRAINT `Answers_fk2` FOREIGN KEY
(`OptionID`) REFERENCES `Options`
(`id`);

ALTER TABLE `Options`
ADD CONSTRAINT `Options_fk0` FOREIGN KEY
(`OptionText`) REFERENCES `Questions`
(`id`);

