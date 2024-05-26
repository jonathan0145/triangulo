function tipoT() {
    let lado1 = document.getElementById('la1').value;
    let lado2 = document.getElementById('la2').value;
    let lado3 = document.getElementById('la3').value;
    let tT= {
        lado : null,
        angulos : null,
        hipotenusa: null,
        rectangulo: function(cateto1, cateto2){
            var catetos;
            catetos = parseInt(cateto1) + parseInt(cateto2);

            return Math.pow(tT.hipotenusa,2) == Math.pow(catetos,2);
        }
    };
    if(lado1 == 0 || lado1 == null || lado2 == 0 || lado2 == null ||
    lado3 == 0 || lado3 == null){

        tT = "Con esas longitudes no existe triangulos";

    }else if (lado1 === lado2 && lado2 === lado3) {

        tT.lado = "EQUILÁTERO";
        tT.angulos = "ACUTÁNGULO";

    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tT.lado = "ISÓSCELES";

        if (lado1 > lado2 && lado1 > lado3) {
            tT.hipotenusa = lado1;

            if (tT.rectangulo(lado2, lado3)) {
                tT.angulos = "Rectangulo";
            }
        } else if (lado2 > lado1 && lado2 > lado3) {
            tT.hipotenusa = lado2;
            tT.rectangulo(lado1, lado3);

            if (tT.rectangulo(lado1, lado3)) {
                tT.angulos = "Rectangulo";
            }
        } else {
            tT.hipotenusa = lado3;
            
            if (tT.rectangulo(lado1, lado2)) {
                tT.angulos = "Rectangulo";
            }
        }

    } else if(lado1 !== lado2 && lado2 !== lado3 ) {
        tT.angulos = "ESCALENO";
    } else{
        tT = "No digito valores"
    }
    return tT;
}

function mostrarTipoTriangulo() {
    const tipo = tipoT();
    var mostrar = document.getElementById('resultado1').innerText = 'El triángulo es: ' + tipo.lado + " y por sus Angulos: " +  tipo.angulos;

    return mostrar;
}