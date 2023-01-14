//Dibuja los puntos de colores
var trail = [];
Events.on(render, 'afterRender', function() {
    trail.unshift({
        position: Vector.clone(circleCentral.position),
        speed: circleCentral.speed
    });

    Render.startViewTransform(render);
    render.context.globalAlpha = 0.7;

    for (var i = 0; i < trail.length; i += 1) {
        var point = trail[i].position,
            speed = trail[i].speed;
        
        var hue = 250 + 170;
        render.context.fillStyle = 'hsl(' + hue + ', 100%, 55%)';
        render.context.fillRect(point.x, point.y, 3, 3);
    }

    render.context.globalAlpha = 1;
    Render.endViewTransform(render);

    if (trail.length > 5000) {
        trail.pop();
    }
});
