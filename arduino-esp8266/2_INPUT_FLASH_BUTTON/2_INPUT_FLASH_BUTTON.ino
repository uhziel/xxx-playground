void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  // D3 links FLASH button
  pinMode(D3, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int state = digitalRead(D3);
  Serial.println(state);
  delay(2000);
}
