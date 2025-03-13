function subtrai(a,b){
    return a-b
}

function ehPar(n){
    if(n% 2 ===0){
        return(`O número ${n} é par`)
    } else if (n%2!= 0 ){
        return(`O número ${n} não é par`)
    }
}

function contarCaracteres(texto){
    return(`A string ${texto} possui ${texto.length} caracteres`)
}

module.exports = {subtrai, ehPar, contarCaracteres}