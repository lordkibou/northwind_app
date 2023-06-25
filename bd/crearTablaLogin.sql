CREATE TABLE login (
    CustomerID INTEGER PRIMARY KEY,
    password TEXT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
);