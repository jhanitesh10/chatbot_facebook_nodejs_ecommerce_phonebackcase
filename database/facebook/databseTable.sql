
-- -- //text table
-- CREATE TABLE text(
--   text_id INT(11) AUTO_INCREMENT NOT NULL,
--   category VARCHAR(50),
--   text_type VARCHAR(50),
--   text VARCHAR(250),
--   status TINYINT(3),
--   added_on INT(11),
--   updated_on INT(11),
--   PRIMARY KEY(text_id)
-- );

-- -- //quick reply table
-- CREATE TABLE brand(
-- br_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(br_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );

-- -- //brand TABLE
-- CREATE TABLE phone(
-- pn_id INT(11) AUTO_INCREMENT NOT NULL,
-- br_id INT(11),
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(pn_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id),
-- FOREIGN KEy (br_id) REFERENCES brand(br_id)
-- );

-- -- //whom TABLE
-- CREATE TABLE whom(
-- w_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(w_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );

-- -- //price id
-- CREATE TABLE price(
-- pr_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(pr_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );

-- -- top product price
-- CREATE TABLE topProduct_price(
-- tpr_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(tpr_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );

-- -- //text table data
-- INSERT INTO text (category, text_type, text, status, added_on, updated_on) VALUES ('whom', 'quick_replies', "Best way to give someone reminder of your is to give something that they see each moment🎁👏💕 \n-Don't you think you Humman🤗 always attached with your phones👻?\nChoose to whom you want to give your reminder always!❤📱\n#tofaAisaDoLogYadRakh😂", 1, '', '');
-- //whom table data
-- INSERT INTO whom (text_id, content_type, title, payload, status, created_on, updated_on) VALUES (1, 'text', 'mother', 'mother-1', 1, '', '');
-- //brand table data
-- INSERT INTO brand (text_id, content_type, title, payload, status, created_on, updated_on) VALUES (2, 'text', 'iphone', 'iphone-1', 1, '', '');
-- //phone table data
-- INSERT INTO phone (br_id, text_id, content_type, title, payload, status, created_on, updated_on) VALUES (1, 3, 'text', 'iphone-SE', 'ise-1', 1, '', '');
-- //price table data
-- INSERT INTO price (text_id, content_type, title, payload, status, created_on, updated_on) VALUES (4, 'text', 'price>300', 'less-1', '1', '', '');


-- -- //category
-- CREATE TABLE category(
-- ct_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(ct_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );

-- -- //user table
-- CREATE TABLE facebook_user(
-- user_id INT(11) NOT NULL AUTO_INCREMENT,
-- facebookid INT(11),
-- name VARCHAR(100),
-- firstname VARCHAR(50),
-- lastname VARCHAR(50),
-- gender VARCHAR(10),
-- locale VARCHAR(50),
-- timezone VARCHAR(50),
-- photos TEXT,
-- picture TEXT,
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY (user_id)
-- );

-- -- //product TABLE
-- CREATE TABLE product(
-- pr_id INT(11) NOT NULL AUTO_INCREMENT,
-- product_type VARCHAR(50),
-- product_id VARCHAR(50),
-- title VARCHAR(100),
-- subtitle VARCHAR(100),
-- image VARCHAR(200),
-- price INT(11),
-- discount INT(11),
-- isAvailable INT(3),
-- product_count INT(11),
-- status INT(3),
-- top_status INT(3),
-- PRIMARY KEY(pr_id)
-- );

-- -- //product attribute table
-- CREATE TABLE product_attribute(
-- pa_id INT(11) NOT NULL AUTO_INCREMENT,
-- whom_fk INT(5),
-- brand_fk INT(5),
-- phone_fk INT(5),
-- price_fk INT(5),
-- category_fk INT(5),
-- product_fk INT(5),
-- status INT(3),
-- creted_on text,
-- updated_on text,
-- PRIMARY KEY(pa_id),
-- FOREIGN KEY(whom_fk) REFERENCES whom(w_id),
-- FOREIGN KEY(brand_fk) REFERENCES brand(br_id),
-- FOREIGN KEY(phone_fk) REFERENCES phone(pn_id),
-- FOREIGN KEY(price_fk) REFERENCES price(pr_id),
-- FOREIGN KEY(category_fk) REFERENCES category(ct_id),
-- FOREIGN KEY(product_fk) REFERENCES product(pr_id)

-- );


-- -- CREATE TABLE after_product (update to table name more)
-- ap_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(ct_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );
-- INSERT INTO more (text_id, content_type, title, payload, status) VALUES 
-- (6, "text", "AttachYOurPic", "moreOwnPicture", 1),
-- (6, "text", "TOP-PRODUCT", "moreTopProduct", 1),
-- (6, "text", "HELP", "moreHelp", 1),
-- (6, "text", "MAIN-MENU", "moreMainMenu", 1);

-- -- create table help


-- CREATE TABLE help(
-- h_id INT(11) AUTO_INCREMENT NOT NULL,
-- text_id INT(11),
-- content_type VARCHAR(50),
-- title VARCHAR(50),
-- payload VARCHAR(100),
-- status INT(3),
-- created_on INT(11),
-- updated_on INT(11),
-- PRIMARY KEY(h_id),
-- FOREIGN KEy (text_id) REFERENCES text(text_id)
-- );


-- INSERT INTO product (product_id, product_type, title, subtitle, image, price, discount, isAvailable, product_count, status, top_status) VALUES ('product1', 'type1', 'MY first product no need to title', 'subtitle me', 'http://quizplay.esy.es/quiz/images/Logomakr_0ukOms.png', 399, 10, 1, 100, 1, 1);


-- -- create user address
-- CREATE TABLE user_address(
-- ad_id INT(11),
-- address VARCHAR(250),
-- state VARCHAR(100),
-- city VARCHAR (100),
-- zip INT(20)

-- );

-- -- order table
--  CREATE TABLE user_order (
--     order_id INT(11),
-- 	fk_user_id INT(11),
-- 	fk_product_id INT(11),
-- 	fk_add_id INT(11),
-- 	name VARCHAR(100),
-- email VARCHAR (100),
-- contact INT(15),
-- brand VARCHAR(60),
-- phone VARCHAR(60),
-- category VARCHAR(60),
-- price VARCHAR(60),
-- image VARCHAR(250),
-- description VARCHAR (1000),
-- payment_status INT(3),
-- delivery_status INT(3));
-- ALTER TABLE  user_order ADD COLUMN payment_request_id VARCHAR(150) AFTER fk_add_id,ADD COLUMN payment_created_at INT(11) AFTER payment_request_id,
-- ADD COLUMN payment_modified_at INT(11) AFTER payment_created_at;


-- //product query and all detail 
-- SELECT 
-- p.product_type, p.title, p.subtitle, p.image, p.price, p.discount, p.isAvailable, p.product_count, p.status, p.top_status,
-- br.title as brandTitle, br.payload as brandPayload, 
-- pn.title as phoneTitle, pn.payload as phonePayload,
-- pr.title as priceTitle, pr.payload as pricePayload
-- FROM
-- product p 
-- INNER JOIN
-- product_attribute  pa on p.pr_id = pa.product_fk 
-- INNER JOIN 
-- brand br on br.br_id = pa.brand_fk 
-- INNER JOIN 
-- phone pn ON pn.pn_id = pa.phone_fk 
-- INNER JOIN 
-- price pr ON pr.pr_id = pa.price_fk
-- WHERE
-- pa.brand_fk = 1 AND pa.phone_fk = 1 AND pa.price_fk = 2 AND pa.category_fk = 1 AND p.top_status = 1

-- -- completed payment
-- create table complete_payment(
--   pmt_id INT(11) NOT NULL AUTO_INCREMENT,
--   payment_id VARCHAR(50) UNIQUE,
--   status VARCHAR(20),
--   shorturl VARCHAR(200),
--   longurl VARCHAR(200),
--   purpose VARCHAR(250),
--   amount INT(11),
--   fees INT(11),
--   currency VARCHAR(11),
--   buyer VARCHAR(100),
--   buyer_name VARCHAR(100),
--   buyer_phone VARCHAR(20),
--   payment_request_id VARCHAR(100) UNIQUE,
--   mac VARCHAR(200),
--     PRIMARY KEY (pmt_id)
-- );


-- -- attached product price
-- CREATE TABLE attach_product_price(
-- ap_id INT(11) NOT NULL AUTO_INCREMENT,
-- brand_fk INT(5),
-- phone_fk INT(5),
-- price_fk INT(5),
-- image VARCHAr(200),
-- shipping_cost INT(11),
-- discount INT(11),
-- status INT(3),
-- creted_on text,
-- updated_on text,
-- PRIMARY KEY(ap_id),
-- FOREIGN KEY(brand_fk) REFERENCES brand(br_id),
-- FOREIGN KEY(phone_fk) REFERENCES phone(pn_id),
-- FOREIGN KEY(price_fk) REFERENCES price(pr_id)
-- );

-- -- attached product detail
-- CREATE TABLE attached_product_detail(
-- apd_id INT(11) NOT NULL AUTO_INCREMENT,
-- facebookid INT(11),
-- brand INT(5),
-- phone INT(5),
-- image VARCHAr(200),
-- status INT(3),
-- creted_on text,
-- updated_on text,
-- PRIMARY KEY(apd_id)
-- );

-- -- brand data
-- -- text_id 1 for brand
-- INSERT INTO brand 
--   (text_id, content_type, title, payload, status, created_on, updated_on)
-- VALUES
--   (1, 'text','Apple', 'apple-1', 1, NOW(), NOW()),
--   (1, 'text','Honour', 'honour-2', 1, NOW(), NOW()),
--   (1, 'text','Lenovo', 'lenovo-3', 1, NOW(), NOW()),
--   (1, 'text','Motorola', 'motorola-4', 1, NOW(), NOW()),
--   (1, 'text','Oneplus', 'oneplus-5', 1, NOW(), NOW()),
--   (1, 'text','Oppo', 'oppo-6', 1, NOW(), NOW()),
--   (1, 'text','Samsung', 'samsung-7', 1, NOW(), NOW()),
--   (1, 'text','Vivo', 'vivo-8', 1, NOW(), NOW()),
--   (1, 'text','Xiaomi', 'xiaomi-9', 1, NOW(), NOW());


-- -- phone data
-- -- text id 2 for apple
-- INSERT INTO phone
--   (br_id, text_id, content_type, title, payload, status, created_on, updated_on)
-- VALUES
-- (1, 2, 'text', 'Iphone-4s', 'iphone4s-1', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-5', 'iphone5-2', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-5s', 'iphone5s-3', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-Se', 'iphonese-4', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-6', 'iphone6-5', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-7', 'iphone7-6', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-7plus', 'iphone7plus-7', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-X', 'iphonex-8', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Iphone-XPlus', 'iphonexplus-9', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Back', 'iphoneBack', 1, NOW(), NOW()),
-- (1, 2, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),


-- (2, 3, 'text', 'Honour-9Lite', 'honour9lite-1', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Honour-7X', 'honour7x-2', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Honour-7A', 'honour7a-3', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Honour-7C', 'honour7c-4', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Honour-8', 'honour8-5', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Honour-6X', 'hounour6x-6', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Back', 'honourBack', 1, NOW(), NOW()),
-- (2, 3, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),

-- (3, 4, 'text', 'Lenovo-K4 Note', 'lenovok4note-1', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-k5 Vibe', 'lenovok5vibe-2', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-k5 Note', 'lenovok5note-3', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-k3 Note', 'lenovok3note-4', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-K8 Note', 'lenovok8note-5', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-K6 Power', 'lenovok6power-6', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-k8 Plus', 'lenovok8plus-7', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Lenovo-P2', 'lenovop2-8', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Back', 'lenovoBack', 1, NOW(), NOW()),
-- (3, 4, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),


-- (4, 5, 'text', 'Moto-G4', 'motog4-1', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-G5S Plus', 'motog5s-2', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-X4', 'motox4-3', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-G5S', 'motog5s-4', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-G5', 'motog5-5', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-G2', 'motog2-6', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-G3', 'mtoog3-7', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Moto-XPlay', 'motoxplay-8', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Back', 'motorolaBack', 1, NOW(), NOW()),
-- (4, 5, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),

-- (5, 6, 'text', 'Oneplus-1', 'oneplus1-1', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-2', 'oneplus2-2', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-3', 'oneplus3-3', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-3T', 'oneplus3t-4', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-5', 'oneplus5-5', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-5T', 'oneplus5t-6', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-6', 'oneplus6-7', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Oneplus-6T', 'oneplus6t-8', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Back', 'oneplusBack', 1, NOW(), NOW()),
-- (5, 6, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),


-- (6, 7, 'text', 'Oppo-F5', 'oppof5-1', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-F7', 'oppof7-2', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-A37', 'oppoa37-3', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-A57', 'oppoa57-4', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-F1S', 'oppof1s-5', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-Real me 1', 'opporealme1-6', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-F3', 'oppof3-7', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Oppo-Neo 7', 'opponeo7-8', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Back', 'oppoBack', 1, NOW(), NOW()),
-- (6, 7, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),




-- (7, 8, 'text', 'Samsung G-J7', 'samsunggj7-1', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-S9Plus', 'samsunggs9plus-2', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-J8', 'samsunggj8-3', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-A8Plus', 'samsungga8plus-4', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-Note8', 'samsunggnote8-5', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-J7Prime', 'sasunggj7prime-6', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-J5Prime', 'samsunggj5primve-7', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Samsung G-J7Max', 'samsunggj7max-8', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Back', 'samsungBack', 1, NOW(), NOW()),
-- (7, 8, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),



-- (8, 9, 'text', 'Vivo-V9', 'vivov9-1', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-V5', 'vivov5-2', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-Y55', 'vivoy55-3', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-V7', 'vivov7-4', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-V7Plus', 'vivov7plus-5', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-Y53', 'vivoy53-6', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-Y21', 'vivoy21-7', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Vivo-Y83', 'vivoy83-8', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Back', 'vivoBack', 1, NOW(), NOW()),
-- (8, 9, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW()),



-- (9, 10, 'text', 'Redmi Note-4', 'redminote4-1', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi Note-5Pro', 'redminote5pro-2', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi NOte-4', 'redminote4-3', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi NOte-Y1', 'redminotey1-4', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi Note-5', 'redminote5-5', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi-5', 'redmi5-6', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi Note-3', 'redminote3-7', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Redmi-A1', 'redmia1-8', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Back', 'redmiBack', 1, NOW(), NOW()),
-- (9, 10, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW());


-- -- price data
-- INSERT INTO price
--   (text_id, content_type, title, payload, status, created_on, updated_on)
-- VALUES
--   (11, 'text', '199', 'price-1', 1, NOW(), NOW()),
--   (11, 'text', '299-350', 'price-2', 1, NOW(), NOW()),
--   (11, 'text', '399-500', 'price-3', 1, NOW(), NOW());


-- -- category
-- INSERT INTO category (text_id, content_type, title, payload, status, created_on, updated_on) 
-- VALUES 
-- (12, 'text', 'Tv series-addict', 'tvseriesadict-1', 1, NOW(), NOW()),
-- (12, 'text', 'Gammer', 'gammer-2', 1, NOW(), NOW()),
-- (12, 'text', 'Sarcasm', 'sarcasm-3', 1, NOW(), NOW()),
-- (12, 'text', 'LGBT', 'lgbt-4', 1, NOW(), NOW()),
-- (12, 'text', 'GYM', 'gym-5', 1, NOW(), NOW()),
-- (12, 'text', 'Quotes', 'quotes-6', 1, NOW(), NOW()),
-- (12, 'text', 'Relationship', 'relationship-7', 1, NOW(), NOW()),
-- (12, 'text', 'PUBG', 'pubg-8', 1, NOW(), NOW()),
-- (12, 'text', 'Cricket', 'cricket-9', 1, NOW(), NOW()),
-- (12, 'text', 'Back', 'categoryBack', 1, NOW(), NOW()),
-- (12, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW());

-- more
INSERT INTO more
  (text_id, content_type, title, payload, status, created_on, updated_on)
VALUES
  (13, 'text', 'Attache,what you want', 'moreAttachPic', 1, NOW(), NOW()),
  (13, 'text', 'Trendding', 'moreTopProduct', 1, NOW(), NOW()),
  (13, 'text', 'Help', 'moreHelp', 1, NOW(), NOW()),
  (13, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW())
  ;
-- help
INSERT INTO help
  (text_id, content_type, title, payload, status, created_on, updated_on)
VALUES
  (13, 'text', 'How to buy?', 'helpHowBuy', 1, NOW(), NOW()),
  (13, 'text', 'About', 'helpAbout', 1, NOW(), NOW()),
  (13, 'text', 'Contact', 'helpContact', 1, NOW(), NOW()),
  (13, 'text', 'FAQ', 'helpFaq', 1, NOW(), NOW()),
  (13, 'text', 'Feedback', 'helpFeedback', 1, NOW(), NOW()),
  (13, 'text', 'Main-menu', 'mainMenu', 1, NOW(), NOW())
  ;
-- text table data
INSERT INTO text
  (category, text_type, text, status, added_on, updated_on)
VALUES
  ('brand', 'quick_replies', 'brand text', 1, NOW(), NOW()),

  ('phone', 'quick_replies', 'Apple text', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'honour', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'lenovo', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'moto', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'oneplus', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'oppo', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'samsung', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'vivo', 1, NOW(), NOW()),
  ('phone', 'quick_replies', 'xiomi', 1, NOW(), NOW()),
  
  ('price', 'quick_replies', 'price', 1, NOW(), NOW()),
  
  ('cateory', 'quick_replies', 'category', 1, NOW(), NOW()),

  ('more', 'quick_replies', 'more', 1, NOW(), NOW()),

  ('help', 'quick_replies', 'help', 1, NOW(), NOW());


-- -- product attribute detail
-- (brand, phone, price, category, product)


-- -- //price

INSERT INTO product_attribute(brand_fk, phone_fk, price_fk, category_fk, product_fk, status, creted_on, updated_on) 
	VALUES();
-- 1 : apple

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),



-- 2 : Honour

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),






-- 3 : Lenovo

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),






-- 4 : Moto

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),




-- 5 : Oneplus

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),




-- 6 : Oppo

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),





-- 7 : Samsung

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),





-- 7 : Vivo

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),




-- 7 : Xiomi

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 1, 2, 1, 0),
-- (1, 1, 2, 2, 0),
-- (1, 1, 2, 3, 0),
-- (1, 1, 2, 4, 0),
-- (1, 1, 2, 5, 0),
-- (1, 1, 2, 6, 0),
-- (1, 1, 2, 7, 0),
-- (1, 1, 2, 8, 0),
-- (1, 1, 2, 9, 0),


-- (1, 1, 3, 1, 0),
-- (1, 1, 3, 2, 0),
-- (1, 1, 3, 3, 0),
-- (1, 1, 3, 4, 0),
-- (1, 1, 3, 5, 0),
-- (1, 1, 3, 6, 0),
-- (1, 1, 3, 7, 0),
-- (1, 1, 3, 8, 0),
-- (1, 1, 3, 9, 0),


-- -- phone

-- (1, 1, 1, 1, 0),
-- (1, 1, 1, 2, 0),
-- (1, 1, 1, 3, 0),
-- (1, 1, 1, 4, 0),
-- (1, 1, 1, 5, 0),
-- (1, 1, 1, 6, 0),
-- (1, 1, 1, 7, 0),
-- (1, 1, 1, 8, 0),
-- (1, 1, 1, 9, 0),

-- (1, 2, 2, 1, 0),
-- (1, 2, 2, 2, 0),
-- (1, 2, 2, 3, 0),
-- (1, 2, 2, 4, 0),
-- (1, 2, 2, 5, 0),
-- (1, 2, 2, 6, 0),
-- (1, 2, 2, 7, 0),
-- (1, 2, 2, 8, 0),
-- (1, 2, 2, 9, 0),


-- (1, 3, 3, 1, 0),
-- (1, 3, 3, 2, 0),
-- (1, 3, 3, 3, 0),
-- (1, 3, 3, 4, 0),
-- (1, 3, 3, 5, 0),
-- (1, 3, 3, 6, 0),
-- (1, 3, 3, 7, 0),
-- (1, 3, 3, 8, 0),
-- (1, 3, 3, 9, 0),


-- (1, 4, 1, 1, 0),
-- (1, 4, 1, 2, 0),
-- (1, 4, 1, 3, 0),
-- (1, 4, 1, 4, 0),
-- (1, 4, 1, 5, 0),
-- (1, 4, 1, 6, 0),
-- (1, 4, 1, 7, 0),
-- (1, 4, 1, 8, 0),
-- (1, 4, 1, 9, 0),

-- (1, 5, 2, 1, 0),
-- (1, 5, 2, 2, 0),
-- (1, 5, 2, 3, 0),
-- (1, 5, 2, 4, 0),
-- (1, 5, 2, 5, 0),
-- (1, 5, 2, 6, 0),
-- (1, 5, 2, 7, 0),
-- (1, 5, 2, 8, 0),
-- (1, 5, 2, 9, 0),


-- (1, 6, 3, 1, 0),
-- (1, 6, 3, 2, 0),
-- (1, 6, 3, 3, 0),
-- (1, 6, 3, 4, 0),
-- (1, 6, 3, 5, 0),
-- (1, 6, 3, 6, 0),
-- (1, 6, 3, 7, 0),
-- (1, 6, 3, 8, 0),
-- (1, 6, 3, 9, 0),




-- (1, 7, 1, 1, 0),
-- (1, 7, 1, 2, 0),
-- (1, 7, 1, 3, 0),
-- (1, 7, 1, 4, 0),
-- (1, 7, 1, 5, 0),
-- (1, 7, 1, 6, 0),
-- (1, 7, 1, 7, 0),
-- (1, 7, 1, 8, 0),
-- (1, 7, 1, 9, 0),

-- (1, 8, 2, 1, 0),
-- (1, 8, 2, 2, 0),
-- (1, 8, 2, 3, 0),
-- (1, 8, 2, 4, 0),
-- (1, 8, 2, 5, 0),
-- (1, 8, 2, 6, 0),
-- (1, 8, 2, 7, 0),
-- (1, 8, 2, 8, 0),
-- (1, 8, 2, 9, 0),


-- (1, 9, 3, 1, 0),
-- (1, 9, 3, 2, 0),
-- (1, 9, 3, 3, 0),
-- (1, 9, 3, 4, 0),
-- (1, 9, 3, 5, 0),
-- (1, 9, 3, 6, 0),
-- (1, 9, 3, 7, 0),
-- (1, 9, 3, 8, 0),
-- (1, 9, 3, 9, 0),



-- INSERT INTO product_attribute
--   (brand_fk, phone_fk, price_fk, category_fk, product_fk)
-- VALUES

--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 3),
--   (1, 1, 1, 2, 3),
--   (1, 1, 1, 3, 3),
--   (1, 1, 1, 4, 3),
--   (1, 1, 1, 5, 3),
--   (1, 1, 1, 6, 3),
--   (1, 1, 1, 7, 3),
--   (1, 1, 1, 8, 3),
--   (1, 1, 1, 9, 3),

--   (1, 2, 2, 1, 3),
--   (1, 2, 2, 2, 3),
--   (1, 2, 2, 3, 3),
--   (1, 2, 2, 4, 3),
--   (1, 2, 2, 5, 3),
--   (1, 2, 2, 6, 3),
--   (1, 2, 2, 7, 3),
--   (1, 2, 2, 8, 3),
--   (1, 2, 2, 9, 3),


--   (1, 3, 3, 1, 2),
--   (1, 3, 3, 2, 2),
--   (1, 3, 3, 3, 2),
--   (1, 3, 3, 4, 2),
--   (1, 3, 3, 5, 2),
--   (1, 3, 3, 6, 2),
--   (1, 3, 3, 7, 2),
--   (1, 3, 3, 8, 2),
--   (1, 3, 3, 9, 2),


--   (1, 4, 1, 1, 2),
--   (1, 4, 1, 2, 2),
--   (1, 4, 1, 3, 2),
--   (1, 4, 1, 4, 2),
--   (1, 4, 1, 5, 2),
--   (1, 4, 1, 6, 2),
--   (1, 4, 1, 7, 2),
--   (1, 4, 1, 8, 2),
--   (1, 4, 1, 9, 2),

--   (1, 5, 2, 1, 2),
--   (1, 5, 2, 2, 2),
--   (1, 5, 2, 3, 2),
--   (1, 5, 2, 4, 2),
--   (1, 5, 2, 5, 2),
--   (1, 5, 2, 6, 2),
--   (1, 5, 2, 7, 2),
--   (1, 5, 2, 8, 2),
--   (1, 5, 2, 9, 2),


--   (1, 6, 3, 1, 2),
--   (1, 6, 3, 2, 2),
--   (1, 6, 3, 3, 2),
--   (1, 6, 3, 4, 2),
--   (1, 6, 3, 5, 2),
--   (1, 6, 3, 6, 2),
--   (1, 6, 3, 7, 2),
--   (1, 6, 3, 8, 2),
--   (1, 6, 3, 9, 2),




--   (1, 7, 1, 1, 2),
--   (1, 7, 1, 2, 2),
--   (1, 7, 1, 3, 2),
--   (1, 7, 1, 4, 2),
--   (1, 7, 1, 5, 2),
--   (1, 7, 1, 6, 2),
--   (1, 7, 1, 7, 2),
--   (1, 7, 1, 8, 2),
--   (1, 7, 1, 9, 2),

--   (1, 8, 2, 1, 2),
--   (1, 8, 2, 2, 2),
--   (1, 8, 2, 3, 2),
--   (1, 8, 2, 4, 2),
--   (1, 8, 2, 5, 2),
--   (1, 8, 2, 6, 2),
--   (1, 8, 2, 7, 2),
--   (1, 8, 2, 8, 2),
--   (1, 8, 2, 9, 2),


--   (1, 9, 3, 1, 2),
--   (1, 9, 3, 2, 2),
--   (1, 9, 3, 3, 2),
--   (1, 9, 3, 4, 2),
--   (1, 9, 3, 5, 2),
--   (1, 9, 3, 6, 2),
--   (1, 9, 3, 7, 2),
--   (1, 9, 3, 8, 2),
--   (1, 9, 3, 9, 2),










--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 2, 2, 1, 2),
--   (1, 2, 2, 2, 2),
--   (1, 2, 2, 3, 2),
--   (1, 2, 2, 4, 2),
--   (1, 2, 2, 5, 2),
--   (1, 2, 2, 6, 2),
--   (1, 2, 2, 7, 2),
--   (1, 2, 2, 8, 2),
--   (1, 2, 2, 9, 2),


--   (1, 3, 3, 1, 2),
--   (1, 3, 3, 2, 2),
--   (1, 3, 3, 3, 2),
--   (1, 3, 3, 4, 2),
--   (1, 3, 3, 5, 2),
--   (1, 3, 3, 6, 2),
--   (1, 3, 3, 7, 2),
--   (1, 3, 3, 8, 2),
--   (1, 3, 3, 9, 2),


--   (1, 4, 1, 1, 2),
--   (1, 4, 1, 2, 2),
--   (1, 4, 1, 3, 2),
--   (1, 4, 1, 4, 2),
--   (1, 4, 1, 5, 2),
--   (1, 4, 1, 6, 2),
--   (1, 4, 1, 7, 2),
--   (1, 4, 1, 8, 2),
--   (1, 4, 1, 9, 2),

--   (1, 5, 2, 1, 2),
--   (1, 5, 2, 2, 2),
--   (1, 5, 2, 3, 2),
--   (1, 5, 2, 4, 2),
--   (1, 5, 2, 5, 2),
--   (1, 5, 2, 6, 2),
--   (1, 5, 2, 7, 2),
--   (1, 5, 2, 8, 2),
--   (1, 5, 2, 9, 2),


--   (1, 6, 3, 1, 2),
--   (1, 6, 3, 2, 2),
--   (1, 6, 3, 3, 2),
--   (1, 6, 3, 4, 2),
--   (1, 6, 3, 5, 2),
--   (1, 6, 3, 6, 2),
--   (1, 6, 3, 7, 2),
--   (1, 6, 3, 8, 2),
--   (1, 6, 3, 9, 2),




--   (1, 7, 1, 1, 2),
--   (1, 7, 1, 2, 2),
--   (1, 7, 1, 3, 2),
--   (1, 7, 1, 4, 2),
--   (1, 7, 1, 5, 2),
--   (1, 7, 1, 6, 2),
--   (1, 7, 1, 7, 2),
--   (1, 7, 1, 8, 2),
--   (1, 7, 1, 9, 2),

--   (1, 8, 2, 1, 2),
--   (1, 8, 2, 2, 2),
--   (1, 8, 2, 3, 2),
--   (1, 8, 2, 4, 2),
--   (1, 8, 2, 5, 2),
--   (1, 8, 2, 6, 2),
--   (1, 8, 2, 7, 2),
--   (1, 8, 2, 8, 2),
--   (1, 8, 2, 9, 2),


--   (1, 9, 3, 1, 2),
--   (1, 9, 3, 2, 2),
--   (1, 9, 3, 3, 2),
--   (1, 9, 3, 4, 2),
--   (1, 9, 3, 5, 2),
--   (1, 9, 3, 6, 2),
--   (1, 9, 3, 7, 2),
--   (1, 9, 3, 8, 2),
--   (1, 9, 3, 9, 2),









--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 2, 2, 1, 2),
--   (1, 2, 2, 2, 2),
--   (1, 2, 2, 3, 2),
--   (1, 2, 2, 4, 2),
--   (1, 2, 2, 5, 2),
--   (1, 2, 2, 6, 2),
--   (1, 2, 2, 7, 2),
--   (1, 2, 2, 8, 2),
--   (1, 2, 2, 9, 2),


--   (1, 3, 3, 1, 2),
--   (1, 3, 3, 2, 2),
--   (1, 3, 3, 3, 2),
--   (1, 3, 3, 4, 2),
--   (1, 3, 3, 5, 2),
--   (1, 3, 3, 6, 2),
--   (1, 3, 3, 7, 2),
--   (1, 3, 3, 8, 2),
--   (1, 3, 3, 9, 2),


--   (1, 4, 1, 1, 2),
--   (1, 4, 1, 2, 2),
--   (1, 4, 1, 3, 2),
--   (1, 4, 1, 4, 2),
--   (1, 4, 1, 5, 2),
--   (1, 4, 1, 6, 2),
--   (1, 4, 1, 7, 2),
--   (1, 4, 1, 8, 2),
--   (1, 4, 1, 9, 2),

--   (1, 5, 2, 1, 2),
--   (1, 5, 2, 2, 2),
--   (1, 5, 2, 3, 2),
--   (1, 5, 2, 4, 2),
--   (1, 5, 2, 5, 2),
--   (1, 5, 2, 6, 2),
--   (1, 5, 2, 7, 2),
--   (1, 5, 2, 8, 2),
--   (1, 5, 2, 9, 2),


--   (1, 6, 3, 1, 2),
--   (1, 6, 3, 2, 2),
--   (1, 6, 3, 3, 2),
--   (1, 6, 3, 4, 2),
--   (1, 6, 3, 5, 2),
--   (1, 6, 3, 6, 2),
--   (1, 6, 3, 7, 2),
--   (1, 6, 3, 8, 2),
--   (1, 6, 3, 9, 2),




--   (1, 7, 1, 1, 2),
--   (1, 7, 1, 2, 2),
--   (1, 7, 1, 3, 2),
--   (1, 7, 1, 4, 2),
--   (1, 7, 1, 5, 2),
--   (1, 7, 1, 6, 2),
--   (1, 7, 1, 7, 2),
--   (1, 7, 1, 8, 2),
--   (1, 7, 1, 9, 2),

--   (1, 8, 2, 1, 2),
--   (1, 8, 2, 2, 2),
--   (1, 8, 2, 3, 2),
--   (1, 8, 2, 4, 2),
--   (1, 8, 2, 5, 2),
--   (1, 8, 2, 6, 2),
--   (1, 8, 2, 7, 2),
--   (1, 8, 2, 8, 2),
--   (1, 8, 2, 9, 2),


--   (1, 9, 3, 1, 2),
--   (1, 9, 3, 2, 2),
--   (1, 9, 3, 3, 2),
--   (1, 9, 3, 4, 2),
--   (1, 9, 3, 5, 2),
--   (1, 9, 3, 6, 2),
--   (1, 9, 3, 7, 2),
--   (1, 9, 3, 8, 2),
--   (1, 9, 3, 9, 2),









--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 2, 2, 1, 2),
--   (1, 2, 2, 2, 2),
--   (1, 2, 2, 3, 2),
--   (1, 2, 2, 4, 2),
--   (1, 2, 2, 5, 2),
--   (1, 2, 2, 6, 2),
--   (1, 2, 2, 7, 2),
--   (1, 2, 2, 8, 2),
--   (1, 2, 2, 9, 2),


--   (1, 3, 3, 1, 2),
--   (1, 3, 3, 2, 2),
--   (1, 3, 3, 3, 2),
--   (1, 3, 3, 4, 2),
--   (1, 3, 3, 5, 2),
--   (1, 3, 3, 6, 2),
--   (1, 3, 3, 7, 2),
--   (1, 3, 3, 8, 2),
--   (1, 3, 3, 9, 2),


--   (1, 4, 1, 1, 2),
--   (1, 4, 1, 2, 2),
--   (1, 4, 1, 3, 2),
--   (1, 4, 1, 4, 2),
--   (1, 4, 1, 5, 2),
--   (1, 4, 1, 6, 2),
--   (1, 4, 1, 7, 2),
--   (1, 4, 1, 8, 2),
--   (1, 4, 1, 9, 2),

--   (1, 5, 2, 1, 2),
--   (1, 5, 2, 2, 2),
--   (1, 5, 2, 3, 2),
--   (1, 5, 2, 4, 2),
--   (1, 5, 2, 5, 2),
--   (1, 5, 2, 6, 2),
--   (1, 5, 2, 7, 2),
--   (1, 5, 2, 8, 2),
--   (1, 5, 2, 9, 2),


--   (1, 6, 3, 1, 2),
--   (1, 6, 3, 2, 2),
--   (1, 6, 3, 3, 2),
--   (1, 6, 3, 4, 2),
--   (1, 6, 3, 5, 2),
--   (1, 6, 3, 6, 2),
--   (1, 6, 3, 7, 2),
--   (1, 6, 3, 8, 2),
--   (1, 6, 3, 9, 2),




--   (1, 7, 1, 1, 2),
--   (1, 7, 1, 2, 2),
--   (1, 7, 1, 3, 2),
--   (1, 7, 1, 4, 2),
--   (1, 7, 1, 5, 2),
--   (1, 7, 1, 6, 2),
--   (1, 7, 1, 7, 2),
--   (1, 7, 1, 8, 2),
--   (1, 7, 1, 9, 2),

--   (1, 8, 2, 1, 2),
--   (1, 8, 2, 2, 2),
--   (1, 8, 2, 3, 2),
--   (1, 8, 2, 4, 2),
--   (1, 8, 2, 5, 2),
--   (1, 8, 2, 6, 2),
--   (1, 8, 2, 7, 2),
--   (1, 8, 2, 8, 2),
--   (1, 8, 2, 9, 2),


--   (1, 9, 3, 1, 2),
--   (1, 9, 3, 2, 2),
--   (1, 9, 3, 3, 2),
--   (1, 9, 3, 4, 2),
--   (1, 9, 3, 5, 2),
--   (1, 9, 3, 6, 2),
--   (1, 9, 3, 7, 2),
--   (1, 9, 3, 8, 2),
--   (1, 9, 3, 9, 2),











--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 2, 2, 1, 2),
--   (1, 2, 2, 2, 2),
--   (1, 2, 2, 3, 2),
--   (1, 2, 2, 4, 2),
--   (1, 2, 2, 5, 2),
--   (1, 2, 2, 6, 2),
--   (1, 2, 2, 7, 2),
--   (1, 2, 2, 8, 2),
--   (1, 2, 2, 9, 2),


--   (1, 3, 3, 1, 2),
--   (1, 3, 3, 2, 2),
--   (1, 3, 3, 3, 2),
--   (1, 3, 3, 4, 2),
--   (1, 3, 3, 5, 2),
--   (1, 3, 3, 6, 2),
--   (1, 3, 3, 7, 2),
--   (1, 3, 3, 8, 2),
--   (1, 3, 3, 9, 2),


--   (1, 4, 1, 1, 2),
--   (1, 4, 1, 2, 2),
--   (1, 4, 1, 3, 2),
--   (1, 4, 1, 4, 2),
--   (1, 4, 1, 5, 2),
--   (1, 4, 1, 6, 2),
--   (1, 4, 1, 7, 2),
--   (1, 4, 1, 8, 2),
--   (1, 4, 1, 9, 2),

--   (1, 5, 2, 1, 2),
--   (1, 5, 2, 2, 2),
--   (1, 5, 2, 3, 2),
--   (1, 5, 2, 4, 2),
--   (1, 5, 2, 5, 2),
--   (1, 5, 2, 6, 2),
--   (1, 5, 2, 7, 2),
--   (1, 5, 2, 8, 2),
--   (1, 5, 2, 9, 2),


--   (1, 6, 3, 1, 2),
--   (1, 6, 3, 2, 2),
--   (1, 6, 3, 3, 2),
--   (1, 6, 3, 4, 2),
--   (1, 6, 3, 5, 2),
--   (1, 6, 3, 6, 2),
--   (1, 6, 3, 7, 2),
--   (1, 6, 3, 8, 2),
--   (1, 6, 3, 9, 2),




--   (1, 7, 1, 1, 2),
--   (1, 7, 1, 2, 2),
--   (1, 7, 1, 3, 2),
--   (1, 7, 1, 4, 2),
--   (1, 7, 1, 5, 2),
--   (1, 7, 1, 6, 2),
--   (1, 7, 1, 7, 2),
--   (1, 7, 1, 8, 2),
--   (1, 7, 1, 9, 2),

--   (1, 8, 2, 1, 2),
--   (1, 8, 2, 2, 2),
--   (1, 8, 2, 3, 2),
--   (1, 8, 2, 4, 2),
--   (1, 8, 2, 5, 2),
--   (1, 8, 2, 6, 2),
--   (1, 8, 2, 7, 2),
--   (1, 8, 2, 8, 2),
--   (1, 8, 2, 9, 2),


--   (1, 9, 3, 1, 2),
--   (1, 9, 3, 2, 2),
--   (1, 9, 3, 3, 2),
--   (1, 9, 3, 4, 2),
--   (1, 9, 3, 5, 2),
--   (1, 9, 3, 6, 2),
--   (1, 9, 3, 7, 2),
--   (1, 9, 3, 8, 2),
--   (1, 9, 3, 9, 2),






--   (1, 1, 1, 1, 2),
--   (1, 1, 1, 2, 2),
--   (1, 1, 1, 3, 2),
--   (1, 1, 1, 4, 2),
--   (1, 1, 1, 5, 2),
--   (1, 1, 1, 6, 2),
--   (1, 1, 1, 7, 2),
--   (1, 1, 1, 8, 2),
--   (1, 1, 1, 9, 2),

--   (1, 1, 2, 1, 2),
--   (1, 1, 2, 2, 2),
--   (1, 1, 2, 3, 2),
--   (1, 1, 2, 4, 2),
--   (1, 1, 2, 5, 2),
--   (1, 1, 2, 6, 2),
--   (1, 1, 2, 7, 2),
--   (1, 1, 2, 8, 2),
--   (1, 1, 2, 9, 2),


--   (1, 1, 3, 1, 2),
--   (1, 1, 3, 2, 2),
--   (1, 1, 3, 3, 2),
--   (1, 1, 3, 4, 2),
--   (1, 1, 3, 5, 2),
--   (1, 1, 3, 6, 2),
--   (1, 1, 3, 7, 2),
--   (1, 1, 3, 8, 2),
--   (1, 1, 3, 9, 2),



--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 2, 2, 1, 1),
--   (1, 2, 2, 2, 1),
--   (1, 2, 2, 3, 1),
--   (1, 2, 2, 4, 1),
--   (1, 2, 2, 5, 1),
--   (1, 2, 2, 6, 1),
--   (1, 2, 2, 7, 1),
--   (1, 2, 2, 8, 1),
--   (1, 2, 2, 9, 1),


--   (1, 3, 3, 1, 1),
--   (1, 3, 3, 2, 1),
--   (1, 3, 3, 3, 1),
--   (1, 3, 3, 4, 1),
--   (1, 3, 3, 5, 1),
--   (1, 3, 3, 6, 1),
--   (1, 3, 3, 7, 1),
--   (1, 3, 3, 8, 1),
--   (1, 3, 3, 9, 1),


--   (1, 4, 1, 1, 1),
--   (1, 4, 1, 2, 1),
--   (1, 4, 1, 3, 1),
--   (1, 4, 1, 4, 1),
--   (1, 4, 1, 5, 1),
--   (1, 4, 1, 6, 1),
--   (1, 4, 1, 7, 1),
--   (1, 4, 1, 8, 1),
--   (1, 4, 1, 9, 1),

--   (1, 5, 2, 1, 1),
--   (1, 5, 2, 2, 1),
--   (1, 5, 2, 3, 1),
--   (1, 5, 2, 4, 1),
--   (1, 5, 2, 5, 1),
--   (1, 5, 2, 6, 1),
--   (1, 5, 2, 7, 1),
--   (1, 5, 2, 8, 1),
--   (1, 5, 2, 9, 1),


--   (1, 6, 3, 1, 1),
--   (1, 6, 3, 2, 1),
--   (1, 6, 3, 3, 1),
--   (1, 6, 3, 4, 1),
--   (1, 6, 3, 5, 1),
--   (1, 6, 3, 6, 1),
--   (1, 6, 3, 7, 1),
--   (1, 6, 3, 8, 1),
--   (1, 6, 3, 9, 1),




--   (1, 7, 1, 1, 1),
--   (1, 7, 1, 2, 1),
--   (1, 7, 1, 3, 1),
--   (1, 7, 1, 4, 1),
--   (1, 7, 1, 5, 1),
--   (1, 7, 1, 6, 1),
--   (1, 7, 1, 7, 1),
--   (1, 7, 1, 8, 1),
--   (1, 7, 1, 9, 1),

--   (1, 8, 2, 1, 1),
--   (1, 8, 2, 2, 1),
--   (1, 8, 2, 3, 1),
--   (1, 8, 2, 4, 1),
--   (1, 8, 2, 5, 1),
--   (1, 8, 2, 6, 1),
--   (1, 8, 2, 7, 1),
--   (1, 8, 2, 8, 1),
--   (1, 8, 2, 9, 1),


--   (1, 9, 3, 1, 1),
--   (1, 9, 3, 2, 1),
--   (1, 9, 3, 3, 1),
--   (1, 9, 3, 4, 1),
--   (1, 9, 3, 5, 1),
--   (1, 9, 3, 6, 1),
--   (1, 9, 3, 7, 1),
--   (1, 9, 3, 8, 1),
--   (1, 9, 3, 9, 1),









--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 1, 2, 1, 1),
--   (1, 1, 2, 2, 1),
--   (1, 1, 2, 3, 1),
--   (1, 1, 2, 4, 1),
--   (1, 1, 2, 5, 1),
--   (1, 1, 2, 6, 1),
--   (1, 1, 2, 7, 1),
--   (1, 1, 2, 8, 1),
--   (1, 1, 2, 9, 1),


--   (1, 1, 3, 1, 1),
--   (1, 1, 3, 2, 1),
--   (1, 1, 3, 3, 1),
--   (1, 1, 3, 4, 1),
--   (1, 1, 3, 5, 1),
--   (1, 1, 3, 6, 1),
--   (1, 1, 3, 7, 1),
--   (1, 1, 3, 8, 1),
--   (1, 1, 3, 9, 1),



--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 2, 2, 1, 1),
--   (1, 2, 2, 2, 1),
--   (1, 2, 2, 3, 1),
--   (1, 2, 2, 4, 1),
--   (1, 2, 2, 5, 1),
--   (1, 2, 2, 6, 1),
--   (1, 2, 2, 7, 1),
--   (1, 2, 2, 8, 1),
--   (1, 2, 2, 9, 1),


--   (1, 3, 3, 1, 1),
--   (1, 3, 3, 2, 1),
--   (1, 3, 3, 3, 1),
--   (1, 3, 3, 4, 1),
--   (1, 3, 3, 5, 1),
--   (1, 3, 3, 6, 1),
--   (1, 3, 3, 7, 1),
--   (1, 3, 3, 8, 1),
--   (1, 3, 3, 9, 1),


--   (1, 4, 1, 1, 1),
--   (1, 4, 1, 2, 1),
--   (1, 4, 1, 3, 1),
--   (1, 4, 1, 4, 1),
--   (1, 4, 1, 5, 1),
--   (1, 4, 1, 6, 1),
--   (1, 4, 1, 7, 1),
--   (1, 4, 1, 8, 1),
--   (1, 4, 1, 9, 1),

--   (1, 5, 2, 1, 1),
--   (1, 5, 2, 2, 1),
--   (1, 5, 2, 3, 1),
--   (1, 5, 2, 4, 1),
--   (1, 5, 2, 5, 1),
--   (1, 5, 2, 6, 1),
--   (1, 5, 2, 7, 1),
--   (1, 5, 2, 8, 1),
--   (1, 5, 2, 9, 1),


--   (1, 6, 3, 1, 1),
--   (1, 6, 3, 2, 1),
--   (1, 6, 3, 3, 1),
--   (1, 6, 3, 4, 1),
--   (1, 6, 3, 5, 1),
--   (1, 6, 3, 6, 1),
--   (1, 6, 3, 7, 1),
--   (1, 6, 3, 8, 1),
--   (1, 6, 3, 9, 1),




--   (1, 7, 1, 1, 1),
--   (1, 7, 1, 2, 1),
--   (1, 7, 1, 3, 1),
--   (1, 7, 1, 4, 1),
--   (1, 7, 1, 5, 1),
--   (1, 7, 1, 6, 1),
--   (1, 7, 1, 7, 1),
--   (1, 7, 1, 8, 1),
--   (1, 7, 1, 9, 1),

--   (1, 8, 2, 1, 1),
--   (1, 8, 2, 2, 1),
--   (1, 8, 2, 3, 1),
--   (1, 8, 2, 4, 1),
--   (1, 8, 2, 5, 1),
--   (1, 8, 2, 6, 1),
--   (1, 8, 2, 7, 1),
--   (1, 8, 2, 8, 1),
--   (1, 8, 2, 9, 1),


--   (1, 9, 3, 1, 1),
--   (1, 9, 3, 2, 1),
--   (1, 9, 3, 3, 1),
--   (1, 9, 3, 4, 1),
--   (1, 9, 3, 5, 1),
--   (1, 9, 3, 6, 1),
--   (1, 9, 3, 7, 1),
--   (1, 9, 3, 8, 1),
--   (1, 9, 3, 9, 1),









--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 1, 2, 1, 1),
--   (1, 1, 2, 2, 1),
--   (1, 1, 2, 3, 1),
--   (1, 1, 2, 4, 1),
--   (1, 1, 2, 5, 1),
--   (1, 1, 2, 6, 1),
--   (1, 1, 2, 7, 1),
--   (1, 1, 2, 8, 1),
--   (1, 1, 2, 9, 1),


--   (1, 1, 3, 1, 1),
--   (1, 1, 3, 2, 1),
--   (1, 1, 3, 3, 1),
--   (1, 1, 3, 4, 1),
--   (1, 1, 3, 5, 1),
--   (1, 1, 3, 6, 1),
--   (1, 1, 3, 7, 1),
--   (1, 1, 3, 8, 1),
--   (1, 1, 3, 9, 1),



--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 2, 2, 1, 1),
--   (1, 2, 2, 2, 1),
--   (1, 2, 2, 3, 1),
--   (1, 2, 2, 4, 1),
--   (1, 2, 2, 5, 1),
--   (1, 2, 2, 6, 1),
--   (1, 2, 2, 7, 1),
--   (1, 2, 2, 8, 1),
--   (1, 2, 2, 9, 1),


--   (1, 3, 3, 1, 1),
--   (1, 3, 3, 2, 1),
--   (1, 3, 3, 3, 1),
--   (1, 3, 3, 4, 1),
--   (1, 3, 3, 5, 1),
--   (1, 3, 3, 6, 1),
--   (1, 3, 3, 7, 1),
--   (1, 3, 3, 8, 1),
--   (1, 3, 3, 9, 1),


--   (1, 4, 1, 1, 1),
--   (1, 4, 1, 2, 1),
--   (1, 4, 1, 3, 1),
--   (1, 4, 1, 4, 1),
--   (1, 4, 1, 5, 1),
--   (1, 4, 1, 6, 1),
--   (1, 4, 1, 7, 1),
--   (1, 4, 1, 8, 1),
--   (1, 4, 1, 9, 1),

--   (1, 5, 2, 1, 1),
--   (1, 5, 2, 2, 1),
--   (1, 5, 2, 3, 1),
--   (1, 5, 2, 4, 1),
--   (1, 5, 2, 5, 1),
--   (1, 5, 2, 6, 1),
--   (1, 5, 2, 7, 1),
--   (1, 5, 2, 8, 1),
--   (1, 5, 2, 9, 1),


--   (1, 6, 3, 1, 1),
--   (1, 6, 3, 2, 1),
--   (1, 6, 3, 3, 1),
--   (1, 6, 3, 4, 1),
--   (1, 6, 3, 5, 1),
--   (1, 6, 3, 6, 1),
--   (1, 6, 3, 7, 1),
--   (1, 6, 3, 8, 1),
--   (1, 6, 3, 9, 1),




--   (1, 7, 1, 1, 1),
--   (1, 7, 1, 2, 1),
--   (1, 7, 1, 3, 1),
--   (1, 7, 1, 4, 1),
--   (1, 7, 1, 5, 1),
--   (1, 7, 1, 6, 1),
--   (1, 7, 1, 7, 1),
--   (1, 7, 1, 8, 1),
--   (1, 7, 1, 9, 1),

--   (1, 8, 2, 1, 1),
--   (1, 8, 2, 2, 1),
--   (1, 8, 2, 3, 1),
--   (1, 8, 2, 4, 1),
--   (1, 8, 2, 5, 1),
--   (1, 8, 2, 6, 1),
--   (1, 8, 2, 7, 1),
--   (1, 8, 2, 8, 1),
--   (1, 8, 2, 9, 1),


--   (1, 9, 3, 1, 1),
--   (1, 9, 3, 2, 1),
--   (1, 9, 3, 3, 1),
--   (1, 9, 3, 4, 1),
--   (1, 9, 3, 5, 1),
--   (1, 9, 3, 6, 1),
--   (1, 9, 3, 7, 1),
--   (1, 9, 3, 8, 1),
--   (1, 9, 3, 9, 1),







--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 1, 2, 1, 1),
--   (1, 1, 2, 2, 1),
--   (1, 1, 2, 3, 1),
--   (1, 1, 2, 4, 1),
--   (1, 1, 2, 5, 1),
--   (1, 1, 2, 6, 1),
--   (1, 1, 2, 7, 1),
--   (1, 1, 2, 8, 1),
--   (1, 1, 2, 9, 1),


--   (1, 1, 3, 1, 1),
--   (1, 1, 3, 2, 1),
--   (1, 1, 3, 3, 1),
--   (1, 1, 3, 4, 1),
--   (1, 1, 3, 5, 1),
--   (1, 1, 3, 6, 1),
--   (1, 1, 3, 7, 1),
--   (1, 1, 3, 8, 1),
--   (1, 1, 3, 9, 1),




--   (1, 1, 1, 1, 1),
--   (1, 1, 1, 2, 1),
--   (1, 1, 1, 3, 1),
--   (1, 1, 1, 4, 1),
--   (1, 1, 1, 5, 1),
--   (1, 1, 1, 6, 1),
--   (1, 1, 1, 7, 1),
--   (1, 1, 1, 8, 1),
--   (1, 1, 1, 9, 1),

--   (1, 2, 2, 1, 1),
--   (1, 2, 2, 2, 1),
--   (1, 2, 2, 3, 1),
--   (1, 2, 2, 4, 1),
--   (1, 2, 2, 5, 1),
--   (1, 2, 2, 6, 1),
--   (1, 2, 2, 7, 1),
--   (1, 2, 2, 8, 1),
--   (1, 2, 2, 9, 1),


--   (1, 3, 3, 1, 1),
--   (1, 3, 3, 2, 1),
--   (1, 3, 3, 3, 1),
--   (1, 3, 3, 4, 1),
--   (1, 3, 3, 5, 1),
--   (1, 3, 3, 6, 1),
--   (1, 3, 3, 7, 1),
--   (1, 3, 3, 8, 1),
--   (1, 3, 3, 9, 1),


--   (1, 4, 1, 1, 1),
--   (1, 4, 1, 2, 1),
--   (1, 4, 1, 3, 1),
--   (1, 4, 1, 4, 1),
--   (1, 4, 1, 5, 1),
--   (1, 4, 1, 6, 1),
--   (1, 4, 1, 7, 1),
--   (1, 4, 1, 8, 1),
--   (1, 4, 1, 9, 1),

--   (1, 5, 2, 1, 1),
--   (1, 5, 2, 2, 1),
--   (1, 5, 2, 3, 1),
--   (1, 5, 2, 4, 1),
--   (1, 5, 2, 5, 1),
--   (1, 5, 2, 6, 1),
--   (1, 5, 2, 7, 1),
--   (1, 5, 2, 8, 1),
--   (1, 5, 2, 9, 1),


--   (1, 6, 3, 1, 1),
--   (1, 6, 3, 2, 1),
--   (1, 6, 3, 3, 1),
--   (1, 6, 3, 4, 1),
--   (1, 6, 3, 5, 1),
--   (1, 6, 3, 6, 1),
--   (1, 6, 3, 7, 1),
--   (1, 6, 3, 8, 1),
--   (1, 6, 3, 9, 1),




--   (1, 7, 1, 1, 1),
--   (1, 7, 1, 2, 1),
--   (1, 7, 1, 3, 1),
--   (1, 7, 1, 4, 1),
--   (1, 7, 1, 5, 1),
--   (1, 7, 1, 6, 1),
--   (1, 7, 1, 7, 1),
--   (1, 7, 1, 8, 1),
--   (1, 7, 1, 9, 1),

--   (1, 8, 2, 1, 1),
--   (1, 8, 2, 2, 1),
--   (1, 8, 2, 3, 1),
--   (1, 8, 2, 4, 1),
--   (1, 8, 2, 5, 1),
--   (1, 8, 2, 6, 1),
--   (1, 8, 2, 7, 1),
--   (1, 8, 2, 8, 1),
--   (1, 8, 2, 9, 1),


--   (1, 9, 3, 1, 1),
--   (1, 9, 3, 2, 1),
--   (1, 9, 3, 3, 1),
--   (1, 9, 3, 4, 1),
--   (1, 9, 3, 5, 1),
--   (1, 9, 3, 6, 1),
--   (1, 9, 3, 7, 1),
--   (1, 9, 3, 8, 1),
--   (1, 9, 3, 9, 1);


