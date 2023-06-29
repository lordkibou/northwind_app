// ----------------------------------------------------------------------------
//   JSON{CustomerID:Natural}-->
//                              cargarPedidos() <--
//         <--
// Lista<JSON{OrderId:Natural, OrderDate:Timestamp>
// ----------------------------------------------------------------------------

module.exports = async function cargarPedidos(datos) {
  var textoSQL = `
  SELECT 
  Orders.OrderId,
  Orders.OrderDate,
  Products.ProductName,
  OrderDetails.Quantity,
  Products.Price * OrderDetails.Quantity AS TotalProductPrice
  FROM
    Orders
  INNER JOIN
    OrderDetails ON Orders.OrderId = OrderDetails.OrderId
  INNER JOIN
    Products ON OrderDetails.ProductId = Products.ProductID
  WHERE
    Orders.OrderId = $OrderId          -- Replace '?' with the specific OrderID
  ORDER BY
    Orders.OrderId, Orders.OrderDate;


    `;
  var valoresParaSQL = {
    //$CustomerID: datos.CustomerID,
    $OrderId: datos.OrderId
  };

  return new Promise((resolver, rechazar) => {
    cargarPedidos.conexion.all(textoSQL, valoresParaSQL, (err, res) => {
      err ? rechazar(err) : resolver(res);
    });
  });
}; // ()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
