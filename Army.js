class Army{
  
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("terrorist.png")
      this.image1=loadImage("terrorist2.png")
      World.add(world, this.body);
      this.Visibility=225;
     // var point=6;
    }
    display(){
       if(this.body.speed<2){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }else{
         World.remove(world,this.body)
         push()
         this.Visibility = this.Visibility - 5;
         tint(255,this.Visibility)
         if(this.Visibility<=0){
          // point=point-1;
         }
         image(this.image1,this.body.position.x,this.body.position.y,80,130)
         pop()
     }
    }
    score(){
      if(this.Visibility<0&& this.Visibility>-1005){
        score++
        console.log("In loop")
      }
     // console.log(score)
    //  console.log(this.Visibility)
    }
}