// ----------------------------------------------------------------------------
//   JSON{CustomerID:Natural}-->
//                              cargarPedidos() <--
//         <--
// Lista<JSON{OrderId:Natural, OrderDate:Timestamp>
// ----------------------------------------------------------------------------

async function cargarPedidos( datos ) {
//El problema puede ser par

    var textoSQL = `
    SELECT Orders.OrderId, Orders.OrderDate
    FROM Orders
    WHERE Orders.CustomerID = $CustomerID;
    `;
    var valoresParaSQL = { $CustomerID: datos.CustomerID }

    return new Promise( (resolver, rechazar) => {
        cargarPedidos.conexion.all( textoSQL, valoresParaSQL,
            ( err, res ) => {
                ( err ? rechazar(err) : resolver(res) )
            })
    })

} // ()

// Exportar la función CargarPedidos
module.exports = {
    cargarPedidos: cargarPedidos
};

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------