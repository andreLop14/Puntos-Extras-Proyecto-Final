var precio_base = 2000

// Porcentajes de recargo
var recargo_18 = 0.1 
var recargo_25 = 0.2 
var recargo_50 = 0.3 
var recargo_hijos = 0.2
var recargo_propiedad = 0.35 // 35% por propiedad
var recargo_salario = 0.05   // 5% sobre el salario

while (true) {
    var nombre = prompt("Ingrese su nombre, por favor (o escriba 'Salir' para terminar):")
    
    // Condición de salida
    if (nombre.toUpperCase() === "SALIR") {
        break;
    }

    var edad = prompt("¿Cuántos años tiene? Ingrese solamente números:")
    var edad_numero = parseInt(edad)

    if (edad_numero < 18) {
        alert("Lo sentimos, el asegurado debe ser mayor de edad para realizar la cotización.")
        continue; // Reinicia el ciclo
    }

    var recargo_total = 0

    // 1. Recargo por edad del Asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
        recargo_total += precio_base * recargo_18
    } else if (edad_numero >= 25 && edad_numero < 50) {
        recargo_total += precio_base * recargo_25
    } else if (edad_numero >= 50) {
        recargo_total += precio_base * recargo_50
    }

    // 2. Lógica para el Cónyuge
    var casado = prompt("¿Está casado/a actualmente? (SI/NO)").toUpperCase()
    if (casado === "SI") {
        var edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"))
        if (edad_conyuge >= 18 && edad_conyuge < 25) {
            recargo_total += precio_base * recargo_18
        } else if (edad_conyuge >= 25 && edad_conyuge < 50) {
            recargo_total += precio_base * recargo_25
        } else if (edad_conyuge >= 50) {
            recargo_total += precio_base * recargo_50
        }
    }

    // 3. Lógica para los Hijos
    var tiene_hijos = prompt("¿Tiene hijos o hijas? (SI/NO)").toUpperCase()
    if (tiene_hijos === "SI") {
        var cantidad_hijos = parseInt(prompt("¿Cuántos hijos/as tiene?"))
        recargo_total += (precio_base * recargo_hijos) * cantidad_hijos
    }

    // 4. NUEVO: Recargo por Propiedades
    var tiene_propiedades = prompt("¿Tiene propiedades? (SI/NO)").toUpperCase()
    if (tiene_propiedades === "SI") {
        var cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"))
        recargo_total += (precio_base * recargo_propiedad) * cantidad_propiedades
    }

    // 5. NUEVO: Recargo por Salario
    var salario = parseFloat(prompt("Ingrese su salario mensual:"))
    recargo_total += (salario * recargo_salario)

    // Cálculo Final
    var precio_final = precio_base + recargo_total

    alert("Resumen para: " + nombre)
    alert("Recargo total aplicado: Q." + recargo_total.toFixed(2))
    alert("El precio final de la póliza es: Q." + precio_final.toFixed(2))
}

alert("Gracias por usar el sistema de cotizaciones.")