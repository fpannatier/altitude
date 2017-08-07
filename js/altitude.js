var phone;
var sky;
var logo;
var altitude = 180;
var maxAltitude = 3000;
var altitudeSlider;

//snow variables
var quantity = 100;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 10;
var snowColor = 255;

function preload() {
  phone = loadImage('assets/phone.png');
  sky = loadImage('assets/sky.png');
  logo = loadImage('assets/logo.png');
  //font = loadFont('GothamRnd-Medium.ttf');
}

function setup() {
  var p = createP('Höhenmeter');
  p.position(350,1310);
  p.style('font-size','20pt');

  altitudeSlider = createSlider(0,maxAltitude,0);
  altitudeSlider.position(320,1350);
  createCanvas(750,1334);
  //textFont(font);
  textFont('DINOT');
  background(0);

//snow setup
  frameRate(25);
  for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }
}

function draw() {
  var scaleAmount = 60 / 100;
  scale(scaleAmount);
  background(0);


  //image(flare,width/2,height/2,73,73);
  var altitude = altitudeSlider.value();
  var yOffset = map(altitude,0,maxAltitude,700,0);

  var base1 = 720 - yOffset * 0.4;
  var base2 = 830 - yOffset * 0.6;
  var base3 = 920 - yOffset * 0.8;
  var base4 = 1000 - yOffset;
  image(sky,65 ,base4-900,620,height);
  textSize(40);
  text('Höhenmeter',270,370);
  textSize(50);
  text( altitude,310,430);
  console.log(altitude);
  noStroke();
  //row 1
  fill(221,85,111);
  beginShape();
  vertex(104,base1+67.983);
  vertex(125.462,base1+70.258);
  vertex(141.574,base1+84.494);
  vertex(170.016,base1+81.125);
  vertex(193.199,base1+91.077);
  vertex(220.004,base1+77);
  vertex(247,base1+84.494);
  vertex(267.818,base1+77.911);
  vertex(299.695,base1+84.494);
  vertex(329.721,base1+72.431);
  vertex(361.16,base1+81.849);
  vertex(410.903,base1+77);
  vertex(419.369,base1+56.902);
  vertex(436.303,base1+46.016);
  vertex(442.35,base1+39.565);
  vertex(442.35,base1+33.921);
  vertex(446.785,base1+21.019);
  vertex(450.011,base1+21.019);
  vertex(451.623,base1+16.987);
  vertex(454.849,base1+16.987);
  vertex(454.849,base1+10.133);
  vertex(462.106,base1+0);
  vertex(474,base1+7.714);
  vertex(495.973,base1+33.9);
  vertex(495.973,base1+42.387);
  vertex(503.23,base1+52.064);
  vertex(512.503,base1+52.064);
  vertex(530.559,base1+65.35);
  vertex(537.674,base1+60.84);
  vertex(646.718,base1+51.157);
  vertex(646.718,1146.02);
  vertex(104,1146.02);
  endShape(CLOSE);

  //row2
  fill(175,69,94);
  beginShape();
  vertex(104,base2+50.629);
  vertex(116.917,base2+42.622);
  vertex(123.678,base2+50.954);
  vertex(136.356,base2+38.879);
  vertex(143.48,base2+39.845);
  vertex(146.982,base2+46.969);
  vertex(165.697,base2+53.972);
  vertex(185.74,base2+46.426);
  vertex(198.177,base2+45.279);
  vertex(210.372,base2+39.966);
  vertex(217.616,base2+39.724);
  vertex(231.381,base2+51.437);
  vertex(248.126,base2+51.437);
  vertex(252.149,base2+48.297);
  vertex(263.137,base2+49.263);
  vertex(269.053,base2+53.127);
  vertex(298.031,base2+53.972);
  vertex(330.391,base2+45.641);
  vertex(337.514,base2+36.947);
  vertex(366.493,base2+35.74);
  vertex(379.654,base2+46.969);
  vertex(432.056,base2+24.028);
  vertex(437.852,base2+16.41);
  vertex(453.956,base2+22.993);
  vertex(472,base2+14.731);
  vertex(481.44,base2+5.313);
  vertex(499.793,base2+15.455);
  vertex(507,base2+14.127);
  vertex(518.508,base2+2.777);
  vertex(534.205,base2+7.124);
  vertex(547.366,base2+6.641);
  vertex(556,base2+0);
  vertex(567.289,base2+6.158);
  vertex(583.347,base2+7.245);
  vertex(588.056,base2+12.557);
  vertex(592.8,base2+5.071);
  vertex(630.437,base2+19.56);
  vertex(646.718,base2+20.918);
  vertex(646.718,1146.02);
  vertex(104,1146.02);
  endShape(CLOSE);

  //row3
  fill(137,55,78);
  beginShape();
  vertex(104,base3+24.787);
  vertex(148.895,base3+4.347);
  vertex(178.598,base3+15.452);
  vertex(234.744,base3+0);
  vertex(265,base3+21.372);
  vertex(294,base3+8.694);
  vertex(315.883,base3+18.4);
  vertex(335.443,base3+8.6);
  vertex(381.809,base3+39.845);
  vertex(433.97,base3+34.05);
  vertex(531.772,base3+70.273);
  vertex(581.821,base3+45.641);
  vertex(646.718,base3+62.121);
  vertex(646.718,1146.02);
  vertex(104,1146.02);
  endShape(CLOSE);

  //row4
  fill(86,35,51);
  beginShape();
  vertex(104,base4+79.914);
  vertex(139.477,base4+70);
  vertex(151.068,base4+57.9);
  vertex(174.575,base4+44.916);
  vertex(188.74,base4+27.1);
  vertex(208.3,base4+20.647);
  vertex(222.79,base4+3);
  vertex(241.626,base4+3.985);
  vertex(258.288,base4+3.985);
  vertex(281.8,base4+0);
  vertex(320.229,base4+16.3);
  vertex(360.7,base4+15.214);
  vertex(369.13,base4+27.529);
  vertex(385.543,base4+17);
  vertex(413.685,base4+28.254);
  vertex(439.041,base4+32.963);
  vertex(462.223,base4+35.136);
  vertex(468.019,base4+26.443);
  vertex(500,base4+17.387);
  vertex(535.756,base4+0);
  vertex(584.657,base4+33.325);
  vertex(633.92,base4+54.334);
  vertex(646.718,base4+51.851);
  vertex(646.718,1146.02);
  vertex(104,1146.02);
  endShape(CLOSE);
  fill(255);
  drawSnow();
  image(phone,0,0,width,height);
  image(logo,230,1075,280,41);
  fill(255);
  rect(0,0,width,10);
  rect(0,height-10,width,10);
  rect(width-5,0,5,height);


}
function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    noStroke();
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);

    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }

    yPosition[i] += flakeSize[i] + direction[i];

    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}
