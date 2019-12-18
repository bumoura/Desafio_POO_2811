class Valores {
    _valores = [];
    _maximo = 0

    constructor(valor){
        this._maximo = valor;
    }

    getParImpar(){
        if(this.getNumberMax() % 2 == 0){
            return 'Par'
        }else {
            return 'Ímpar'
        }
    }

    setNumberArray(valor) {
        this._valores.push(valor)
    }

    getNumberMax() {
        return Math.max(...this._valores);
    }
}

const num = Number(prompt(`Quantos números deseja escrever`));

const obj = new Valores(num);

for(let i = 1; i <= num; i++){
    const input = Number(prompt(`Digite o valor ${i}`));
    obj.setNumberArray(input);
}

document.write(`Maior número digitado foi ${obj.getNumberMax()} e esse número é ${obj.getParImpar()}`);


