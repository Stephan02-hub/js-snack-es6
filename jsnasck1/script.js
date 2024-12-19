const bikes = [
    {
        nome : "bici1",
        weight : 40
    },
    {
        nome : "bici2",
        weight : 30
    },
    {
        nome : "bici3",
        weight: 20
    },
    {
        nome : "bici4",
        weight : 50
    },
    {
        nome : "bici5",
        weight : 60
    }
];

let bike = bikes [0]
for (let i = 1; i < bikes.length; i++) {
    if(bikes[i].weight < bike.weight ) {
        bike = bikes[i];
    }
}
console.log(bike);

