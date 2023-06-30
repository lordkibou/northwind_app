// ----------------------------------------------------------------------------
//   JSON{ContactName:Texto, password:Texto}-->
//                              login() <--
//         <--
// {CustomerID:Natural}
// (Devuelve -1 si el usuario o contraseña es incorrecta)
// ----------------------------------------------------------------------------

module.exports = async function login(datos) {
  //console.log(datos);
  var textoSQL =
    "select login.password, Customers.CustomerID as CustomerID from login, Customers where Customers.ContactName=$ContactName and Customers.CustomerID=login.CustomerID";
  var valoresParaSQL = {
    $ContactName: datos.ContactName,
  };
  return new Promise((resolver, rechazar) => {
    login.conexion.all(textoSQL, valoresParaSQL, (err, res) => {
      if (err) {
        rechazar(err);
      } else {
        //console.log("Resultado" + res);
        //console.log(logindata.password)
        if (res[0] === undefined) {
          resolver([{ CustomerID: -1 }]);
        } else if (res[0].password === datos.password) {
          resolver([{ CustomerID: res[0].CustomerID }]);
        } else {
          resolver([{ CustomerID: -1 }]);
          //console.log("El usuario o contraseña contraseña son incorrectos");
        }
      }
    });
  });
}; // ()

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
