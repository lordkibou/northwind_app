// ----------------------------------------------------------------------------
//
//            cargarProductos() <--
//         <--
// Lista<JSON{ProductID:Natural, ProductName:Texto, CategoryName:Texto, Unit:Texto,Price:Real}>
// ----------------------------------------------------------------------------

module.exports = async function cargarProductos() {

    var textoSQL = `SELECT Products.ProductID, Products.ProductName, Categories.CategoryName, Products.Unit, Products.Price
    FROM Products
    JOIN Categories ON Products.CategoryID = Categories.CategoryID;    
    `;

    return new Promise( (resolver, rechazar) => {
        cargarProductos.conexion.all( textoSQL,
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