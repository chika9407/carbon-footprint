INSERT INTO questions
    (id, title, description, category)
VALUES
    (1, "How would you best describe your diet?", "A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.", "Food");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (2, "In a week, how much do you spend on food from restaurants, canteens, cafes?", "Food bought in restaurants has a wider footprint than food you buy to cook at home because of the ‘overheads’ in the restaurants – the emissions associated with heating, lighting and cooking for your meal.", "Food");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (3, "Of the food you buy, how much is wasted and thrown away?", "One third of all food produced is wasted.", "Food");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (4, "How often do you buy locally produced food that is not imported to your country?", "Buying local and seasonal food will generally result in a lower footprint.", "Food");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (5, "What kind of vehicle do you travel in most as a driver/passenger?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.", "Transport");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (6, "How many hours a week do you spend on a bus commuting?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (7, "How many hours a week do you spend on a train commuting?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (8, "In the last year, how many return flights have you made to the following regions?", "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (9, "What % of your flights do you offset?", "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (10, "What kind of home do you live in? ", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (11, "How many bedrooms do you have?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (12, "How many people (aged 17 and over) live in your house?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (13, "How do you usually heat your home?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (14, "Is your electricity on a green tariff? ", "Basic energy efficiency measures – insulation, double-glazing, low-energy lighting – can cut your energy bills by quarter");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (15, "Do you regularly turn off your lights and appliances (instead of leaving them on a standby)? ", "Lighting can account for up to 15% of your household electricity bill", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (16, "How warm do you keep your home in winter? ", "By turning down your central heating thermostat by just 1°C you could reduce the energy you use for heating by 10%. ", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (17, "Which of these home energy improvements are installed in your home?", "The energy we use in our homes accounts for around 20% of the carbon dioxide emissions in most of the countries.", "Home");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (18, "In the last 12 months, have you bought any of these new household items?", "THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (19, "In a typical month, how much do you spend on clothes and footwear?", "Don’t include second-hand clothes, just those you bought new.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (20, "In a typical month, how much do you spend on your pets and pet food?", "This includes pet food, vet and grooming products, kennels, cages, litter etc.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (21, "In a typical month, how much do you spend on health, beauty and grooming products?", "This includes pet food, vet and grooming products, kennels, cages, litter etc.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (22, "In a typical month, how much do you spend on health, beauty and grooming products?", "This includes all bathroom products, plus other personal care costs such as haircuts, manicures, and all personal hygiene products.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (23, "In a typical month, how much do you spend on phone, internet and TV contracts?", "THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.", "Stuff");
INSERT INTO questions
    (id, title, description, category)
VALUES
    (24, "Which of these types of waste do you recycle and/or compost?", "About a third of our kitchen and garden waste can be composted", "Stuff");

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


