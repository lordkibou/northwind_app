// ----------------------------------------------------------------------------
// SE LLAMA INSTANTANEAMENTE DESPUES DE QUE SE PAGE UN PEDIDO, PARA SIEMPRE TENER UNO ABIERTO
//
//                  JSON{CustomerID:Natural}-->
//                                             crearPedido() -->
//
// ----------------------------------------------------------------------------

module.exports =  async function crearPedido() {

    // tengo "inyectada" también xxx.logica para poder llamar a funciones "hermanas"
    //         this.logica.funciones.loQueSea.f()

    var textoSQL =
        `INSERT INTO Orders (CustomerID, OrderDate)
        VALUES ($CustomerID, NULL);`

        var valoresParaSQL = { $CustomerID: datos.CustomerID }

    return new Promise( (resolver, rechazar) => {
        crearPedido.conexion.run( textoSQL, valoresParaSQL ,function( err ) {
            ( err ? rechazar(err) : resolver() )
        })
    })

} // ()



// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

