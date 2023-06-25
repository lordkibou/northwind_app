// ----------------------------------------------------------------------------
//   JSON{OrderID:Natural}-->
//                              cargarProductosPedido() <--
//         <--
// Lista<JSON{ProductID:Natural, ProductName:Texto, CategoryName:Texto,
//                       Unit:Texto, Price:Real, Quantity:Natural}>
// ----------------------------------------------------------------------------
module.exports = async function cargarProductosPedido( datos ) {

    let textoSQL =
        `SELECT
            Products.ProductID,
            Products.ProductName,
            Categories.CategoryName,
            Products.Unit,
            Products.Price,
            OrderDetails.Quantity
        FROM Products
        INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID
        INNER JOIN OrderDetails ON Products.ProductID = OrderDetails.ProductID
        INNER JOIN Orders ON OrderDetails.OrderID = Orders.OrderID
        WHERE Orders.OrderID = $OrderID;`;
    var valoresParaSQL = { $OrderID: datos.OrderID }


    return new Promise( (resolver, rechazar) => {
        cargarProductosPedido.conexion.all( textoSQL, valoresParaSQL,
            ( err, res ) => {
                ( err ? rechazar(err) : resolver(res) )
            })
    })

} // ()


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
