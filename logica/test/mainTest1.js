// --------------------------------------------------------------------------------
// mainTest1.js
// --------------------------------------------------------------------------------
const assert = require("assert");

const logica = require("../logica.js");

// --------------------------------------------------------------------------------
// Tests ()
// --------------------------------------------------------------------------------

describe("Test para las funciones de la logica", () => {
    var laLogica = null;

  it("cargo la lógica abriendo conexión ", async function () {
    laLogica = await logica("../bd/datos.bd");
  }); //fin del test concreto

    it("prueba para cargarDetallesPedido()", () => {
        return laLogica
            .llamar("cargarDetallesPedido.js", { OrderId: 10 })
            .then((resultado) => {
                assert.equal(resultado[0].ProductName, "Platanos", "no es el resultado esperado?");
            })
            .catch((error) => {
                //console.error("Error en cargarDetallesPedido():", error);
                assert.fail(error);
            });
    }); //fin del test concreto

  it("prueba para cargarPedidos()", () => {
    return laLogica
      .llamar("cargarPedidos.js", { CustomerID: 2 })
      .then((resultado) => {
        assert.equal(resultado[0].OrderId, 8, "no es el resultado esperado?");
      })
      .catch((error) => {
        //console.error("Error en cargarPedidos():", error);
        assert.fail(error);
      });
  }); //fin del test concreto

  it("prueba para cargarProductos()", () => {
    return laLogica
      .llamar("cargarProductos.js")
      .then((resultado) => {
        assert.equal(resultado[0].ProductName, "Platanos", "No es platanos?");
        assert.equal(resultado[0].Price, 2.2, "No es el precio esperado?");
        assert.equal(resultado[2].Unit, "ml", "No es mililitros?");
      })
      .catch((error) => {
        //console.error("Error en cargarProductos():", error);
        assert.fail(error);
      });
  }); //fin del test concreto

  it("prueba para cargarProductosCategoria()", () => {
    return laLogica
      .llamar("cargarProductosCategoria.js", { CategoryID: 2 })
      .then((resultado) => {
        assert.equal(resultado[0].ProductName, "Libreta", "No es libreta?");
        assert.equal(
          resultado[0].CategoryName,
          "Papeleria",
          "No es categoria papeleria?"
        );
      })
      .catch((error) => {
        //console.error("Error en cargarProductosCategoria():", error);
        assert.fail(error);
      });
  }); //fin del test concreto

  it("prueba para cargarProductosPedido()", () => {
    return laLogica
      .llamar("cargarProductosPedido.js", { CustomerID: 2 })
      .then((resultado) => {
          //console.log(resultado);
        assert.equal(resultado[0].ProductName, "Libreta", "No es lapiz?");
        assert.equal(resultado[0].Quantity, 6, "No es 2?");
      })
      .catch((error) => {
        //console.error("Error en cargarProductosPedido():", error);
        assert.fail(error);
      });
  }); //fin del test concreto

  it("prueba para login() correcta", () => {
    return laLogica
      .llamar("login.js", { ContactName: "Marta", password: "password1" })
      .then((resultado) => {
        //console.log("id" + resultado.CustomerID);
        assert.equal(resultado[0].CustomerID, 1, "No es 1?");
      })
      .catch((error) => {
        //console.error("Error en login():", error);
        assert.fail("Test failed due to promise rejection");
      });
  }); //fin del test concreto

  it("prueba para login() incorrecta", () => {
    return laLogica
      .llamar("login.js", { ContactName: "Marta" })
      .then((resultado) => {
        assert.equal(resultado[0].CustomerID, -1, "No es -1");
      })
      .catch((error) => {
        //console.error("Error en login():", error);
        assert.fail("Test failed due to promise rejection");
      });
  }); //fin del test concreto
}); //fin del describe

describe("Test para crearPedido(), guardarProductosEnPedido() y pagarPedido()", () => {
    var laLogica = null;

    it("cargo la lógica abriendo conexión ", async function () {
        laLogica = await logica("../bd/datos.bd");
    }); //fin del test concreto

    it("prueba para crearPedido()", () => {
        return crearPedido({ CustomerID: 1 })
            .then((resultado) => {
                return guardarProductoEnPedido()
                    .then((resultado) => {
                    })
                    .catch((error) => {
                        console.error("Error en guardarProductoEnPedido():", error);
                        assert.fail("Test failed due to promise rejection");
                    });
            })
            .catch(error => {
                console.error('Error en crearPedido():', error);
            });
    }) //fin del test concreto

    it("prueba para pagarPedido()", () => {
        return pagarPedido()
            .then((resultado) => {
            })
            .catch(error => {
                console.error('Error en pagarPedido():', error);
            });
    }) //fin del test concreto
})
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
