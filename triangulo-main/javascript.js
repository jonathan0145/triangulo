function tipoT() {
    let lado1 = document.getElementById('la1').value;
    let lado2 = document.getElementById('la2').value;
    let lado3 = document.getElementById('la3').value;
    let tT= {
        lado : null,
        angulos : null,
        hipotenusa: null,
        determinandoRectangulo: function () {
            
            if (lado1 > lado2 && lado1 > lado3) {
                this.hipotenusa = lado1;
    
                if (this.rectangulo(lado2, lado3)) {
                    this.angulos = "Rectangulo";
                } else if(this.obtusangulo(lado2, lado3)) {
                    this.angulos = "Obtusangulo";
                }else{
                    this.angulos = "no entro";
                }
            } else if (lado2 > lado1 && lado2 > lado3) {
                this.hipotenusa = lado2;
    
                if (this.rectangulo(lado1, lado3)) {
                    this.angulos = "Rectangulo";
                } else if(this.obtusangulo(lado1, lado3)) {
                    this.angulos = "Obtusangulo";
                }else{
                    this.angulos = "no se sabe que tipo de triangulo";
                }
            } else{
                this.hipotenusa = lado3;
    
                if (this.rectangulo(lado1, lado2)) {
                    this.angulos = "Rectangulo";
                }
                else if(this.obtusangulo(lado1, lado2)) {
                    this.angulos = "Obtusangulo";
                }else{
                    this.angulos = "no se sabe que tipo de triangulo";
                }
            }
        },
        rectangulo: function(cateto1, cateto2){
            var catetos;
            catetos = parseInt(cateto1) + parseInt(cateto2);
            return Math.pow(this.hipotenusa,2) == Math.pow(catetos,2);
        },
        obtusangulo: function(cateto1, cateto2){
            var catetos1;
            catetos1 = parseInt(cateto1) + parseInt(cateto2);
            return Math.pow(this.hipotenusa,2) > Math.pow(catetos1,2);
        }
    };

    if(lado1 == 0 || lado1 == null || lado1 < 0 || lado2 == 0 || lado2 == null || lado2 < 0 ||
    lado3 == 0 || lado3 == null || lado3 < 0){
        tT.lado = "Con esas medidas no existe triangulos";
        tT.angulos = "Al no digitar valores, o al ser cero en uno de sus lados no se puede determinar el angulo";

    }else if (lado1 === lado2 && lado2 === lado3) {
        tT.lado = "EQUILÁTERO";
        tT.angulos = "ACUTÁNGULO";

    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tT.lado = "ISÓSCELES";
        if((lado1 < lado2 && lado1 < lado3) || (lado2 < lado1 && lado2 < lado3) || (lado3 < lado1 && lado3 < lado2)) tT.lado = "no hay hipotenusa para decir que es isosceles";
        tT.determinandoRectangulo();

    } else if(lado1 !== lado2 && lado2 !== lado3 ) {
        tT.lado = "ESCALENO";
        tT.determinandoRectangulo();
    }
    return tT;
}

function mostrarTipoTriangulo() {
    const tipo = tipoT();
    var mostrar = document.getElementById('resultado1').innerText = 'El triángulo es: ' + tipo.lado + " y por sus Angulos: " +  tipo.angulos;
    return mostrar;
}