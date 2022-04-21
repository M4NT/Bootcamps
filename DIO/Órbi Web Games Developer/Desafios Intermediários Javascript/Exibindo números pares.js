// Valor informado pelo usuário "N"
let n = parseInt(gets());

// TODO Inclua a condição de parada adequada. 
// Dica: note que o contador "i" é incrementado de 2 em 2 (sempre indo para o próximo par).
for (let i = 2; ; i+=2) {
    if (n < i) {
        break;
    } else {
        console.log(i);
    }
}
