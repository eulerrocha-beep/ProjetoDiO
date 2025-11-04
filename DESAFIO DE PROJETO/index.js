let Elo = "";
let nome = "Volsung";
let Xp = 2000;

if (Xp <= 1000) {
    Elo = "Ferro";
} else if (Xp > 1001 && Xp <= 2000) {
    Elo = "Bronze";
} else if (Xp > 2001 && Xp <= 5000) {
    Elo = "Prata";
} else if (Xp > 5001 && Xp <= 7000) {
    Elo = "Ouro";
} else if (Xp > 7001 && Xp <= 8000) {
    Elo = "Platina";
} else if (Xp > 8001 && Xp <= 9000) {
    Elo = "Ascendente";
} else if (Xp > 9001 && Xp <= 10000) {
    Elo = "Imortal";
} else if (Xp >= 10001) {
    Elo = "Radiante";
}

console.log(`O jogador ${nome} possui ${Xp} pontos de experiência e seu elo é ${Elo}.`);

