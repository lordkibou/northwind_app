// ----------------------------------------------------------------------------
//   JSON{CustomerID:Natural}-->
//                              cargarPedidos() <--
//         <--
// Lista<JSON{OrderId:Natural, OrderDate:Timestamp>
// ----------------------------------------------------------------------------

module.exports = async function cargarPedidos(datos) {
  //El problema puede ser par

  var textoSQL = `
    SELECT 
    Orders.OrderId,
    Orders.OrderDate,
    SUM(OrderDetails.Quantity * Products.Price) as TotalPrice
        FROM
            Orders
        INNER JOIN
            OrderDetails ON Orders.OrderId = OrderDetails.OrderId
        INNER JOIN
            Products ON OrderDetails.ProductId = Products.ProductID
        WHERE
            Orders.CustomerID = $CustomerID
        GROUP BY
    Orders.OrderId, Orders.OrderDate;

    `;
  var valoresParaSQL = { $CustomerID: datos.CustomerID };

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
