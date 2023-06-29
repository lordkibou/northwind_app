// ----------------------------------------------------------------------------
//Simulamos pago, le ponemos fecha, significa que fue pagado en esa fecha, el unico pedido sin fecha es el actual
//   JSON{CustomerID}-->
//                                              pagarPedido() --->
// ----------------------------------------------------------------------------

module.exports = async function pagarPedido(datos) {
  // tengo "inyectada" también xxx.logica para poder llamar a funciones "hermanas"
  //         this.logica.funciones.loQueSea.f()

  var textoSQL = `INSERT INTO Orders (CustomerID, OrderDate)
        VALUES ($CustomerID, date('now'));
        `;
  var valoresParaSQL = { $CustomerID: datos.CustomerID };

  return new Promise((resolver, rechazar) => {
    pagarPedido.conexion.run(textoSQL, valoresParaSQL, function (err) {
      err ? rechazar(err) : resolver();
    });
  });
}; // ()
