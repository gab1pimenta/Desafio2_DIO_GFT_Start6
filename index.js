// criando a função 
function vitoriasEderrotas(numeroVitorias, numeroDerrotas) {
    let saldoRankeadas = numeroVitorias - numeroDerrotas;
    let nivel = ""; 
    
    // condições para o nível do Herói
    if (saldoRankeadas <= 10) {
        nivel = "Ferro";
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
        nivel = "Bronze";
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
        nivel = "Prata";
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
        nivel = "Ouro";
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
        nivel = "Diamante";
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
        nivel = "Lendário";
    } else if (saldoRankeadas >= 101) {
        nivel = "Imortal";
    }

    // Retornando o saldo e nível como um array
    return [saldoRankeadas, nivel];
}

let saldoVitorias = vitoriasEderrotas(100, 8);

// usando interpolação 
console.log(`O Herói tem de saldo de ${saldoVitorias[0]} e está no nível de ${saldoVitorias[1]}`);
