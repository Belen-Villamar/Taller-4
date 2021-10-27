function convertiroctal() { 
    var numeroctal = document.getElementById('octal').value;
    var numdecimal = parseInt(numeroctal, 8);
    alert("La respuesta es: " + numdecimal);
}
function calculadora() {
    var nota1 = parseInt(document.getElementById('not1').value);
    var nota2 = parseInt(document.getElementById('not2').value);
    for (i = 1; i <= 5; i++) {
        if (i == 1) { 
            suma = nota1 + nota2;
            alert("La suma de " + nota1 +  " + " +  nota2 + " es: " + suma);
        }
        if(i == 2) { 
            resta = nota1 - nota2;
            alert("La resta de " + nota1 +  " - " +  nota2 + " es: " + resta);

        }
        if (i== 3) { 
            producto = nota1 * nota2;
            alert("El producto de " + nota1 +  " x " +  nota2 + " es: " + producto);

        }
        
        if (i == 4) { 
            divi = nota1 / nota2;
            nota2 != 0 ?
                divi = nota1 / nota2:
                alert("No es posible dividir entre 0");
                alert("La división de " + nota1 +  " / " +  nota2 + " es: " + divi);

        }
    }
}