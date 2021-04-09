class paper {
    constructor(x, y, r) {
      var options = {
        
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.x =x
      this.y = y;
      this.r = r;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      
      var paperpos = this.body.position;
      push();
      translate(paperpos.x,paperpos.y);
      
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  