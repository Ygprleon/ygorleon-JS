// Calculadora de descuentos
// Este algoritmo solicita al usuario el precio de un producto y el porcentaje de descuento a aplicar. Luego calcula el precio final con el descuento y muestra el resultado.
var precio = prompt("Ingresa el precio del producto:");

var descuento = prompt("Ingresa el porcentaje de descuento");

var precioFinal = precio - (precio * (descuento / 100));

alert("El precio final con descuento es de: " + precioFinal);

