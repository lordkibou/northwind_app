/* Insertar personas */
insert into Customers values (000000001, 'Marta Sanchez', 'Marta');
insert into Customers values (000000002, 'Carmen Fernandez', 'Carmen');

/* Insertar pedidos */
insert into Orders values (001, 000000001, '26-02-2023');
insert into Orders values (002, 000000001, '23-04-2023');
insert into Orders values (003, 000000002, '13-01-2023');

/* Insertar orderDetails */
insert into OrderDetails values (0001, 001, 000001, 1);
insert into OrderDetails values (0002, 001, 000002, 3);
insert into OrderDetails values (0003, 002, 000004, 2);
insert into OrderDetails values (0004, 003, 000003, 1);

/* Insertar productos */
insert into Products values (000001, 'Platanos', 01, 'unidad', 2.2);
insert into Products values (000002, 'Libreta', 02, 'unidad', 5.09);
insert into Products values (000003, 'Cocacola', 01, 'ml', 1.9);
insert into Products values (000004, 'Lápiz', 02, 'unidad', 1.2);

/* Insertar categorias */
insert into Categories  values (01, 'Comida', 'Alimentación');
insert into Categories values (02, 'Papeleria', 'Papeleria y hogar');

/* Tenemos:
   Marta ha hehco dos pedidos:
    - El primero con un plátano y tres libreta
    - El segundo con dos lapices
   Carmen ha hecho un pedido con una cocacola
 */




