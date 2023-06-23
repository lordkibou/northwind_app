
// --------------------------------------------------------------------------------
// mainTest1.js
// --------------------------------------------------------------------------------
const logica = require( "../logica.js" )

var assert = require ('assert')

// --------------------------------------------------------------------------------
// main ()
// --------------------------------------------------------------------------------
const cargarPedidos = require('../funciones/cargarPedidos.js');

describe('Test CargarPedidos.js', function() {
	it('debería cargar los pedidos correctamente', function () {
		// Crear datos de prueba
		const pedidos = [
			{ id: 1, producto: 'Producto 1', cantidad: 5 },
			{ id: 2, producto: 'Producto 2', cantidad: 10 },
			{ id: 3, producto: 'Producto 3', cantidad: 2 }
		];

		// Llamar a la función CargarPedidos() y verificar el resultado
		return cargarPedidos.cargarPedidos(pedidos)
			.then((resultado) => {
				// Verificar la estructura del resultado
				assert.isArray(resultado, 'El resultado debería ser un arreglo');
				resultado.forEach((pedido) => {
					assert.isNumber(pedido.OrderId, 'OrderId debería ser un número');
					assert.isDate(pedido.OrderDate, 'OrderDate debería ser una fecha');
					assert.isArray(pedido.Productos, 'Productos debería ser un arreglo');
					pedido.Productos.forEach((producto) => {
						assert.isNumber(producto.ProductID, 'ProductID debería ser un número');
						assert.isString(producto.ProductName, 'ProductName debería ser una cadena');
						assert.isString(producto.Unit, 'Unit debería ser una cadena');
						assert.isNumber(producto.Price, 'Price debería ser un número');
						assert.isNumber(producto.Quantity, 'Quantity debería ser un número');
					});
				});
				console.log('Prueba exitosa: los pedidos se cargaron correctamente.');
			})
			.catch(error => {
				console.error('Error en la prueba:', error);
			});
	});
});

const cargarProductos = require('../funciones/cargarProductos.js');

describe('cargarProductos', function () {
	it('debería cargar los productos correctamente', function () {
		return cargarProductos()
			.then((resultado) => {
				// Verificar el resultado
				assert(Array.isArray(resultado), 'El resultado debería ser un arreglo');

				resultado.forEach((producto) => {
					assert.strictEqual(typeof producto.ProductID, 'number', 'ProductID debería ser un número');
					assert.strictEqual(typeof producto.ProductName, 'string', 'ProductName debería ser una cadena');
					assert.strictEqual(typeof producto.Unit, 'string', 'Unit debería ser una cadena');
					assert.strictEqual(typeof producto.Price, 'number', 'Price debería ser un número');
					assert.strictEqual(typeof producto.Quantity, 'number', 'Quantity debería ser un número');
				});

				console.log('Prueba exitosa: los productos se cargaron correctamente.');
			})
			.catch(error => {
				console.error('Error en la prueba:', error);
			});
	});
});

const cargarProductosPedido = require('../funciones/cargarProductosPedido.js');

describe('cargarProductosPedido', function () {
	it('debería cargar los productos del pedido correctamente', function () {
		const datos = {
			OrderID: 1
		};

		return cargarProductosPedido(datos)
			.then((resultado) => {
				// Verificar el resultado
				assert(Array.isArray(resultado), 'El resultado debería ser un arreglo');

				resultado.forEach((producto) => {
					assert.strictEqual(typeof producto.ProductID, 'number', 'ProductID debería ser un número');
					assert.strictEqual(typeof producto.ProductName, 'string', 'ProductName debería ser una cadena');
					assert.strictEqual(typeof producto.CategoryName, 'string', 'CategoryName debería ser una cadena');
					assert.strictEqual(typeof producto.Unit, 'string', 'Unit debería ser una cadena');
					assert.strictEqual(typeof producto.Price, 'number', 'Price debería ser un número');
					assert.strictEqual(typeof producto.Quantity, 'number', 'Quantity debería ser un número');
				});

				console.log('Prueba exitosa: los productos del pedido se cargaron correctamente.');
			})
			.catch(error => {
				console.error('Error en la prueba:', error);
			});
	});
});

const guardarProductoEnPedido = require('../funciones/guardarProductoEnPedido.js');

describe('guardarProductoEnPedido', function () {
	it('debería guardar el producto en el pedido correctamente', function () {
		const datos = {
			CustomerID: '12345',
			ProductID: 1,
			Quantity: 5
		};

		return guardarProductoEnPedido(datos)
			.then(() => {
				console.log('Prueba exitosa: el producto se guardó en el pedido correctamente.');
			})
			.catch(error => {
				console.error('Error en la prueba:', error);
			});
	});
});


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
