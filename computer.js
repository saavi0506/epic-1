class computer{
constructor(x,y,width,height){
    var options={isStatic :true}
    this.image=loadImage("assets/player.png")
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  World.add(world,this.body)
  
}
display(){
  push ()
  translate (this.body.position.x,this.body.position.y)
  rotate (this.body.angle)
  image (this.image,0,0,this.width,this.height)
  pop ()
}
}
