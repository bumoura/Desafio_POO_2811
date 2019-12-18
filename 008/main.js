class Valor {
	_vetor = [];

	constructor(valor1, valor2, valor3, valor4, valor5) {
		this._vetor.push(valor1);
		this._vetor.push(valor2);
		this._vetor.push(valor3);
		this._vetor.push(valor4);
		this._vetor.push(valor5);
	}


	addArray(valor) {
		this._vetor.push(valor);
		return this._vetor;
	}

	removeArray() {
		this._vetor.pop();
		return this._vetor;
	}
}

const teste = new Valor(1, 2, 3, 4, 5);

console.log(teste._vetor);
console.log(teste.addArray(6));
console.log(teste.addArray(7));
console.log(teste.removeArray());
