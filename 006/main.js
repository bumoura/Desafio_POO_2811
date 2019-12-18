class Numeros {
    _numerosArray = []

    addNumberArray(valor) {
        this._numerosArray.push(valor)
    }

    varifica(valor) {
       if (this._numerosArray.indexOf(valor) == -1){
           return 'Não existe';
       }else {
           let index = this._numerosArray.indexOf(valor)
           return `Existe e está na posição ${index} e tem o valor ${this._numerosArray[index]}`;
       }
    }
 
}

let num = new Numeros;

for(let i = 0; i < 10; i++) {
    const numeros = Number(prompt('Digite um valor: '));
    num.addNumberArray(numeros);
}

const num2 = Number(prompt('Digite o numero que deseja consultar'))

document.write(num.varifica(num2));