/*
Atividade 2
*/
document.getElementById('formularioCarro').addEventListener('submit', function(event) {
    event.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = parseInt(document.getElementById('ano').value);
    const cor = document.getElementById('cor').value;
    const kilometragem = parseInt(document.getElementById('kilometragem').value);
    const valorFipe = parseFloat(document.getElementById('valorFipe').value);

    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        kilometragem: kilometragem,
        valorFipe: valorFipe,
        anosUtilizacao: function() {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        valorMercado: function() {
            if (this.kilometragem <= 30000) {
                return this.valorFipe * 1.1;
            } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
                return this.valorFipe;
            } else {
                return this.valorFipe * 0.9;
            }
        }
    };

    const resultadoDiv = document.getElementById('resultado');
    const anosUtilizacao = carro.anosUtilizacao();
    const valorMercado = carro.valorMercado();

    resultadoDiv.style.display = 'block';
    document.getElementById('anosUtilizacao').innerText = `Anos de Utilização: ${anosUtilizacao}`;
    document.getElementById('valorMercado').innerText = `Valor de Mercado: R$ ${valorMercado.toFixed(2)}`;
});