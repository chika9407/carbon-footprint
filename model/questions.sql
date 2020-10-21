SET FOREIGN_KEY_CHECKS
=0;
TRUNCATE TABLE questions;
SET FOREIGN_KEY_CHECKS
=1;


INSERT INTO questions
    (title, description, category)
VALUES
    ("How would you best describe your diet?", "A large proportion of greenhouse gas emissions comes from food production, and meat and dairy are associated with much higher carbon emissions than plant-based food.", "Food");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a week, how much do you spend on food from restaurants, canteens, cafes?", "Food bought in restaurants has a wider footprint than food you buy to cook at home because of the ‘overheads’ in the restaurants – the emissions associated with heating, lighting and cooking for your meal.", "Food");
INSERT INTO questions
    (title, description, category)
VALUES
    ("Of the food you buy, how much is wasted and thrown away?", "One third of all food produced is wasted.", "Food");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How often do you buy locally produced food that is not imported to your country?", "Buying local and seasonal food will generally result in a lower footprint.", "Food");
INSERT INTO questions
    (title, description, category)
VALUES
    ("What kind of vehicle do you travel in most as a driver/passenger?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE’S FOOTPRINT.", "Transport");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How many hours a week do you spend on a bus commuting?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How many hours a week do you spend on a train commuting?", "TRAVEL OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In the last year, how many return flights have you made to the following regions?", "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (title, description, category)
VALUES
    ("What % of your flights do you offset?", "FLIGHT OFTEN REPRESENTS A SIGNIFICANT PART OF PEOPLE'S FOOTPRINT.", "Transport");
INSERT INTO questions
    (title, description, category)
VALUES
    ("What kind of home do you live in? ", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How many bedrooms do you have?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How many people (aged 17 and over) live in your house?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How do you usually heat your home?", "Buildings are one of the biggest greenhouse gas emittors", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("Is your electricity on a green tariff? ", "Basic energy efficiency measures – insulation, double-glazing, low-energy lighting – can cut your energy bills by quarter", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("Do you regularly turn off your lights and appliances (instead of leaving them on a standby)? ", "Lighting can account for up to 15% of your household electricity bill", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("How warm do you keep your home in winter? ", "By turning down your central heating thermostat by just 1°C you could reduce the energy you use for heating by 10%. ", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("Which of these home energy improvements are installed in your home?", "The energy we use in our homes accounts for around 20% of the carbon dioxide emissions in most of the countries.", "Home");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In the last 12 months, have you bought any of these new household items?", "THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a typical month, how much do you spend on clothes and footwear?", "Don’t include second-hand clothes, just those you bought new.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a typical month, how much do you spend on your pets and pet food?", "This includes pet food, vet and grooming products, kennels, cages, litter etc.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a typical month, how much do you spend on health, beauty and grooming products?", "This includes pet food, vet and grooming products, kennels, cages, litter etc.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a typical month, how much do you spend on health, beauty and grooming products?", "This includes all bathroom products, plus other personal care costs such as haircuts, manicures, and all personal hygiene products.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("In a typical month, how much do you spend on phone, internet and TV contracts?", "THE PRODUCTION PROCESS REQUIRES MASSIVE AMOUNTS OF ENERGY.", "Stuff");
INSERT INTO questions
    (title, description, category)
VALUES
    ("Which of these types of waste do you recycle and/or compost?", "About a third of our kitchen and garden waste can be composted", "Stuff");

