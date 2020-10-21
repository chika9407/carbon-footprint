
INSERT INTO options
    (id, OptionText, QuestionId)
VALUES
    (1, "Meat in every meal", (SELECT id
        FROM questions
        WHERE id
= 1
    ));
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


