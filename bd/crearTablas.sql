CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL,
    ContactName VARCHAR(50) NOT NULL
);

CREATE TABLE Orders (
    OrderId INTEGER PRIMARY KEY AUTOINCREMENT,
    CustomerID INTEGER,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
);

CREATE TABLE OrderDetails (
    OrderDetailsID INTEGER PRIMARY KEY AUTOINCREMENT,
    OrderId INTEGER,
    ProductId INTEGER,
    Quantity INTEGER,
    FOREIGN KEY (OrderId) REFERENCES Orders (OrderId),
    FOREIGN KEY (ProductId) REFERENCES Products (ProductId)
);

CREATE TABLE Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    CategoryID INTEGER,
    Unit VARCHAR(50) NOT NULL,
    Price REAL,
    FOREIGN KEY (CategoryID) REFERENCES Categories (CategoryID)
);

CREATE TABLE Categories (
    CategoryID INTEGER PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL,
    Description VARCHAR(100) NOT NULL
);

CREATE TABLE login (
    CustomerID INTEGER PRIMARY KEY,
    password TEXT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
);
