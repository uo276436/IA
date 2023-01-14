// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Events = Matter.Events,
    Body = Matter.Body,
    Composite = Matter.Composite;
    Bodies = Matter.Bodies;
    Composites = Matter.Composites;
    Constraint = Matter.Constraint;
    Vector = Matter.Vector;

// create an engine
var engine = Engine.create();

// create a renderer
// Game distribution
const gameSize = { w: window.innerWidth-10, h: window.innerHeight-10}
var render = Render.create({
    element: document.body,
    engine: engine,   
    options: { width: gameSize.w, height: gameSize.h ,
        showAngleIndicator: true,
        physics: {
            default: "matter",
            matter: {
                gravity: {x: 0, y: 0},//desactivo la gravedad
            }
        }}
});
// run the renderer
Render.run(render);
// create runner
var runner = Runner.create();
// run the engine
Runner.run(runner, engine);


// crea los objetos
var circleA = Bodies.circle(825, gameSize.h-100, 50, {inertia: Infinity,rotationSpeed: 150});//circulo izquierdo, el que rota
var circleB = Bodies.circle(1500,  gameSize.h-100, 50, {inertia: Infinity});//circulo derecho
var circleCentral = Bodies.circle(1162.5,  gameSize.h-100-posicionCentral(825,1500), 1, {  });//circulo central (el que dibuja)
var compo=Composite.create({bodies: [circleA,circleCentral,circleB]});//agrupa los circulos
var chain = Composites.chain(compo, 0.5, 0, 0.5, 0, { stiffness: 1});//lo que conecta los circulos

var puntoA=Constraint.create({ //Punto que ancla al circulo izquierdo
    bodyB: circleA,
    pointB: { x: 0, y: 0 },
    pointA: { x: circleA.position.x, y: circleA.position.y },
    stiffness: 1
});
var puntoB=Constraint.create({ //Punto que ancla al circulo izquierdo
    bodyB: circleB,
    pointB: { x: 0, y: 0 },
    pointA: { x: circleB.position.x, y: circleB.position.y },
    stiffness: 1
});
Composite.add(compo,[puntoA,puntoB]);

// añade los objetos
Composite.add(engine.world, [ compo]);
