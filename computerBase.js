class computerBase {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        };
    }

    thisbody = Bodies.rectangle(x, y, width, height, options);
    thiswidth = width;
    thisheight = height;
    thisimage = loadImage("./assets/base2.png")


    Worldadd(world, thisbody);
}
dispaly() 
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
