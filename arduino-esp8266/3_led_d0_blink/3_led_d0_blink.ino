void setup() {
  // Set the LED pin D0 into the correct mode (OUTPUT)
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // lets blink!
  digitalWrite(LED_BUILTIN, HIGH);
  delay(2000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);  
}
