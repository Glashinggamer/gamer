class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
this.image=loadImage("snow4.webp")
	}
	display()
	{
			
			var pos=this.body.position;
            var angle=this.body.angle;
			push()
			translate(pos.x, pos.y);
			// rectMode(CENTER)
         rotate(angle)
			//strokeWeight(4);
			fill("white")
			imageMode(CENTER);
		    image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}