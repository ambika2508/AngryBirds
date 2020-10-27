class Bird extends BaseClass {
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y){
    super(x,y,50,50)
 this.image = loadImage("sprites/bird.png")
 }
  display(){
      var pos = this.body.position
      pos.x = mouseX
      pos.y = mouseY
      super.display()
  }
}