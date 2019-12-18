class Numero {
    numerosUsuario: number[] = [];

    adicionarElemento(valor: number) {
        this.numerosUsuario.push(valor)
    }

    soma() {
        let total = 0;
        
        for (let a = 0; a < this.numerosUsuario.length; a++){
            if (this.numerosUsuario[a] < 40) {
                total += this.numerosUsuario[a]
            }
        }
        return total
    }
    
}

let roda = new Numero;
for (let b = 0; b < 10; b++){
    let num = Number(prompt("Digite os numeros"))
    roda.adicionarElemento(num);
}

alert(roda.soma());