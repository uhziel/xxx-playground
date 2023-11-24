import ddf.minim.*;
import ddf.minim.analysis.*;
import com.hamoid.*;

Minim minim;
AudioPlayer player;
AudioFramePlayer framePlayer;
BeatDetect beatLeft;
BeatDetect beatRight;
Star[] stars = new Star[200];
SpecCircle specCircleLeft;
SpecCircle specCircleRight;

VideoExport videoExport;

float minRad = 140;
float maxRad = 150;
float radiusLeft = minRad;
float radiusRight = minRad;
String soundFilename = "/Users/zhulei/Downloads/386491_24039_l.mp3";
//String soundFilename = "/Users/zhulei/Documents/Processing/sketch_191020a/data/gu.mp3";
int videoFPS = 30;
float frameDuration = 1 / videoFPS;
boolean recordVideo = true;
float zoomInFactor;

int definedWidth;
int definedHeight;

void settings() {
  if (recordVideo)
  {
    zoomInFactor = 1920.0/1024.0;
    definedWidth = 1920;
    definedHeight = 1080;
  }
  else
  {
    zoomInFactor = 1;
    definedWidth = 1024;
    definedHeight = 640;
  }
  size(definedWidth,definedHeight); 
}

void setup()
{
  minim = new Minim(this);
  if (recordVideo)
  {
    framePlayer = new AudioFramePlayer(soundFilename, 1024);

  }
  else
  {
    player = minim.loadFile(soundFilename);
  }
  
  beatLeft = new BeatDetect();
  beatLeft.detectMode(BeatDetect.FREQ_ENERGY);
  beatRight = new BeatDetect();
  beatRight.detectMode(BeatDetect.FREQ_ENERGY);
  
  for (int i = 0; i < stars.length; i++)
  {
    stars[i] = new Star();
  }
  
  specCircleLeft = new SpecCircle(-200,0*zoomInFactor, #ff0000);
  specCircleRight = new SpecCircle(200,0*zoomInFactor, #0000ff);
    
  if (!recordVideo)
  {
    player.play();
    frameRate(30);
  }
  else
  {
    videoExport = new VideoExport(this);
    videoExport.setFrameRate(videoFPS);
    videoExport.setAudioFileName(soundFilename);
    videoExport.startMovie();
    frameRate(1000);
  }
  noCursor();
}

void draw()
{
  if (!recordVideo)
  {
    render();
  }
  else
  {
    framePlayer.gotoNextFrame();
    while (videoExport.getCurrentTime() < framePlayer.curTime + frameDuration*0.5)
    {
      render();
      videoExport.saveFrame();
    }
  }
}

void render()
{
  translate(width/2, height/2);
  if (recordVideo)
  {
    beatLeft.detect(framePlayer.left);
    beatRight.detect(framePlayer.right);
  }
  else
  {
    beatLeft.detect(player.left);
    beatRight.detect(player.right);
  }

  background(0);
  noStroke();

  if (!beatLeft.isKick()) radiusLeft = radiusLeft * 0.97;
  else radiusLeft = maxRad;
  if (radiusLeft <= minRad) radiusLeft = minRad;
  
  if (!beatRight.isKick()) radiusRight = radiusRight * 0.97;
  else radiusRight = maxRad;
  if (radiusRight <= minRad) radiusRight = minRad;
  
  fill(255);
  for (int i = 0; i < stars.length; i++)
  {
    stars[i].Update(beatLeft.isKick());
    stars[i].Render();
  }

  if (recordVideo)
  {
    specCircleLeft.render(framePlayer.left, radiusLeft*zoomInFactor);
    specCircleRight.render(framePlayer.right, radiusLeft*zoomInFactor);
  }
  else
  {
    specCircleLeft.render(player.left.toArray(), radiusLeft*zoomInFactor);
    specCircleRight.render(player.right.toArray(), radiusLeft*zoomInFactor);
  }
}

void keyPressed() {
  if (key==' ')
  {
    //videoExport.endMovie();
    exit();
  }
  if (key=='s')
    saveFrame("###.jpeg");
}

class AudioFramePlayer
{
  AudioSample sample;
  int bufferSize;
  float[] channelLeft;
  float[] channelRight;
  int curFrame;
  int maxFrame;
  float curTime;
  float[] left;
  float[] right;
  AudioFramePlayer(String filename, int _bufferSize)
  {
    sample = minim.loadSample(filename, _bufferSize);
    bufferSize = _bufferSize;
    channelLeft = sample.getChannel(AudioSample.LEFT);
    channelRight = sample.getChannel(AudioSample.RIGHT);
    curFrame = 0;
    maxFrame = (channelLeft.length / bufferSize) + 1;
    curTime = 0.0;
    left = new float[bufferSize];
    right = new float[bufferSize];
  }
  
  int bufferSize()
  {
    return bufferSize;
  }
  
  void gotoNextFrame()
  {
    curFrame += 1;
    if (curFrame > maxFrame)
    {
      curFrame = maxFrame;
    }
    int channelStartIndex = curFrame * bufferSize();
    int chunkSize = min(channelLeft.length - channelStartIndex, bufferSize());
   
    curTime = channelStartIndex / sample.sampleRate();
    System.arraycopy(channelLeft,channelStartIndex,left,0,chunkSize);
    System.arraycopy(channelRight,channelStartIndex,right,0,chunkSize);
    if (chunkSize < left.length)
    {
      java.util.Arrays.fill(left, chunkSize, left.length, 0.0);
      java.util.Arrays.fill(right, chunkSize, right.length, 0.0);
    }
  }
}
