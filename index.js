// Variáveis do herói
let nome = "Amebas";
let xp = 7200;
let level = "";

// Estrutura de decisão
if (xp < 1000) {
    level = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    level = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    level = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    level = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    level = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    level = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    level = "Imortal";
} else if (xp >= 10001) {
    level = "Radiante";
}

// Exibindo a mensagem
console.log(`O Herói de nome ${nome} está no nível de ${level}`);