/*
 * AI acknowledgement:
 * ChatGPT assisted with the more complex implementation of the
 * grain positioning and time-based bubble updates. Codex was used
 * to review the code for errors. The visual concept, colours and
 * final appearance were designed and adjusted by Runqing Tian.
 * Full details are included in README.md.
 */

// Declare two variables, left and right bubble.
let leftBubble;
let rightBubble;

// The following positions use fractions of the canvas width or height rather than fixed pixel values.
//During size and position adjusting to suit the characters.
let leftX = 480 / 1220;
let leftY = 0.33;
let rightX = 725 / 1220;
let rightY = 0.33;

// Set the size, deformation strength, and animation speed of each bubble separately.
let leftSize = 0.2;
let rightSize = 0.2;
// Set the two bubbles' noise deformation strength.
let leftShapeAmount = 0.8;
let rightShapeAmount = 0.8;
// Set the speed.
let leftSpeed = 0.38;
// Set right bubble's speed slightly lower than the left one.
let rightSpeed = 0.34;

// Define the initialisation function, which p5 calls once when the sketch starts.
function setupperlin() {
  // Set a target of 30 frames per second.
  frameRate(30);
  // Fix the global noise seed so the same sampling coordinates produce repeatable noise values across runs.
  // API reference: p5.js, "noiseSeed()". https://p5js.org/reference/p5/noiseSeed/
  noiseSeed(41);
  // Use two noise octaves, with each higher octave contributing half as much as the previous one.
  // These parameters control noise detail and falloff, not animation frame rate or speed.
  // Further learning reference: Daniel Shiffman, "The Coding Train", "I.6: Perlin Noise Detail in p5.js".
  // https://thecodingtrain.com/tracks/noise/noc/perlin/perlin-noise-detail
  noiseDetail(2, 0.5);

  // White bubbles with a soft red or blue tint.
  leftBubble = createBubble(41, 255, 226, 231);
  rightBubble = createBubble(97, 220, 234, 255);
}

function drawperlin() {
  // Use the smaller of the width-based size and 62% of canvas height as the left bubble's nominal diameter.
  let leftDiameter = min(width * leftSize, height * 0.62);
  // Calculate the right bubble's nominal diameter using the same rule.
  let rightDiameter = min(width * rightSize, height * 0.62);

  // Update both two bubbles.
  updateBubble(leftBubble, leftSpeed, leftShapeAmount);
  updateBubble(rightBubble, rightSpeed, rightShapeAmount);

  // Convert the left bubble's fractional position into pixel coordinates and draw its updated shape.
  drawBubble(leftBubble, width * leftX, height * leftY, leftDiameter);
  // Same as above.
  drawBubble(rightBubble, width * rightX, height * rightY, rightDiameter);
}
// Define the callback that p5 calls when the browser window is resized.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
