class Mango {

    constructor(x, y, r) {
    
    var options={
    isStatic: true,
    restitution: 0,
    friction: 1 
    
    }
    this.body = Bodies.circle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("sprites/mango.png");  
    World.add(world, this.body);    
    }
    display() {
    
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    
    
    
    }
    
    }   