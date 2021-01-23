const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

plinkos = []
particle = []
division = []

var ground;
var divisionHeight = 300;

function setup() {
    createCanvas(480, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100, 690, 1000, 20);

    for (var k = 0; k <= width; k = k + 80) {
        division.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 130));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 180));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 230));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 280));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 330));
    }

    console.log(frameCount);
    Engine.run(engine);
}

function draw() {
    background(23,26,29);
    Engine.update(engine);

    ground.display();

    if (frameCount % 60 === 0) {
        particle.push(new Particles(random(width / 2 - 10, width / 2 + 10), 5, 5));
    }

    for (var k = 0; k < division.length; k++) {
        division[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    for (var k = 0; k < division.length; k++) {
        division[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }

    for (var j = 0; j < particle.length; j++) {
        particle[j].display();
    }
}