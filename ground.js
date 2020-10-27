class Ground {
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (){
     var options =  {
      isStatic : true
     }
this.body = B.rectangle(800,390,1600,10,options)
 W.add(world,this.body)
 }
  display(){
    
      rectMode(CENTER)
      fill ("brown")
      rect(this.body.position.x, this.body.position.y, 1600, 10)
      
  }
}