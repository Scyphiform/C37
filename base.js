class Base extends BaseClass {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'static': false
        }
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };