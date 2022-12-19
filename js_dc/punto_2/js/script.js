let energia_gen=window.prompt("Introduzca energia Generada (kW/h)");
let presupuesto=window.prompt("Introduzca presupuesto (usd)");
let tiempo_total=window.prompt("Introduzca tiempo de obra (mes)");
let efectividad=energia_gen/(presupuesto*tiempo_total);
console.log(efectividad);