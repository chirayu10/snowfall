class Snow{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1
        }
        this.visiblity=255
        this.body=Bodies.rectangle(x,y,30,30,options)
        World.add(world,this.body)
        this.width=30
        this.height=30
        
        this.image=loadImage("snow5.webp")
        
    }
    display(){
        var pos=this.body.position
        //this.body.velocity.y=1
        push ()
        rotate (this.body.angle)
       translate(pos.x,pos.y)

       
        if (this.body.position.y>350){
            this.visiblity=this.visiblity-10
            tint (255,this.visiblity)
            World.remove(world,this.body)
            image (this.image,pos.x,pos.y,30,30)
            Matter.Body.setStatic(this.body,true)
        }
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop ()
    }
}