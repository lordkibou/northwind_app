// ----------------------------------------------------------------------------
//  SE GUARDA EN EL ULTIMO ORDER SI NO TIENE FECHA, SI TIENE FECHA PUES SE CREA UN NUEVO ORDER SIN FECHA AUN
//
//   JSON{CustomerID:Natural,ProductID:Natural,Quantity:Natural}-->
//                                                          guardarProductoEnPedido() -->
// ----------------------------------------------------------------------------

module.exports = async function guardarProductoEnPedido(datos) {
  // tengo "inyectada" también xxx.logica para poder llamar a funciones "hermanas"
  //         this.logica.funciones.loQueSea.f()

  var textoSQL = `INSERT INTO OrderDetails (OrderId, ProductId, Quantity)
  VALUES ((SELECT OrderId FROM Orders WHERE CustomerID = $CustomerID ORDER BY OrderId DESC LIMIT 1), $ProductID, $Quantity);
  
  `;
  var valoresParaSQL = {
    $CustomerID: datos.CustomerID,
    $ProductID: datos.ProductID,
    $Quantity: datos.Quantity,
  };

  return new Promise((resolver, rechazar) => {
    guardarProductoEnPedido.conexion.run(
      textoSQL,
      valoresParaSQL,
      function (err) {
        err ? rechazar(err) : resolver();
      }
    );
  });
}; // ()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
