/**
 * Exercise 5.01: draw two lines:
 * - from top left to bottom right
 * - from bottom left to top right
 */

// Include the correct display library
// For a connection via I2C using Wire include
#include <Wire.h>  
#include <SSD1306Wire.h>

// 显示屏还需要焊接，没试验成功
// Declare the display driver
SSD1306Wire screen(0x3c, D3, D4);

void setup() {
  // Initialize the driver
  screen.init();

  // Empty the frame buffer
  screen.clear();

  // Define the drawing color
  screen.setColor(WHITE);

  // Draw the lines
  screen.drawLine(0,0,128,64);
  screen.drawLine(0,128,0,64);

  // Write the frame buffer to the display
  screen.display();
}

void loop() {

}
