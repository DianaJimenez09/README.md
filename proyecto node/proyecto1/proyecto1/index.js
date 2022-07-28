function suma(num1,num2,num3=0){
    let resultado = num1 + num2 + num3;
    return resultado;
};

function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
};

function producto(num1,num2){
    let resultado = num1 * num2;
    return resultado;
};

function division(num1,num2){
    let resultado = num1 / num2;
    return resultado;
};


//////////////
///PARTE NUEVA
//////////////

let sum = 0
function cuadrado(n1){
    let resultado = n1 * n1

    return resultado
}
module.exports = {suma,resta,producto,division,cuadrado}