class Notas {
    _notas = [];
    _medias = [];


    resetArray() {
        this._notas = []
    }

    setNota(valor) {
        this._notas.push(valor)
    }

    retornaMedia(){
        let media = 0

        for(let i = 0; i < this._notas.length; i++) {
            media += this._notas[i];
        }

        return media / 5
    }

    adicionaMedia(valor) {
        this._medias.push(valor);
    }


    verifica() {

        let reprovado = 0;
        let aprovado = 0;

        for(let i = 0; i < this._medias.length; i++) {
            if(this._medias[i] >= 7) {
                aprovado += 1;
            }else {
                reprovado += 1;
            }
        }
        return ({
            aprovado: aprovado,
            reprovado: reprovado
        })
    }

}
let teste = new Notas;
let max = 1;

do {
    for(let i = 1; i < 6; i++){
        let nota = Number(prompt(`Digite a nota do aluno número ${max}`));
        teste.setNota(nota);
    }

    let media = teste.retornaMedia();
    teste.adicionaMedia(media);
    teste.resetArray()
    max++
}while(max < 6);

const resposta = teste.verifica()

document.write(`Tiveram ${resposta.aprovado} aprovadas<br>`)
document.write(`Tiveram ${resposta.reprovado} reprovadas`)


