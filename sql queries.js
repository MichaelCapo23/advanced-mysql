SELECT p.ID AS `purchaseID`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`, i.`name` AS `itemName`,
    i.`price` AS `itemPrice`, i.`type` AS `itemType`, CONCAT(c.family_name, ', ', c.given_name) AS fullName, c.`email`

FROM `purchases` AS p
JOIN `items` AS i
ON p.`item_id` = i.`ID`
JOIN `customers`AS c
ON p.`customers_id` = c.`ID`

SELECT p.ID AS `purchaseID`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`
i.`name` AS `itemName`, i.`price` AS `itemPrice`, i.`type` AS `itemType`
FROM `purchases` AS p
JOIN `items` AS i
ON  p.`item_id` = i.`ID`


SELECT p.ID AS `purchaseID`, p.ID AS `curiousCy`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`,
    i.`name` AS `itemName`, i.`price` AS `itemPrice`, i.`type` AS `itemType`,
    CONCAT( c.family_name, ', ', c.given_name ) AS `fullName`, c.`email`
FROM `purchases` AS p
JOIN `items` AS i
ON  p.`item_id` = i.`ID`
JOIN `customers` AS c
ON p.`customers_id` = c.`ID`


SELECT p.ID AS `purchaseID`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`, p.added AS purchaseDate,
    i.`name` AS `itemName`, i.`price` AS `itemPrice`, i.`type` AS `itemType`,
    CONCAT( c.family_name, ', ', c.given_name ) AS `fullName`, c.`email`
FROM `purchases` AS p
LEFT JOIN `items` AS i
ON  p.`item_id` = i.`ID`
LEFT JOIN `customers` AS c
ON p.`customers_id` = c.`ID`
WHERE p.added > "2016-03-01 00:00:00" AND c.ID=4

SELECT COUNT(*) AS purchaseCount, CONCAT( YEAR(p.added),'-', MONTH(p.added)) AS purchaseMonth
FROM purchases AS p
GROUP BY YEAR(p.added), MONTH(p.added)

SELECT AVG(p.`price`) AS `totalPrice`,
    i.`type` AS `itemType`
FROM `purchases` AS p
LEFT JOIN `items` AS i
ON  p.`item_id` = i.`ID`
GROUP BY i.type

SELECT p.ID AS `purchaseID`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`, p.added AS purchaseDate,
    i.`name` AS `itemName`, i.`price` AS `itemPrice`, i.`type` AS `itemType`,
    CONCAT( c.family_name, ', ', c.given_name ) AS `fullName`, c.`email`
FROM `purchases` AS p
LEFT JOIN `items` AS i
ON  p.`item_id` = i.`ID`
LEFT JOIN `customers` AS c
ON p.`customers_id` = c.`ID`
LIMIT 3 OFFSET 7
ORDER BY totalPrice DESC LIMIT 7,3

SELECT p.ID AS `purchaseID`, p.`price` AS `totalPrice`, p.`item_count`, p.`status` AS `purchaseStatus`, p.added AS purchaseDate,
    i.`name` AS `itemName`, i.`price` AS `itemPrice`, i.`type` AS `itemType`,
    CONCAT( c.family_name, ', ', c.given_name ) AS `fullName`, c.`email`
FROM `purchases` AS p
LEFT JOIN `items` AS i
ON  p.`item_id` = i.`ID`
LEFT JOIN `customers` AS c
ON p.`customers_id` = c.`ID`
ORDER BY itemType ASC, totalPrice DESC