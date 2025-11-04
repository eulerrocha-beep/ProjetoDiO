let elo = "";
const nome = "Volsung";
const xp = 10001;


if (xp <= 1000) {
    elo = "Ferro";
} else if (xp >= 1001 && Xp <= 2000) {
    elo = "Bronze";
} else if (xp >= 2001 && Xp <= 5000) {
    elo = "Prata";
} else if (xp >= 5001 && Xp <= 7000) {
    elo = "Ouro";
} else if (xp >= 7001 && Xp <= 8000) {
    elo = "Platina";
} else if (xp >= 8001 && Xp <= 9000) {
    elo = "Ascendente";
} else if (xp >= 9001 && Xp <= 10000) {
    elo = "Imortal";
} else if (xp >= 10001) {
    elo = "Radiante";
}


console.log(`O jogador ${nome} possui ${Xp} pontos de experiência e seu elo é ${Elo}.`);