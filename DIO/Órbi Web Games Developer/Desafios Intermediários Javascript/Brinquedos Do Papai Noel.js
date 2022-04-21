//TODO: Complete os espaços em branco com uma possível solução para o problema.
let participantes = gets();
let meninos = 0;
let meninas = 0;
const entradas = [];
let letherSex;

for (let i = 1; i <= participantes; i++) {
  entradas.push(gets());
}

entradas.forEach(function(participante, i) {
    letherSex = participante.split(" ");
    
    if (letherSex[1] === 'M') {
      meninos++;
    }
    if (letherSex[1] === 'F') {
      meninas++;
    }
})

print(`${meninos} carrinhos\n${meninas} bonecas`);
