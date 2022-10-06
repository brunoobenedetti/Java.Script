//primera enterga final//

let nombre = prompt ("Por favor, ingrese su nombre y apellido")
alert ("Bienvenido" + " " + nombre)

const mensaje = ("muchas garcias por su compra que lo difrutes")

let venta = prompt ("Que tipo de lampara desea? le mostramos la variedad de lampara  que disponemos, (valle, gota, raya,you, nudo) Para terminar coloque 'salir' ")
while (venta != "salir"){
    switch(venta){
        case "valle":
            let valle = prompt("la valle que tenemos disponibles son:(natural + negro/blanca o negro + negor/blanco)").toLowerCase()
            while(valle  == ""){
                vale = barprompt("la valle que tenemos disponibles son:(natural + negro/blanca o negro + negor/blanco)").toLowerCase()
            }
            alert (mensaje);
            break
        case "gota":
            let gota = prompt("la gota que tenemos dispinibles son(balca/negra(dali/comun)).").toLowerCase()
            while(gota == ""){
                gota =prompt("la gota que tenemos dispinibles son(balca/negra(dali/comun)).").toLowerCase()
            }
            alert (mensaje);
            break
        case "raya":
            let raya = prompt("las rayas que tenemos disponibles son:(negra/blanca) e enchapadas(gris tersio/petiribi).").toLowerCase()    
            while(raya ==""){
                raya =prompt("las rayas que tenemos disponibles son:(negra/blanca) e enchapadas(gris tersio/petiribi).").toLowerCase()
            }
            alert (mensaje);
            break
        case "you":
            let you = prompt("las you disponibles son:(L75/L40/ Y aplique los colores son negro e blanco)").toLowerCase()
            while(you == ""){
                you =prompt("las you disponibles son:(L75/L40/ Y aplique los colores son negro e blanco)").toLowerCase()
            }
            alert (mensaje);
            break
        case "nudo":
            let nudo =prompt("las nudo disponibles son:(marfil/grafito/tierra)").toLowerCase()
            while(nudo == ""){
                nudo =prompt("las nudo disponibles son:(marfil/grafito/tierra)").toLowerCase()
            }
            alert (mensaje);
            break
        default:
            alert("La lampara seleccionada no existe, recuerde que puede colocar 'salir' para finalizar")
            break
    }
    venta = prompt (" Que tipo de lampara desea? le mostramos la variedad de lampara  que disponemos, (valle, gota, raya,you, nudo) Para terminar coloque 'salir' ")
}
            alert ("Usted puede pagar una terapia de forma semestral en la cual recibira un descuento ya que, cada sesion tendra un valor de $1500 es decir un 30% menos del valor actual de la sesion")
            alert("El valor semestral actual es de $36000 y puede variar el costo con tarjetas de credito pudiendo ser financiadas en hasta 12 cuotas, de contado serian " + " " + cuota(36000,15,12))
function cuota (credito, interes, meses){
        let cuota = credito *(1 + interes/100)/meses
    return cuota
}
            console.log(calcInteres ("macro"))
function calcInteres (banco){
    switch(banco){
            case "bvva":
    return 25
        case "HSBC":
    return 23
            case "santander" :
    return 22
        default :
    return 0
    }
}
function mostrar (banco, credito, interes, cuota,meses){
    document.writ(`el credito del banco ${banco} es de ${credito} con un interes de ${interes} a pagar en cuotas de ${cuota} durante ${meses}`)
}