const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];
const displayPlayer = (list) => list.forEach((item) => {
    console.log(`${item}`);
});

displayPlayer(players);
