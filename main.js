/*
=============================================================================================================
                                Máquina de Café y Mate

            Escriba un programa que simule una máquina dispensadora de café y mate
            El mate cuesta 3 pesos
            EL café cuesta 2 pesos
            La máquina debe mostrar un menú, con los productos disponibles y los precios
            Igualmente, debe mostrar una opción de 'Salir'
            El menú debe repetirse siempre que el usuario no seleccione la opción de salir
            Una vez el usuario ha seleccionado el producto que quiere,
            el sistema debe pedir que ingrese un monto de dinero
            Si el usuario ingresa un monto mayor, el sistema debe mostrar el cambio entregado
            Si el usuario ingresa un monto menot, el sistema debe mostrar de nuevo la opción para ingresar dinero
            La máquina solo acepta dinero en denominaciones de:
            1,2, 5 y 10 pesos.

                        El sistema debe mostrar errores cuando:
                        * El usuario ingresa una opción no válida en el menú
                        * El usuario ingresa un monto no numérico
                        * El usuario ingresa un monto no aceptado por la máquina
=============================================================================================================
*/


                    // Se presenta la interfaz de la Maquina de Mate y Cafe al usuario

    alert("Bienvenido a la máquina de bebidas!");
    let continuar = true;

                                // Se declaran las variables a utilizar

let mate = 3;
let cafe = 2;
let monto;
let monto1;

    // Se presena el MENU con un "do" y queda en "loop" con el "while" hasta que el usuario selecciona SALIR

    do {
        let opcion = Number(prompt("MENU\nIngresá 1 para mate\nIngresá 2 para cafe \nIngresá 3 para salir"))
        if (opcion == 1){
            alert("Elegiste la opcion mate. \nAguarda unos instantes mientras lo preparamos");

            monto = parseInt(prompt("Ha seleccionado Mate, el precio es de " + mate + " pesos. La maquina solo acepta billetes de 1, 2, 5 o 10 pesos. Que monto ingresara?"));

            montoMenorBebida(monto,mate);  // Funcion que realiza todas las cuentas para esta opción de compra.

        }

        else if(opcion == 2){

            alert(`Elegiste la opcion café. \nAguarda unos instantes mientras lo preparamos`);

            monto1 = parseInt(prompt("Ha seleccionado Cafe, el precio es " + cafe + " pesos. Que monto ingresara?"));

            montoMenorBebida(monto1,cafe);  // Funcion que realiza todas las cuentas para esta opción de compra.

        }

        else if(opcion == 3) {
            alert("Has decidido SALIR, hasta la vista!")
            break;
        }

    }
    while (continuar);


                        /* =================    FUNCION  ================= */


    function montoMenorBebida(pago, precioBebida) {
        while((pago !== 1) && (pago !== 2) && (pago !== 5) && (pago !== 10)) {
            alert("El pago debe utilizar billetes de correcta denominacion");
            pago = parseInt(prompt("Ingrese nuevamente su pago"));
        }

        while(pago < precioBebida) {
            alert("El pago ingresado es menor al valor del producto");
            pago = parseInt(prompt("Ha seleccionado Mate, el precio es de " + precioBebida + " pesos. Que monto ingresara?"));
            continue;
            }

        if(pago == precioBebida) {
        alert("Gracias por su compra, aqui tiene su bebida");
        }

        else if (pago > precioBebida) {
            alert("Ha pagado " + pago + " pesos. Aqui tiene su vuelto de " + (pago - precioBebida) + " pesos, retire su bebida");
            }
        }
