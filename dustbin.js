class Dustbin{
    constructor(x,y,width,height){
    var options = {
        isStatic: true
    }

     this.bodyb = Bodies.rectangle(x,y,width,height,options);
     this.bodyb=width;
     this.bodyb=height;


}
    display(){
        fill("white");
        rect(this.bodyb.position.x,this.bodyb.position.y,this.width,this.height)
    }
    };