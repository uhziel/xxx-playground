class Star
{
  float x;
  float y;
  float z;
  
  float speed;
  
  Star()
  {
    x = random(-width/2, width/2);
    y = random(-height/2, height/2);
    z = random(2000.0);
    speed = 5;
  }
  
  void Update(boolean beat)
  {
    if (!beat) speed = speed * 0.7;
    else speed = 10;
    if (speed <= 5) speed = 5;

    z -= speed;
    if (z <= 0)
    {
      x = random(-width/2, width/2);
      y = random(-height/2, height/2);
      z = 2000.0;
    }
  }
  
  void Render()
  {
    float transX = (x/z)*1000.0;
    float transY = (y/z)*1000.0;
    float scaleZ = (2000.0-z)/5000.0;
    
    pushMatrix();
    translate(transX, transY);
    scale(scaleZ);
    ellipse(0,0,10,10);
    popMatrix();
  }
}
