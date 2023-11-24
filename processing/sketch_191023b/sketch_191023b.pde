import ddf.minim.*;
import ddf.minim.analysis.*;
import com.hamoid.*;

 
Minim minim;
AudioPlayer song;
FFT fft;
BeatDetect beat;

VideoExport videoExport;

float defaultRadius = 40;
float maxRadius = 80;
float radiusFactor = 0.94;
float radius = defaultRadius;

void setup()
{
  size(1024,480);
  ellipseMode(RADIUS);
  frameRate(30);
  noCursor();
 
  minim = new Minim(this);
 
  song = minim.loadFile("/Users/zhulei/Documents/Processing/sketch_191020a/data/gu.mp3");
  
  fft = new FFT(song.bufferSize(), song.sampleRate());
  beat = new BeatDetect();
  
  song.play(0);
}
 
void draw()
{
  //Faire avancer la chanson. On draw() pour chaque "frame" de la chanson...
  fft.forward(song.mix);
  beat.detect(song.mix);
  
  background(0);
 
  fill(0, 255, 0);
  noStroke();
  float rectWidth = width * 1.0 / fft.specSize();
  for (int i = 0; i < fft.specSize(); i++) //<>//
  {
    float rectHeight = fft.getBand(i)*5;

    rect(i*rectWidth, height - rectHeight, rectWidth, rectHeight);
  }

  fill(255);
  ellipse(width/2, height/2, radius, radius);

  if (beat.isOnset())
  {
    radius = maxRadius;
  }
  else
  {
    radius *= radiusFactor;
    if (radius <= defaultRadius)
    {
      radius = defaultRadius;
    }
  }
}
