/**
 * Using NodeMCU Development Kit V1.0
 * Going beyond Blink sketch to see the blue LED breathing.
 * A PWM modulation is made in software because GPIO16 can't
 * be used with analogWrite().
 * This code is from 
 * https://arduining.com/2015/08/20/nodemcu-breathing-led-with-arduino-ide/
*/

#define BRIGHT    350                // max led intensity (1-500)
#define INHALE    1250               // Inhalation time in milliseconds.
#define PULSE     INHALE*1000/BRIGHT // How long is the LED on
#define REST      1000               // Rest Between Inhalations.

void setup() {                
  pinMode(LED_BUILTIN, OUTPUT);   
}

void loop() {
  //ramp increasing intensity, Inhalation: 
  for (int i=1;i<BRIGHT;i++){
    // turn the LED on.
    digitalWrite(LED_BUILTIN, LOW);
    
    // wait i*10 microseconds
    delay(1*10);
    
    // turn the LED off
    digitalWrite(LED_BUILTIN, HIGH);
    
    // wait PULSE-i*10 microseconds
    delay(PULSE-i*10);
    
    yield();                         // to prevent watchdog firing.
  }
  //ramp decreasing intensity, Exhalation (half time):
  for (int i=BRIGHT-1;i>0;i--){
    // turn the LED on.
    digitalWrite(LED_BUILTIN, LOW);
    
    // wait i*10 microseconds
    delay(i*10);
    
    // turn the LED off.
    digitalWrite(LED_BUILTIN, HIGH);
    
    // wait PULSE-i*10
    delay(PULSE-i*10);
    
    yield();                         //to prevent watchdog firing.
  }
  delay(REST);                       //take a rest...
}
