function CalculoCuotaMensual(nombre, prestamo, n, i){
    const p = parseFloat(prestamo);
    const meses = parseInt(n);
    const interes = parseFloat(i);
    const factor = math.pow(1 + interes, meses);
    const numerador = interes * factor;
    const denominador = factor - 1;
    const cuotaMensual = p * (numerador / denominador);
    const porcentajeInteres = (interes * 100).toFixed(0);
    const texto = `${nombre} - $${cuotaMensual.toFixed(2)} - ${porcentajeInteres}% de interés - ${meses} meses`;

    return {
        cuotaMensual: cuotaMensual.toFixed(2),
        mensaje : texto
    }
}

module.exports = CalculoCuotaMensual;