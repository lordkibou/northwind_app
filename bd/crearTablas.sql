create table Customers (
    CustomerID char(9) not null,
    CustomerName varchar(20) not null,
    ContactName varchar(20) not null,
    primary key (CustomerID)
);

/* ---------------------------------------- */

create table Orders (
    OrderId char(9) not null,
    CustomerID char(9) not null,
    OrderDate varchar(10) not null,
    primary key(OrderId),
    foreign key(CustomerID) references Customers
);

/* ---------------------------------------- */

create table OrderDetails (
    OrderDetailsID char(9) not null,
    OrderId char(9) not null,
    ProductId char(9) not null,
    Quantity char(6) not null,
    primary key(OrderDetailsID),
    foreign key(OrderId) references Orders,
    foreign key(ProductId) references Products
);

/* ---------------------------------------- */

create table Products (
    ProductID char(9) not null,
    ProductName varchar(80) not null,
    CategoryID char(40) not null,
    Unit varchar(9) not null,
    Price char(9) not null,
    primary key (ProductID),
    foreign key(CategoryID) references Categories
);

/* ---------------------------------------- */

create table Categories (
    CategoryID char(9) not null,
    CategoryName varchar(80) not null,
    Description varchar(190) not null,
    primary key(CategoryID)
);

