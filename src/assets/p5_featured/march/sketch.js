var texts = ['UNITE WITH LOVE, RESIST WITH LOVE',
  'TOGETHER, WE RISE',
  'WOMEN\'S RIGHTS ARE HUMAN RIGHTS',
  'EXPECT US',
  'LOVE']

var i;
var dir = 0;
var a = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textFont('Open Sans');
  noStroke();
  setInterval(startFadeOut, 5000);
  switchText();
}

function draw() {
  background(255);
  fill(220, a);
  textSize(1);
  var w = textWidth(texts[i]);
  var s = 0.9*windowWidth/w;
  textSize(s);
  text(texts[i], width/2, height/2+s*0.33);
  a += dir;
  if (a <= 0) {
    dir = 3;
    switchText();
  } if (a >= 255) {
    dir = 0;
  }
}

function switchText() {
  var lasti = i;
  while (i == lasti) {
    i = Math.floor(Math.random()*texts.length);
  }
}

function startFadeOut() {
  dir = -3;
}