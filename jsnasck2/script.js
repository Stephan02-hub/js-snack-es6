
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const teams = [
    {
        teamName: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Juve',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Lazio',
        points: 0,
        fouls: 0
    },
]

for(let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.points = getRndInteger(0, 102);
    team.fouls = getRndInteger(0, 70);
}


const teamsAndFouls = [];
for(let i = 0; i < teams.length; i++) {
    const {teamName, fouls} = teams[i];
    teamsAndFouls.push({
        teamName,
        fouls
    });
}
console.log(teamsAndFouls)
