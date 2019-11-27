DROP DATABASE IF EXISTS ReviewsAndDrawers; 

CREATE DATABASE IF NOT EXISTS ReviewsAndDrawers; 

USE ReviewsAndDrawers; 

CREATE TABLE items (
    id INT PRIMARY KEY, 
    box_number INT, 
    product_description TEXT, 
    care_instructions TEXT, 
    environment_and_materials TEXT, 
    package_details TEXT
); 

CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT, 
    product_id INT,
    user_name TEXT, 
    posted_date DATE, 
    review_text TEXT,
    product_value_for_money INT, 
    product_quality INT, 
    product_appearance INT, 
    product_ease_of_assembly INT, 
    product_works_as_expected INT,
    review_helpful TEXT, 
    product_recommended TEXT
    FOREIGN KEY(product_id) REFERENCES items(id)
); 