//Actualiza el tamaño de a
tamASlider=document.getElementById("tamA")
tamASlider.addEventListener('click', (event) => {
    tamA=tamASlider.value;
    resize=tamA/circleA.circleRadius;
    Body.scale(circleA,resize,resize);
    reloadCircles();
});
//Actualiza el tamaño de b
tamBSlider=document.getElementById("tamB")
tamBSlider.addEventListener('click', (event) => {
    tamB=tamBSlider.value;
    resize=tamB/circleB.circleRadius;
    Body.scale(circleB,resize,resize);
    reloadCircles();
});
//Actualiza la chain
function reloadCircles(){
    Composite.remove(engine.world, chain);
    circleCentral = Bodies.circle(1162.5,  gameSize.h-100-posicionCentral(circleA.position.x,circleB.position.x), 1, {  });//circulo central (el que dibuja)
    compo=Composite.create({bodies: [circleA,circleCentral,circleB]});//agrupa los circulos
   chain = Composites.chain(compo, 0.5, 0, 0.5, 0, { stiffness: 1});//lo que conecta los circulos
   Composite.add(compo,[puntoA,puntoB]);
   Composite.add(engine.world, [ compo]);
};
//Actualiza la velocidad
velSlider=document.getElementById("vel");
velSlider.addEventListener('click', (event) => {
    vel=velSlider.value;
    //resize=vel/circleA.rotationSpeed;
    circleA.rotationSpeed=vel;
});
//Actualiza la posicion de A
posASlider=document.getElementById("posA")
posASlider.addEventListener('input', (event) => {
    posA=posASlider.value;
    Body.setPosition(circleA,  { x: posA, y: circleA.position.y });
    reloadCircles();
    puntoA=Constraint.create({ //Punto que ancla al circulo izquierdo
        bodyB: circleA,
        pointB: { x: 0, y: 0 },
        pointA: { x: circleA.position.x, y: circleA.position.y },
        stiffness: 1
    });
});
//Actualiza la posicion de B
posBSlider=document.getElementById("posB")
posBSlider.addEventListener('input', (event) => {
    posB=posBSlider.value;
    Body.setPosition(circleB,  { x: posB, y: circleB.position.y });
    reloadCircles();
    puntoB=Constraint.create({ //Punto que ancla al circulo izquierdo
        bodyB: circleB,
        pointB: { x: 0, y: 0 },
        pointA: { x: circleB.position.x, y: circleB.position.y },
        stiffness: 1
    });
});
//Limpia el canvas
function limpiar(){
    trail= [];
}
//Pausa la app
function pause(){
    girar=!girar;
    pauseButtom=document.getElementById("pause");
    if(!girar)
        pauseButtom.firstChild.data ="SEGUIR";
    else
        pauseButtom.firstChild.data ="PAUSAR";
    
}
