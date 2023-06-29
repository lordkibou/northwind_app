// ----------------------------------------------------------------------------
//   JSON{CustomerID:Natural}-->
//                              cargarProductosPedido() <--
//         <--
// Lista<JSON{ProductID:Natural, ProductName:Texto, CategoryName:Texto,
//                       Unit:Texto, Price:Real, Quantity:Natural}>
// ----------------------------------------------------------------------------
module.exports = async function cargarProductosPedido(datos) {
  let textoSQL = `SELECT 
        P.ProductName, 
        OD.Quantity, 
        P.Price, 
        OD.Quantity * P.Price AS TotalPrice
    FROM 
        Orders AS O
    JOIN 
        OrderDetails AS OD ON O.OrderId = OD.OrderId
    JOIN 
        Products AS P ON OD.ProductId = P.ProductId
    WHERE 
        O.OrderId = (SELECT MAX(OrderId) FROM Orders WHERE CustomerID = $CustomerID)
    `;
  var valoresParaSQL = { $CustomerID: datos.CustomerID };

  return new Promise((resolver, rechazar) => {
    cargarProductosPedido.conexion.all(textoSQL, valoresParaSQL, (err, res) => {
      err ? rechazar(err) : resolver(res);
    });
  });
}; // ()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
