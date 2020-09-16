class log{
    constructor(x, y, height,angle) {
        var options = {
            isStatic: false,
            'restitution':0.8, 'friction':1.0, 'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20,height, options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);

    }

    display() {
        var angle1=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle1);
        rectMode(CENTER); 
        fill("brown");
        rect(0,0, this.width, this.height);
        pop();
    }
}
