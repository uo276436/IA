//gira las ruedas
var girar=true;
function updateRotation() {
    if(girar){
        Body.setAngle(circleA, circleA.angle + circleA.rotationSpeed/500);
        Body.setAngle(circleB, circleB.angle+formulaEngranaje());
    }
    requestAnimationFrame(updateRotation);
}
window.requestAnimationFrame(updateRotation);

//calcula la velocidad de giro de la rueda b
function formulaEngranaje(){
    //El giro de un engranaje se calcula como: n1*z1=n2*z2
    //siendo n el tamaño de la rueda y z sus revoluciones
    return (circleA.circleRadius*circleA.rotationSpeed/500)/circleB.circleRadius;
}

//Calcula la posicion del circulo central
function posicionCentral(a,b){
    return Math.pow(Math.pow(700,2)-Math.pow((b-a)/2,2),0.5);
}