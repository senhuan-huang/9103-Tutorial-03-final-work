// Define a function that creates a bubble using a random seed and RGB colour values.
// Further learning reference: W3Schools, "JavaScript Function Study Path". https://www.w3schools.com/js/js_functions.asp
function createBubble(seed, red, green, blue) {
  // Set random seed so the same seed and call sequence produce repeatable results.
  // API reference: p5.js, "randomSeed()". https://p5js.org/reference/p5/randomSeed/
  randomSeed(seed);

  // Creat an object to store the bubble's color, animation state, and drawing data.
  let bubble = {
    red: red,
    green: green,
    blue: blue,
    // Choose a random sampling offset so different bubbles sample different regions of the noise field.
    offset: random(20, 800),
    // Initialise the noise time coordinate to zero; it will advance each frame.
    step: 0,
    // Create an array to store the outline's radius multiplier at each sampled direction.
    edge: [],
    // Store X coordinates.
    edgeX: [],
    // Store Y coordinates.
    edgeY: [],
    // Create an array to store the grain objects that form the bubble's edge texture.
    grains: []
  };

  // Generate fixed random grains once, so they do not flicker.
  // Further learning references for array and loop syntax, not the original source of the complete grain design.
  // W3Schools, "JavaScript Arrays" and "JavaScript For Loop".
  // https://www.w3schools.com/js/js_arrays.asp
  // https://www.w3schools.com/js/js_loop_for.asp

  // Repeat 2200 times to create 2200 grains for this bubble.
  for (let i = 0; i < 2200; i++) {
    let grain = {
      // Choose a random angle around a full circle, measured in radians.
      angle: random(TWO_PI),
      // Set a radial multiplier that places the grain at about 93% to 101.5% of the current outline radius.
      distance: random(0.93, 1.015),
      // Choose a random base diameter for the grain.
      size: random(0.6, 1.8),
      // Choose a random alpha value; higher values are more opaque within the default range.
      alpha: random(45, 180)
    };
    // Add current grain object to bubble's grains array.
    bubble.grains.push(grain);
  }

  // Return original object.
  return bubble;
}
// Define the outline update function: speed controls the rate of change, and amount controls deformation strength.
function updateBubble(bubble, speed, amount) {
  // AI assistance: ChatGPT (OpenAI).
  // I supplied my own concept drawing and asked how to implement it; ChatGPT assisted with the time-based update approach.
  // API reference: p5.js, "deltaTime". https://p5js.org/reference/p5/deltaTime/
  // Advance through Perlin noise to move the outline smoothly.
  bubble.step += min(deltaTime / 1000, 0.05) * speed;

  // AI assistance: ChatGPT helped with the closed noise outline implementation based on my concept drawing.
  // Further learning reference: sampling noise along a circle to make the outline meet at the seam.
  // Daniel Shiffman, The Coding Train, "Coding Challenge #136.1: Polar Perlin Noise Loops".
  // https://www.youtube.com/watch?v=ZI1dmHv3MeM
  // Relevant sections: 8:24 and 10:16.
  // Update the outline samples at 96 directions each frame.
  for (let i = 0; i < 96; i++) {
    // Convert the sample index into an angle around a full circle, measured in radians.
    let angle = i / 96 * TWO_PI;

    // Sample a closed circle in the noise field to avoid a seam.
    let value = noise(
      // Use cosine to calculate the sampling circle's x coordinate; 1.3 is its radius in noise space.
      bubble.offset + cos(angle) * 1.3,
      // Use sine to calculate the sampling circle's y coordinate, allowing the path to return to its starting point.
      bubble.offset + sin(angle) * 1.3,
      // Use the advancing time coordinate to make the outline deform smoothly.
      bubble.step
    );

    // Multiply the noise's deviation from 0.5 by the deformation strength, then add 1 to obtain the radius multiplier.
    bubble.edge[i] = 1 + (value - 0.5) * amount;
    // Convert the polar coordinates into a relative x coordinate; the pixel radius is applied during drawing.
    bubble.edgeX[i] = cos(angle) * bubble.edge[i];
    // Same as above.
    bubble.edgeY[i] = sin(angle) * bubble.edge[i];
  }
}
// Further learning reference:
// Daniel Shiffman, The Coding Train, "Coding Challenge #36: Blobby!".
// https://thecodingtrain.com/challenges/36-blobby
// Relevant concept: drawing an outline with beginShape, vertex, and endShape.
// Define a function that draws the calculated outline using a base radius and a scale factor.
function drawOutline(bubble, radius, scale) {
  // Begin recording the top of shape.
  beginShape();

  // Reuse the same outline for every soft light layer.
  // Visit all 96 outline vertices in order.
  for (let i = 0; i < 96; i++) {
    // Multiply the relative coordinates by the base radius and layer scale, then add the result as a vertex.
    vertex(bubble.edgeX[i] * radius * scale, bubble.edgeY[i] * radius * scale);
  }

  // End the loop.
  // Finish the shape and connect the last vertex to the first to close the outline.
  endShape(CLOSE);
}

function drawBubble(bubble, x, y, size) {
  let radius = size / 2;

  push();
  translate(x, y);

  // A translucent white interior.
  noStroke();
  fill(235, 237, 242, 105);
  drawOutline(bubble, radius, 1);

  // Closely spaced outlines make a soft frosted rim.
  noFill();
  strokeWeight(radius * 0.048);

  // Draw 64 layers of outlines.
  for (let layer = 0; layer < 64; layer++) {
    // Start at a scale of 0.61 and increase it by 0.006 per layer, reaching 0.988 on the last layer.
    let scale = 0.61 + layer * 0.006;
    // Further learning reference for the exponential function itself, not the original source of this complete glow formula.
    // W3Schools, "JavaScript Math.exp()". https://www.w3schools.com/jsref/jsref_exp.asp
    // Use a Gaussian-shaped exponential weight
    let glow = exp(-pow((scale - 0.87) / 0.105, 2));
    // Use stroke color from this layer and glow * 38 to control alpha.
    stroke(bubble.red, bubble.green, bubble.blue, glow * 38);
    drawOutline(bubble, radius, scale);
  }

  // AI assistance: ChatGPT helped implement grains that follow the outline based on my concept drawing.
  // Grain angles and random properties remain fixed, while their radial positions follow the changing outline.
  // Random grains follow the same moving outline.
  noStroke();
  // Loop through all grains stored in this bubble.
  for (let i = 0; i < bubble.grains.length; i++) {
    let grain = bubble.grains[i];
    let position = grain.angle / TWO_PI * 96;
    let index = floor(position);
    // Further learning reference:
    // W3Schools, "JavaScript Arithmetic" — remainder operator (%).
    // https://www.w3schools.com/js/js_arithmetic.asp
    // Find the next sample, wrapping from index 95 back to index 0.
    let next = (index + 1) % 96;
    // Further learning reference for lerp;
    // Daniel Shiffman, The Coding Train, "Coding Challenge #163: Bézier Curves", section from 7:39.
    // https://thecodingtrain.com/challenges/163-bezier-curves
    // Use the fractional part of the position to linearly interpolate between two neighbouring radius multipliers.
    let edge = lerp(bubble.edge[index], bubble.edge[next], position - index);
    
    // Multiply the base radius, outline multiplier, and grain radial multiplier to obtain its pixel distance from the centre.
    let r = radius * edge * grain.distance;
    // Reference diameter size: 430.
    let dotSize = grain.size * size / 430;

    fill(bubble.red, bubble.green, bubble.blue, grain.alpha);
    // Convert angle of grain and distance into local X and Y.
    // Then draw a circle.
    circle(cos(grain.angle) * r, sin(grain.angle) * r, dotSize);
  }

  // Restore the saved styles and transformations so they do not affect other bubbles or drawings.
  pop();
}
