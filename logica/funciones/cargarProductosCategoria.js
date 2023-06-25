// ----------------------------------------------------------------------------
//  JSON{CategoryID:Natural} -->
//                      cargarProductosCategoria() <--
//                  <--
// Lista<JSON{ProductID:Natural, ProductName:Texto, CategoryName:Texto, Unit:Texto,Price:Real}>
// ----------------------------------------------------------------------------

module.exports = async function cargarProductosCategoria( datos ) {

    var textoSQL = `SELECT Products.ProductID, Products.ProductName, Categories.CategoryName, Products.Unit, Products.Price
    FROM Products
    JOIN Categories ON Products.CategoryID = Categories.CategoryID
    WHERE Categories.CategoryID = $CategoryID; 
    `;

    var valoresParaSQL = { $CategoryID: datos.CategoryID }
    return new Promise( (resolver, rechazar) => {
        cargarProductosCategoria.conexion.all( textoSQL, valoresParaSQL,
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