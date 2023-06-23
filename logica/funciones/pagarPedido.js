// ----------------------------------------------------------------------------
//   JSON{OrderID:Natural,OrderDate:Timestamp}-->
//                                              pagarPedido() --->
// ----------------------------------------------------------------------------

module.exports =  async function pagarPedido( datos ) {

    // tengo "inyectada" también xxx.logica para poder llamar a funciones "hermanas"
    //         this.logica.funciones.loQueSea.f()

    var textoSQL =
        "INSERT INTO Order;"
    var valoresParaSQL = { $CustomerID: datos.OrderID,$OrderDate: datos.OrderDate}

    return new Promise( (resolver, rechazar) => {
        pagarPedido.conexion.run( textoSQL, valoresParaSQL, function( err ) {
            ( err ? rechazar(err) : resolver() )
        })
    })

} // ()
