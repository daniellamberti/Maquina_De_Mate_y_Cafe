
    alert("Bienvenido a la máquina de bebidas!");
    let continuar = true;

let mate = 3;
let cafe = 2;
let monto;
let monto1;

    do {
        let opcion = Number(prompt("MENU\nIngresá 1 para mate\nIngresá 2 para cafe \nIngresá 3 para salir"))
        if (opcion == 1){
            alert("Elegiste la opcion mate. \nAguarda unos instantes mientras lo preparamos");
            monto = parseInt(prompt("Ha seleccionado Mate, el precio es de " + mate + " pesos. La maquina solo acepta billetes de 1, 2, 5 o 10 pesos. Que monto ingresara?"));

            while((monto !== 1) && (monto !== 2) && (monto !== 5) && (monto !== 10)) {
            alert("El pago debe utilizar billetes de correcta denominacion");
            monto = parseInt(prompt("Ingrese nuevamente su pago"));
            }


            while(monto < mate) {
            alert("El pago ingresado es menor al valor del producto");
            monto = parseInt(prompt("Ha seleccionado Mate, el precio es de " + mate + " pesos. Que monto ingresara?"));
            continue;
            }

            if(monto == mate) {
            alert("Gracias por su compra, aqui tiene su bebida");
            }


            else if (monto > mate) {
            alert("Ha pagado " + monto + " pesos. Aqui tiene su vuelto de " + (monto - mate) + " pesos, retire su bebida");
            }

        }

        else if(opcion == 2){

            alert(`Elegiste la opcion café. \nAguarda unos instantes mientras lo preparamos`);
            // Acá va el codigo correspondiente para cobrar el valor correspondiente a este producto y deás procesos que tienenque ver con la elección del cliente
            monto1 = parseInt(prompt("Ha seleccionado Cafe, el precio es " + cafe + " pesos. Que monto ingresara?"));


            while((monto1 !== 1) && (monto1 !== 2) && (monto1 !== 5) && (monto1 !== 10)) {
            alert("El pago debe utilizar billetes de correcta denominacion");
            monto1 = parseInt(prompt("Ingrese nuevamente su pago"));
            }

            while(monto1 < cafe) {
            alert("El pago ingresado es menor al valor del producto");
            monto1 = parseInt(prompt("Ha seleccionado Cafe, el precio es de " + cafe + " pesos. Que monto ingresara?"));
            continue;
            }

            if(monto1 == cafe) {
            alert("Gracias por su compra, aqui tiene su bebida");
            }

            else if (monto1 > cafe) {
            alert("Ha pagado " + monto1 + " pesos. Aqui tiene su vuelto de " + (monto1 - cafe) + " pesos, retire su bebida");
            }
        }

        else if(opcion == 3) {
            alert("Has decidido SALIR, hasta la vista!")
            break;
        }

    }
    while (continuar);
