class Box{
    constructor(x,y,height,width){
      this.body=Bodies.rectangle(x,y,height,width);
      this.width=width;
      this.height=height;

      World.add(world,this.body);
    
    }

    display(){
        fill("#EABDEA");
        rect(this.body.position.x,this.body.position.y,this.height,this.width);
        
    }
}   