class SpecCircle
{
  float x;
  float y;
  color c;
  
  SpecCircle(float x, float y, color c)
  {
    this.x = x;
    this.y = y;
    this.c = c;
  }
  
  void render(float[] buff, float r)
  {
    pushMatrix();
    translate(x, y);
    
    stroke(c);
    noFill();
    int buffSize = buff.length;
    for (int i = 0; i < buffSize - 1; i+=10)
    {
      float x = (r)*cos(i*2*PI/buffSize);
      float y = (r)*sin(i*2*PI/buffSize);
      float x2 = (r + buff[i]*100)*cos(i*2*PI/buffSize);
      float y2 = (r + buff[i]*100)*sin(i*2*PI/buffSize);
      strokeWeight(2*zoomInFactor);
      line(x, y, x2, y2);
    }

    beginShape();
    for (int i = 0; i < buffSize; i+=30)
    {
      float x2 = (r + buff[i]*100)*cos(i*2*PI/buffSize);
      float y2 = (r + buff[i]*100)*sin(i*2*PI/buffSize);
      vertex(x2, y2);
      pushStyle();
      strokeWeight(4*zoomInFactor);
      point(x2, y2);
      popStyle();
    }  
    endShape(CLOSE);
    
    popMatrix();
  }
}
