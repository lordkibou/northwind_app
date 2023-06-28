

/* Tenemos:
   Marta ha hehco dos pedidos:
    - El primero con un plátano y tres libreta
    - El segundo con dos lapices
   Carmen ha hecho un pedido con una cocacola
 */




/* Insert customers */
INSERT INTO Customers (CustomerID, CustomerName, ContactName) VALUES (1, 'Marta Sanchez', 'Marta');
INSERT INTO Customers (CustomerID, CustomerName, ContactName) VALUES (2, 'Carmen Fernandez', 'Carmen');

/* Insert orders */
INSERT INTO Orders (CustomerID, OrderDate) VALUES (2, '2023-01-13');
INSERT INTO Orders (CustomerID, OrderDate) VALUES (1, '2023-02-26');


/* Insert products */
INSERT INTO Products (ProductID, ProductName, CategoryID, Unit, Price) VALUES (1, 'Platanos', 1, 'unidad', 2.2);
INSERT INTO Products (ProductID, ProductName, CategoryID, Unit, Price) VALUES (2, 'Libreta', 2, 'unidad', 5.09);
INSERT INTO Products (ProductID, ProductName, CategoryID, Unit, Price) VALUES (3, 'Cocacola', 1, 'ml', 1.9);
INSERT INTO Products (ProductID, ProductName, CategoryID, Unit, Price) VALUES (4, 'Lápiz', 2, 'unidad', 1.2);

/* Insert categories */
INSERT INTO Categories (CategoryId, CategoryName, Description) VALUES (1, 'Comida', 'Alimentación');
INSERT INTO Categories (CategoryId, CategoryName, Description) VALUES (2, 'Papeleria', 'Papeleria y hogar');

/* Insert order details */
INSERT INTO OrderDetails (OrderId, ProductId, Quantity) VALUES (1, 1, 1);
INSERT INTO OrderDetails (OrderId, ProductId, Quantity) VALUES (1, 2, 3);
INSERT INTO OrderDetails (OrderId, ProductId, Quantity) VALUES (2, 4, 2);
INSERT INTO OrderDetails (OrderId, ProductId, Quantity) VALUES (3, 3, 1);

/* Insert login details */
INSERT INTO login (CustomerID, password) VALUES (1, 'password1');
INSERT INTO login (CustomerID, password) VALUES (2, 'password2');

