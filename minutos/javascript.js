//! una aplicacion para determinar el numero de minutos que se pueden consumir con determinado saldo
//1 min $80
//2 - 10 min $60
// 11 > min $40

function calcularMinutos() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    let minutos = 0;

    if (saldo > 0) {
        if (saldo < 80) {
            document.getElementById("resultado").innerText = "Saldo insuficiente para realizar una llamada.";
            document.getElementById("saldoRestante").innerText = "Saldo restante: $" + saldo.toFixed(2);
            return;
        }

        // Calculamos minutos para la tarifa de 80
        if(saldo >= 80 && saldo < 120){
            
            while (saldo >= 80) {
                saldo -= 80;
                minutos += 1;
            }
        } else if(saldo >= 120 && saldo <= 600 && minutos <11){
            // Calculamos minutos para la tarifa de 60
            while (saldo >= 60) {
                saldo -= 60;
                minutos += 1;
            }
        }else{
            //Calculamos minutos para la tarifa de 40
            while (saldo >= 440) {
                saldo -= 40;
                minutos += 1;
            }
        }
    }

    document.getElementById("resultado").innerText = "Puede consumir " + minutos + " minutos con su saldo.";
    document.getElementById("saldoRestante").innerText = "Saldo restante: $" + saldo.toFixed(2);
}