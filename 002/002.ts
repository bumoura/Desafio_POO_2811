class Numeros {

    numero: number[] = []

    contagem(valor1: number) {
        this.numero.push(valor1)
    }

    verificacao() {
        let totalPar = 0
        let totalImpar = 0
        for (let a = 0; a < this.numero.length; a++) {
            if (this.numero[a] % 2 == 0) {
               totalPar += 1
            } else {
                totalImpar += 1
            }
        }
        return ({
            par: totalPar,
            impar:totalImpar,
        })

    }

}

let alan = new Numeros()
for (let b= 0; b < 2; b++){
    let num = Number(prompt("Digite um valor"))
    alan.contagem(num);

}


let numeros = alan.verificacao();

alert('Par ' + numeros.par)
alert('Ímpar ' + numeros.impar)



