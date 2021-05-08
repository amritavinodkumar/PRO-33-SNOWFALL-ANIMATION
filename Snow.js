class Snow{
  constructor(x, y, width, height) {
    var options = {
      friction:1.0,
      density:1.0
   }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = 90;
     this.height = 90;
     this.image = loadImage("snow5.webp");
     this.image = loadImage("snow4.webp");
     World.add(world, this.body);
  }
    display(){
     var snowpos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(snowpos.x, snowpos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
 }
}