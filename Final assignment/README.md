# INTERIOR DISTANCE

**IDEA9103 Creative Coding Major Project – Abhiruchi Group C**

> *If we could see each other’s thoughts, would we understand each other better?*

## Project Overview

*Interior Distance* is an original interactive artwork created with p5.js. It explores the emotional distance that can remain between two people, even when they are physically close or deeply connected.

Two anonymous figures stand near each other and appear calm. However, neither person fully expresses what is happening internally. Through interaction, the viewer can reveal fragments of their thoughts, memories, responsibilities and emotions. These fragments are visible, but they still require interpretation.

The work asks whether seeing another person’s inner world would create genuine understanding, or whether some emotional distance would still remain.

## Character Setting

### Character A – Reality and Pressure

Character A represents a temporary mental state shaped by deadlines, responsibilities and repeated daily tasks. Their inner world contains clocks, documents, phone alerts and other symbols of pressure.

Warm colours, repeated paths and compressed movement communicate tension and responsibility.

### Character B – Memory and Imagination

Character B represents a temporary mental state shaped by memories, emotional connection and imagined places beyond the present.

Their inner world contains a home, plants, fish, a boat and stars. Cool colours and expanding movement communicate imagination, memory and emotional openness.

These characters are not fixed personality types. They represent temporary mental states that anyone may experience.

## Inspiration

The visual direction was inspired by Brazilian digital artist **Arthur Machado** and his exploration of digital space, memory, fantasy and psychological perception.

The project was particularly influenced by the following visual qualities:

- Translucent human figures
- Soft colour gradients
- Surreal and dreamlike environments
- Luminous circles and bubbles
- Distorted and irregular forms

### Influence on the Final Design

Machado’s work influenced our decision to represent thoughts as visual fragments rather than literal text.

The final artwork uses two luminous figures with contrasting colour palettes. Character A uses warmer coral, orange and yellow tones, while Character B uses cooler cyan, violet and pink tones.

As the artwork unfolds, icons, particles, bubbles, light and movement reveal the two inner worlds. Some visual layers respond to the viewer, while the Perlin noise and Time-based layers continue automatically.

All final visual assets were designed and created by the team. The project does not directly reproduce or reuse assets from Machado’s artworks. Instead, it adapts selected qualities from his visual language to create an original interactive experience.

## Interaction Instructions

1. Open the `Final assignment` folder in Visual Studio Code.
2. Run `index.html` using Live Server.
3. Wait for the images, icons and audio file to finish loading.
4. The Perlin noise bubbles and Time-based icon system begin automatically.
5. Character A’s thought icons first appear three seconds after the page loads.
6. Character B’s thought icons first appear 10.5 seconds after the page loads.
7. Move the cursor over either character to reveal its colour layer.
8. After a character has been hovered over once, its colour layer continues a four-second breathing-opacity cycle.
9. Click either character to start the looping soundtrack and Audio visualisation.
10. Observe how the circular waveform changes colour with the audio energy and how the particles move faster when the music becomes stronger.
11. Observe how the two frosted bubbles continuously change shape through Perlin noise.
12. Refresh the browser page if you want to restart the complete artwork from its opening state.

### Additional Controls

- **Mouse hover:** Reveals the colour layer of the character under the cursor. After the first hover, that character continues a four-second breathing-opacity cycle.
- **Mouse click:** Clicking either character starts the soundtrack and Audio visualisation. Clicking outside both characters does nothing.
- **Audio control:** The soundtrack begins after the first valid character click because the browser requires user interaction before playing audio.
- **Perlin bubbles:** The bubbles run automatically and do not require user input.
- **Time-based icons:** The icon sequences run automatically. They are not controlled by mouse input, audio, Perlin noise or random values.
- **Keyboard controls:** None.
- **Restart:** Refresh the browser page to restart the complete artwork.

## Techniques and Code Structure

The project was created with **p5.js** and combines four distinct mechanics:

1. User Input
2. Audio
3. Perlin Noise and Randomness
4. Time-based Interaction

Each mechanic is stored in a separate script file. The main `main sketch.js` file calls the preload, setup, drawing and interaction functions from the four mechanics and controls their drawing order on the shared canvas.

The project uses:

- p5.js canvas drawing
- Image loading and layered composition
- Mouse hover detection
- Click-triggered audio
- FFT audio analysis
- Sound-reactive waveform and particles
- Perlin noise and seeded random values
- Millisecond-based timing
- Classes and objects
- Arrays of visual elements
- Smooth interpolation with `lerp()`
- Trigonometric movement with `sin()` and `cos()`
- Custom shapes using vertices
- Modular JavaScript files

### Project Structure

The final code integration was completed by Senhuan Huang with contributions from all four mechanic owners.

```text
Final assignment/
├── index.html
├── style.css
├── main sketch.js
├── input-control.js
├── audio-mechanic.js
├── perlin_main_sketch.js
├── perlin-layer2.js
├── timebased_sketch.js
├── assets/
│   ├── BGfinal.png
│   ├── music1.wav
│   ├── icons/
│   └── people/
├── images/
│   ├── C1.png
│   ├── C2.png
│   ├── CH1.png
│   └── CH2.png
├── libraries/
│   ├── p5.min.js
│   └── p5.sound.min.js
└── README.md
```

## How the Four Mechanics Work Together

The four mechanics share the same canvas but have different technical responsibilities.

- **User Input** detects when the cursor moves over the left or right character. Hovering gradually reveals that character’s colour layer. After the first hover, `sin()`, `millis()` and `lerp()` create a repeating four-second breathing-opacity effect.
- **Audio** begins after the viewer clicks either character. A `p5.FFT` analyser reads the energy between 20 and 200 Hz. The audio energy changes the circular waveform colour, the dark overlay and the speed of the particles.
- **Perlin Noise and Randomness** runs automatically. Perlin noise continuously changes the outlines of two translucent bubbles. Seeded random values create fixed grain positions, so the texture remains stable instead of flickering.
- **Time-based Interaction** also runs automatically. Character A begins after three seconds and Character B begins after 10.5 seconds. Each character then repeats its own fifteen-second thought-icon sequence.

The mechanics remain technically separate, but their effects are layered together to create one visual experience.

## Mechanic Ownership

| Team Member | Mechanic | Script File | Responsibility |
|---|---|---|---|
| Senhuan Huang | User Input | `input-control.js` | Detects mouse hover over each character and controls the fade-in. Besides, the people will continuously adjust the color gradient, each circuler is 4s,just like breath. |
| Xinya Huang | Audio | `audio-mechanic.js` | Uses FFT energy and waveform data to control the circular audio visualisation, colour transitions, dark overlay and particle speed. |
| Runqing Tian | Perlin Noise and Randomness | `perlin_main_sketch.js and perlin-layer2.js` | Uses Perlin noise to animate two frosted bubble outlines and seeded random values to create stable grain textures. |
| Leona Li | Time-based Interaction |  `timebased_sketch.js` | Automatically controls the delayed start and repeating fifteen-second visual life cycle of each character’s thought icons. |

## Individual Mechanic Details

### User Input – Senhuan Huang

**Purpose**

The User Input mechanic allows the viewer to reveal each character’s colour by moving the cursor over the figure.

**Interaction**

Move the cursor over either character. The two characters respond separately. After a character has been hovered over once, its colour layer continues to change even when the cursor moves away.

**Visual Result**

A colour image gradually appears over the white and grey character. When the mouse leaves, that colour layer gently "breath" between lower and higher opacity.

**Main Techniques**

- `mouseMovedInput()` checks the mouse position.
- `mousehover` is set to `0` for the left character, `1` for the right character and `-1` when neither character is hovered over.
- Separate rectangular hover areas identify the two characters.
- `leftHoverOnce` and `rightHoverOnce` remember whether each character has previously been hovered over.
- `changeimagetransparency()` uses `sin()`, `millis()` and `lerp()` to control the colour layer’s opacity.
- `drawInput()` draws the background.
- `drawInput2()` draws the neutral and colour character layers.

**Main Script**

`input-control.js`

---

### Audio – Xinya Huang

**Purpose**

The Audio mechanic transforms sound into visual movement, adding rhythm and emotional expression to the artwork. When the viewer clicks either character, the looping soundtrack activates a circular audio visualiser. The changing waveform, colours and particles help make the characters' invisible emotional worlds feel more dynamic and connected.

**Audio Source**

The soundtrack used in this project is Light Leaks by Shrimpnose, Joe Nora and Allem Iversom, released in 2021 as part of Between Dunes EP.

I downloaded the track from QQ Music and personally selected and edited a short excerpt for the project. The edited audio was saved as music1.wav in the assets folder and is used as the looping soundtrack for the Audio mechanic.

The audio is loaded using loadSound() and analysed in real time with p5.FFT() to drive the circular waveform, colour transitions, particle movement and other sound-reactive visual effects.

**Main Techniques**

- `p5.FFT(0.3)` analyses the soundtrack in real time and applies smoothing to the audio data.
- `fft.waveform()` provides waveform values for the circular visualisation.
- `fft.getEnergy(20, 200)` measures the audio energy between 20 and 200 Hz.
- `map()`, `sin()`, `cos()` and `vertex()` convert the waveform data into two mirrored semicircular shapes.
- `lerpColor()` creates smooth transitions between cyan, blue-purple, purple and pink.
- The `Particle` class stores each particle’s position, velocity, acceleration, size and colour.
- `Particle.update()` controls movement.
- `Particle.show()` draws the glowing particles.
- `Particle.edges()` removes particles after they leave the canvas.
- A conditional energy threshold increases particle speed while the soundtrack is playing.
- `userStartAudio()` allows the soundtrack to begin after a valid character click.

**Visual Result**

When the soundtrack is playing, a circular waveform appears around the centre of the canvas. Its shape moves inward and outward according to the waveform data.

The waveform colour changes between cyan, blue-purple, purple and pink as the low-frequency audio energy changes.

A semi-transparent dark overlay and soft vignette help the visualisation stand out from the background. Glowing particles move outward from the circular visualiser and accelerate when the audio energy exceeds the selected threshold.

During final group integration, the original Play/Pause testing button was replaced by character-click interaction. Clicking either character now starts the looping soundtrack and Audio visualisation.

**Original Background Illustration**

The final background, BGfinal.png, was hand-drawn by Xinya Huang specifically for Interior Distance. It depicts a dreamlike landscape with blue mountains, a reflective lake, soft pink and yellow lighting, glowing plants and a crescent moon.

Its visual direction was inspired by the surreal atmosphere, luminous colours and dreamlike digital environments found in the work of Brazilian digital artist Arthur Machado (Tù.úk'z). These influences were interpreted through an original hand-drawn landscape rather than directly copying or reusing any existing artwork.

The background establishes a calm, imaginative atmosphere and provides a visual environment for the characters, circular audio visualiser, particles and other interactive elements. No generative AI was used to create or modify this final background illustration.

**Main Script**

`audio-mechanic.js`

---

### Perlin Noise and Randomness – Runqing Tian

**Purpose**

This mechanic creates two softly glowing bubbles with gently changing outlines. Based on my initial concept drawings, the effect combines translucent interiors, coloured rims and fine grain textures to create a delicate, organic appearance. The two bubbles change at slightly different speeds, giving each its own movement while maintaining a balanced composition.

**Visual Result**

Two bubbles appear side by side, with a pale pink rim on the left and a pale blue rim on the right. Each bubble has a translucent, near-white interior surrounded by a soft, frosted edge. Small grains follow the changing outline, adding texture while retaining a consistent pattern. The transparent canvas background allows the effect to be placed over other visual layers. The translucent bubble shapes are drawn over the shared background, allowing the underlying scene to remain visible through their interiors.

**Main Techniques**

- `createBubble()` creates an object that stores each bubble’s colour, noise offset, outline data and grain properties.
- `randomSeed()` makes the initial random values repeatable, while `noiseSeed()` fixes the noise field.
- `noiseDetail(2, 0.5)` controls the noise pattern using two octaves and a falloff factor of 0.5.
- `updateBubble()` updates 96 outline samples to create a continuously changing shape.
- `sin()` and `cos()` create a circular sampling path in noise space, allowing the outline to meet smoothly at its seam.
- `deltaTime` controls the rate of deformation, while `min()` limits each time step to 0.05 seconds to reduce sudden changes after slow frames.
- `beginShape()`, `vertex()` and `endShape(CLOSE)` connect the outline points into a closed shape.
- `drawOutline()` reuses the calculated outline at different scales to draw 64 overlapping rim layers.
- `exp()` and `pow()` calculate an opacity falloff that gives the layered rim a soft appearance.
- Each bubble stores 2,200 grains whose random properties are generated once to avoid flickering from repeated randomisation.
- `floor()` and the remainder operator `%` identify neighbouring outline samples and wrap the final index back to the first.
- `lerp()` interpolates between neighbouring radius values so the grains follow the changing outline.
- `push()`, `translate()` and `pop()` position each bubble while keeping its drawing styles and coordinate transformations separate.
- Proportional coordinates, `min()` and `windowResized()` adjust the bubbles’ positions and sizes when the browser window changes.

**Main Scripts**

- `perlin_main_sketch.js`
- `perlin-layer2.js`

---

### Time-based Interaction – Leona Li

**Purpose**

The Time-based mechanic automatically controls when each character’s thought icons appear, become active, focus and disappear.

It operates independently from User Input, Audio, Perlin noise and random values. It begins when the page loads and does not wait for a mouse click.

Character A begins after a three-second opening delay. Character B begins after 10.5 seconds, creating a fixed 7.5-second offset between the two inner worlds.

After each character begins, its sequence repeats every fifteen seconds without another opening delay.

**Fifteen-Second Sequence**

1. **Reveal – 0 to 3 seconds**  
   Five icons gradually appear. Each icon has a small index-based delay and changes from grayscale to colour.

2. **Active – 3 to 7 seconds**  
   All five icons remain visible and their movement becomes stronger.

3. **Focus – 7 to 10 seconds**  
   The clock becomes Character A’s focus icon, while the house becomes Character B’s focus icon. The focus icon becomes larger and brighter. The other icons become    dimmer and move slightly towards it.

4. **Settle – 10 to 12 seconds**  
   Movement slows and the icons begin returning towards their normal positions and sizes.

5. **Dissolve – 12 to 15 seconds**  
   The colour drains and the icons fade out. The local timeline then returns to zero and begins the Reveal stage again.
   
**Main Techniques**

- `millis()` measures the time since the Time-based mechanic was initialised.
- `cycleStartMillis` stores the starting point of the complete Time-based system.
- `A_START_SECONDS` and `B_START_SECONDS` create the fixed 7.5-second offset.
- The modulo operator `%` restarts each local timeline after fifteen seconds.
- `stageFromTime()` maps the local time to Reveal, Active, Focus, Settle or Dissolve.
- `smoothStep()` creates softer progress curves inside each stage.
- `lerp()` creates smooth changes in opacity, colour, movement, scale, focus and position.
- `sin()` and `cos()` create repeatable drifting, pulsing and stretching.
- A grayscale copy of each icon is crossfaded with its colour version during Reveal.
- `drawingContext.shadowBlur` creates the glow around the focus icon.
- `CharacterTimeline` manages one character’s start time, current stage and icon collection.
- `ThoughtIcon` stores and updates the visual state of one icon.
- Each character owns five `ThoughtIcon` objects.

The Time-based mechanic does not use mouse input, audio data, Perlin noise or random values. This keeps it technically separate from the other mechanics while maintaining a consistent visual style.

**Main Script**

`timebased_sketch.js`

## AI Acknowledgement

Generative AI tools were used by some team members for implementation assistance, code explanation, debugging, code organisation and documentation. Individual uses are described below.

### User Input – Senhuan Huang

- **AI tool used:** ChatGPT and Codex
- **What it was used for:** Explaining p5.js functions, reviewing the transparency logic, and helping debug the integration with the main sketch.
- **How the assisted code works:** changeimagetransparency() fades in that character's colour layer on first hover, then uses a sine wave and lerp() to vary its opacity after the cursor leaves.
- **How the code was reviewed or changed:** I adjusted the logic for determining a first time of mouse-entry(hover) event, then tested in the browser that each character responds when the cursor enters and leaves its area.

### Audio – Xinya Huang

- **AI tool used:** ChatGPT 
- **What it was used for:** ChatGPT was used to help me understand the IDEA9103 Week 10 audio tutorial and the external p5.js audio visualiser tutorial. It also helped translate my code comments into English and check the code for potential errors.
- **How the assisted code works:** The code uses p5.FFT to analyse audio data and color data. 
- **How the code was reviewed or changed:** I reviewed the explanations and checked the code through repeated testing in VS Code. I adjusted the waveform radius, colour palette, particle movement and glow effects across several iterations, and tested the results before group integration.

### Perlin Noise and Randomness – Runqing Tian

- **AI tools used:** ChatGPT and Codex (OpenAI).

- **What they were used for:** I provided ChatGPT with my own concept drawings and asked how to achieve the intended bubble effect in p5.js. ChatGPT assisted with the more complex implementation, including the grain positioning and time-based animation updates.

- **How the assisted code works:** `updateBubble()` samples noise along a circular path using `sin()` and `cos()`, while an advancing time coordinate makes the outline change smoothly. `deltaTime` controls this progression, with a capped time step to limit sudden changes. `drawBubble()` overlays 64 scaled outlines and uses `exp()` and `pow()` to control their opacity, producing a soft rim. The grains retain their initial random properties, while `lerp()` calculates their radial positions from neighbouring outline samples so they follow the changing shape.

- **My contribution:** I developed the visual concept through my own drawings and wrote the basic variables and simple functions. The website called: "W3schools", https://www.w3schools.com/, The YouTube channel called: "The Coding Train", https://www.youtube.com/@TheCodingTrain and ChatGPT supported the implementation of the more complex effects described above.

- **How the code was reviewed or changed:** I made several revisions or adjustments to the style and color of the bubbles to make them more in line with the styles of the team members, and used Codex (OpenAI) to check for any errors in the code, especially in `perlin_main_sketch.js and perlin-layer2.js`.

### Time-based Interaction – Leona Li

ChatGPT was used to assist with planning, developing, explaining and debugging parts of the Time-based mechanic.

It assisted with:

- Structuring the `CharacterTimeline` and `ThoughtIcon` classes
- Organising the fixed-offset timelines for Character A and Character B
- Organising the fifteen-second sequence into five visual stages
- Developing the grayscale-to-colour transition
- Improving variable names, comments and code organisation

The Time-based mechanic uses `millis()` to measure elapsed time from the beginning of the artwork.

Character A first begins after three seconds, while Character B first begins after 10.5 seconds. Each character converts the shared time into its own local time and repeats a fifteen-second sequence.

`stageFromTime()` converts the local time into Reveal, Active, Focus, Settle or Dissolve. Each `ThoughtIcon` then updates its opacity, colour, movement, scale, focus and position according to the current stage.

The AI-assisted code was reviewed, tested, adjusted and integrated by Leona Li.

### Visual Asset Authorship

All final image assets were designed and created by the team. No generative AI image generator was used to create or modify the final background, character illustrations or thought-icon images.

The visual concepts, colour choices and art direction were developed by the team. Some code used to implement procedural effects received AI assistance, as documented in the AI Acknowledgement section.

| Visual Element | Creation Method | Use in the Project |
|---|---|---|
| Background | Designed and illustrated by Xinya Huang | Establishes the cosmic and dreamlike environment |
| Character A | Designed and illustrated by Leona Li | Represents Reality and Pressure |
| Character B | Designed and illustrated by Leona Li | Represents Memory and Imagination |
| Thought icons | Designed and illustrated by Leona Li | Represent the thoughts, memories and responsibilities inside each character |
| Character colour and transparency effect | Designed by Senhuan Huang and implemented with p5.js | Reveals the colour layers and creates the breathing-opacity effect |
| Audio circles and particles | Designed by Xinya Huang and implemented with p5.js | Visualise waveform data, audio energy and particle movement |
| Perlin noise bubbles | Designed by Runqing Tian and implemented with p5.js | Produce continuously changing frosted bubble forms |
| Time-based icon animation | Designed by Leona Li and implemented with p5.js | Controls the icons’ appearance, colour, movement, focus and disappearance |

The project was visually inspired by the digital artworks of Arthur Machado, but the team did not copy or directly reuse visual assets from his artworks.

### References

- Colorful Coding. (2021, March 1). *Code an audio visualizer in p5.js from scratch | Coding Project #17*         [Video]. YouTube. https://www.youtube.com/watch?v=uk96O7N1Yo0
- Liude Dingdianshi. (2026, July 14). A colourful ring that breathes with music in p5.js [Video]. Xiaohongshu.    https://www.xiaohongshu.com/explore/6a556c58000000000f030883
- Machado, A. (2015). In Natura [Databend artwork]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2015). Sin título [Databend artwork]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2016). New DLA [3D model]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2016). Nobody H Me [3D model]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Vivi S. (2024, December 16). p5.js sound noise [Video]. Xiaohongshu. https://www.xiaohongshu.com/explore/675f05dd000000000600f2f3
- Yangou Nengliang Wuqiong. (2026, July 22). Audio visualisation [Video]. Xiaohongshu. https://www.xiaohongshu.com/explore/6a60c3b6000000000f01611a
- Shrimpnose, & Joe Nora. (2021). Light leaks (feat. Allem Iversom) [Song]. On Between dunes EP. Friends of Friends Music. https://shrimpnose.bandcamp.com/album/between-dunes-ep
    
### Perlin Noise and Randomness References

- p5.js. `noiseSeed()`. https://p5js.org/reference/p5/noiseSeed/
- p5.js. `randomSeed()`. https://p5js.org/reference/p5/randomSeed/
- W3Schools. JavaScript Functions. https://www.w3schools.com/js/js_functions.asp
- W3Schools. JavaScript Arrays. https://www.w3schools.com/js/js_arrays.asp
- W3Schools. JavaScript For Loop. https://www.w3schools.com/js/js_loop_for.asp
- The Coding Train. Perlin Noise Detail in p5.js. https://thecodingtrain.com/tracks/noise/noc/perlin/perlin-noise-detail

### Time-based Interaction References

- p5.js. `millis()`. https://p5js.org/reference/p5/millis/
- p5.js. `lerp()`. https://p5js.org/reference/p5/lerp/
- p5.js. `createImage()`. https://p5js.org/reference/p5/createImage/
- p5.js. `drawingContext`. https://p5js.org/reference/p5/drawingContext/
- MDN Web Docs. `Object.freeze()`. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
- Khronos Group. `smoothstep`. https://registry.khronos.org/OpenGL-Refpages/gl4/html/smoothstep.xhtml

## Team Members

| Team Member | Mechanic |
|---|---|
| Senhuan Huang·550464143·shua0181 | User Input |
| Xinya Huang·550836030·xhua0007 | Audio |
| Runqing Tian· 550826916·rtia0370 | Perlin Noise and Randomness |
| Leona Li·550795771·yuli0890 | Time-based |
