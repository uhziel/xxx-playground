void setup() {
  Serial.begin(115200);
  // Set the LED pin D0 into the correct mode (OUTPUT)
  pinMode(22, OUTPUT);
}

void loop() {
  // lets blink!
  digitalWrite(22, HIGH);
  delay(2000);
  digitalWrite(22, LOW);
  Serial.println("hello");
  delay(1000);  
}
