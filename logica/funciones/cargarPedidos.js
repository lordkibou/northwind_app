// ----------------------------------------------------------------------------
//   JSON{CustomerID:Natural}-->
//                              cargarPedidos() <--
//         <--
// Lista<JSON{OrderId:Natural, OrderDate:Timestamp,
//            Productos:  Lista<JSON{ProductID:Natural, ProductName:Texto,
//                        Unit:Texto,Price:Real, Quantity:Natural}>}>
// ----------------------------------------------------------------------------

async function cargarPedidos( datos ) {
//El problema puede ser par

    var textoSQL = `
        SELECT
            Orders.OrderId,
            Orders.OrderDate,
            Products.ProductID,
            Products.ProductName,
            Products.Unit,
            Products.Price,
            OrderDetails.Quantity
        FROM Orders
        JOIN OrderDetails ON Orders.OrderId = OrderDetails.OrderId
        JOIN Products ON OrderDetails.ProductId = Products.ProductID
        WHERE Orders.CustomerID = $CustomerID;`;
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