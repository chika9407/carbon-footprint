SET FOREIGN_KEY_CHECKS
=0;
TRUNCATE TABLE options;
SET FOREIGN_KEY_CHECKS
=1;

INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (1, "Meat in every meal", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (2, "Meat in some meals", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (3, " Meat very rarely", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (4, "No beef", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (5, "Vegetarian", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (6, "Vegan", 1);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (7, "$0", 2);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (8, "$1 - $10", 2);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (9, "$10 - $50", 2);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (10, "more than $50", 2);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (11, "None", 3);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (12, "0-10%", 3);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (13, "10-30%", 3);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (14, "more than 30%", 3);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (15, "A lot of the food", 4);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (16, "Some of the food", 4);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (17, "I don’t worry about where my food comes from", 4);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (18, "car", 5);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (19, "motobike", 5);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (20, "Neither - I walk/cycle/take public transport", 5);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (21, "None", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (22, "<1", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (23, "1-3", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (24, "3-6", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (25, "6-10", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (26, "10+", 6);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (27, "None", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (28, "<2", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (29, "2-5", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (30, "5-15", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (31, "15-25", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (32, "25+", 7);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (33, "Up to 1250 km away", 8);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (34, "Up to 2500 km away", 8);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (35, "Up to 5500 km away", 8);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (36, "Up to 9000 km away", 8);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (37, "Up to 17500 km away", 8);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (38, "None", 9);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (39, "25%", 9);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (40, "50%", 9);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (41, "75%", 9);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (42, "100%", 9);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (43, "Detached House", 10);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (44, "Semi -detached", 10);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (45, "Terrace", 10);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (46, "Flat", 10);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (47, "1", 11);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (48, "2", 11);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (49, "3", 11);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (50, "4+", 11);
VALUES
    (51, "1", 12);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (52, "2", 12);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (53, "3", 12);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (54, "4", 12);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (55, "5+", 12);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (56, "Gas", 13);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (57, "Oil", 13);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (58, "Electricity", 13);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (59, "Wood", 13);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (60, "I don't know", 14);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (61, "No", 14);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (62, "Yes but less than 100% renewables", 14);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (63, "100%", 14);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (64, "Yes", 15);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (65, "No", 15);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (66, "Below 14 degrees Celsius", 16);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (67, "15 - 17 degrees Celsius", 16);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (68, "18-21 degrees celsius", 16);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (69, "Over 21 degrees celsius", 16);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (70, "Energy saving light bulbs", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (71, "Cavity or solid wall insulation", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (72, "Loft insulation", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (73, "Double glazing", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (74, "Solar panels", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (75, "Condensing boiler", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (76, "Low flow fittings to taps and showers", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (77, "Solar water heater ", 17);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (78, "TV, laptop, PC", 18);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (79, "Washing machine, dishwasher, fridge freezer, tumble dryer", 18);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (80, "Large item of furniture", 18);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (81, "Mobile phone or tablet", 18);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (82, "$0", 19);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (83, "$1-$50", 19);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (84, "$50-150", 19);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (85, "$150+", 19);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (86, "I don’t have a pet", 20);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (87, "$0-$10", 20);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (88, "$10-$30", 20);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (89, "$30+", 20);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (90, "$0-$10", 21);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (91, "$10-$50", 21);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (92, "$50+", 21);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (93, "$0", 22);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (94, "$1-$30", 22);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (95, "$30-$60", 22);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (96, "$60+", 22);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (97, "Food", 23);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (98, "Tin cans", 23);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (99, "Glass", 23);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (100, "Paper", 23);
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (101, "Plastic", 23);