//practice//
CREAT TABLE products{
    id INT,
    name VARCHAR(255),
    price INT,
    on_sale boolean
};

ALTER TABLE products ADD COLLUMN featured boolean;
ALTER TABLE products DROP COLLUMN featured;  

//Actual table//

CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id,name,location,price_range) values (123,'mcdonalds','new yorks', 3);