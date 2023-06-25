// ----------------------------------------------------------------------------
//Simulamos pago, le ponemos fecha, significa que fue pagado en esa fecha, el unico pedido sin fecha es el actual
//   JSON{OrderDate:Timestamp}-->
//                                              pagarPedido() --->
// ----------------------------------------------------------------------------

module.exports =  async function pagarPedido( datos ) {

    // tengo "inyectada" también xxx.logica para poder llamar a funciones "hermanas"
    //         this.logica.funciones.loQueSea.f()

    var textoSQL =
        `UPDATE Orders
        SET OrderDate = $OrderDate
        ORDER BY OrderId DESC
        LIMIT 1;`
    var valoresParaSQL = {$OrderDate: datos.OrderDate}

    return new Promise( (resolver, rechazar) => {
        pagarPedido.conexion.run( textoSQL, valoresParaSQL, function( err ) {
            ( err ? rechazar(err) : resolver() )
        })
    })

} // ()
