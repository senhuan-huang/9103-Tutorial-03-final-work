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

The characters initially appear quiet and visually restrained. After interaction, icons, particles, paths, light and movement reveal their inner worlds. The irregular liquid containers around the thought icons help them stand out against the cosmic background and make the thoughts feel unstable, alive and constantly changing.

The project does not directly reproduce Machado’s artworks. Instead, it adapts selected qualities from his visual language to create an original interactive experience.

## Interaction Instructions

1. Open the complete project folder in Visual Studio Code and run index.html using Live Server.
2. Wait for the images, icons and audio file to finish loading.
3. The Perlin noise bubbles and Time-based icon system begin automatically. They do not require a mouse click.
4. Character A’s thought icons begin three seconds after the page opens.
5. Character B’s thought icons begin 10.5 seconds after the page opens.
6. Move the cursor over either character to reveal its colour layer.
7. After a character has been hovered over once, its colour layer continues to “breathe” between lower and higher opacity in a four-second cycle.
8. Click either character to start the soundtrack and Audio visualisation.
9. Watch how the circular waveform changes colour with the audio energy. The surrounding particles move faster when the music becomes stronger.
10. The two frosted bubbles continuously change shape through Perlin noise.
11. Press R to restart the Time-based icon timelines.

### Additional Controls

- **Mouse hover: Reveals the colour layer of the character under the cursor. After the first hover, that character continues a four-second breathing opacity cycle.
- **Mouse click: Clicking either character starts the looping soundtrack and Audio visualisation. Clicking outside both characters does nothing.
- **Audio control: The soundtrack begins after the first valid character click because browsers require a user action before playing audio.
- **Perlin bubbles: The bubbles run automatically and do not require user input.
- **Time-based icons: The icon sequences run automatically and are not controlled by mouse input, audio, Perlin noise or random values.
## Techniques and Code Structure

The project was created with **p5.js** and combines four distinct mechanics:

1. User Input
2. Audio
3. Perlin Noise and Randomness
4. Time-based Interaction

Each mechanic is stored in a separate script file. The main `sketch.js` file brings the mechanics together and controls the shared canvas, character placement and overall drawing order.

The project uses:

- p5.js canvas drawing
- Image loading and layered composition
- Mouse interaction and character selection
- Audio analysis and sound-reactive visuals
- Perlin noise and random values
- Frame-based timing
- Classes and objects
- Arrays of visual elements
- Smooth interpolation
- Trigonometric movement
- Custom shapes using vertices
- Responsive canvas scaling
- Modular JavaScript files

### Project Structure

The final code integration was accomplished by Senhuan Huang within the team.

```text
INTERIOR-DISTANCE/
├── index.html
├── style.css
├── sketch.js
├── input-control.js
├── audio-mechanic.js
├── perlin-layer1.js
├── timebased_sketch.js
├── assets/
│   ├── images/
│   └── audio/
├── README.md
├── libraries
└── .gitignore
```

## How the Four Mechanics Work Together

The four mechanics share the same canvas but have different technical responsibilities.

- **User Input** detects when the cursor moves over the left or right character. Hovering gradually reveals that character’s colour layer. After the first hover,  sin(), millis() and lerp() create a repeating four-second breathing effect.
- **Audio** begins after the viewer clicks either character. A p5.FFT analyser reads the energy between 20 and 200 Hz. The audio energy changes the circular waveform colour, the dark overlay and the speed of the particles.
- **Perlin Noise and Randomness** runs automatically. Perlin noise continuously changes the outlines of two translucent bubbles. Seeded random values create fixed grain positions, so the texture remains stable instead of flickering.
- **Time-based Interaction**also runs automatically. Character A begins after three seconds and Character B begins after 10.5 seconds. Each character then repeats its own fifteen-second thought-icon sequence.

The mechanics remain technically separate, but their effects are layered together to create one visual experience.
## Mechanic Ownership

| Team Member | Mechanic | Script File | Responsibility |
|---|---|---|---|
| Senhuan Huang | User Input | `[Input-control,js]` | Detects mouse hover over each character and controls the fade-in. Besides, the people will continuously adjust the color gradient, each circuler is 4s,just like breath. |
| Xinya Huang | Audio | `[audio-mechanic.js]` | Uses FFT energy and waveform data to control the circular audio visualisation, colour transitions, dark overlay and particle speed.] |
| Runqing Tian | Perlin Noise and Randomness | `[perlin-layer1.js]` | Uses Perlin noise to animate two frosted bubble outlines and seeded random values to create stable grain textures.] |
| Leona Li | Time-based Interaction |  `[timebased_sketch.js]` | Automatically controls the delayed start and repeating fifteen-second visual life cycle of each character’s thought icons. |

## Individual Mechanic Details

### User Input – Senhuan Huang

**Purpose**

[The user input mechanic lets users reveal each character's colour by moving the mouse over it.]

**Interaction**

[Move the cursor over either character. The characters respond independently. After a character has been hovered over once, its colour continues to change when the hover moves away.]

**Visual Result**

[A colour image gradually appears over the white and grey character. When the mouse leaves, that colour layer gently "breath" between lower and higher opacity.]

**Main Techniques**

- ["mouseMovedInput()" checks the mouse position and sets "mousehover" to "0" for the left character, "1" for the right character, or "-1" when neither is hovered over.]
- [Separate hover areas identify the two characters.-- "leftHoverOnce" and "rightHoverOnce" remember whether each character has been hovered over.]
- ["changeimagetransparency()"uses "sin()", "millis()", and "lerp()"to change the colour layer's opacity over time.]
- ["drawInput()"and "drawInput2()" draw the background and character image layers on the canvas, independently. This approach is better suited for main sketches and also facilitates merging with sketches created by others.]

**Main Script**

`[input-control.js]`

---

### Audio – Xinya Huang

**Purpose**

[EXPLAIN WHAT THE AUDIO MECHANIC CONTRIBUTES TO THE CONCEPT]

**Audio Source**

[ADD THE TRACK, RECORDING OR SOUND SOURCE]

**Visual Result**

[EXPLAIN WHICH VISUAL PROPERTIES RESPOND TO THE AUDIO]

**Main Techniques**

- [ADD AUDIO ANALYSIS TECHNIQUE]
- [ADD LEVEL OR FREQUENCY TECHNIQUE]
- [ADD IMPORTANT VARIABLES OR CLASSES]

**Main Script**

`[ADD EXACT SCRIPT FILENAME]`

---

### Perlin Noise and Randomness – Runqing Tian

**Purpose**

[EXPLAIN WHAT THE NOISE AND RANDOMNESS MECHANIC CONTRIBUTES TO THE CONCEPT]

**Visual Result**

[EXPLAIN WHICH ELEMENTS USE NOISE AND WHICH USE RANDOM VALUES]

**Main Techniques**

- `noise()` – [EXPLAIN HOW IT IS USED]
- `random()` or `randomSeed()` – [EXPLAIN HOW IT IS USED]
- [ADD IMPORTANT VARIABLES OR CLASSES]

**Main Script**

`[ADD EXACT SCRIPT FILENAME]`

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

- `millis()` measures the time since the mechanic was initialised.
- `cycleStartMillis` stores the starting point of the complete Time-based system.
- `stageFromTime()` maps the local time to Reveal, Active, Focus, Settle or Dissolve.
- `lerp()` creates smooth changes in opacity, colour, glow, scale and position.
- `sin()` and `cos()` create repeatable local movement and liquid deformation.
- `beginShape()` and `curveVertex()` create irregular liquid containers.
- `drawingContext.` shadowBlur creates the glow around the focus icon.
- `CharacterWorld` manages one character’s timer, stage and icon collection.
- `ThoughtIcon` stores and updates the visual state of one icon.
- Each character owns five ThoughtIcon objects.

The movement does not use random values, Perlin noise or audio data. This keeps the Time-based mechanic technically separate from the other mechanics while maintaining a consistent visual style.

**Main Script**

`timebased_sketch.js`

## AI Acknowledgement

Generative AI tools were used during the development process for selected concept exploration, visual references, code assistance, debugging and documentation.

Each team member must describe their own AI use below. AI-generated or AI-assisted code must also be acknowledged in comments inside the relevant script file.

### User Input – Senhuan Huang

- **AI tool used:** [ChatGPT and Codex]
- **What it was used for:** [Explaining p5.js functions, reviewing the transparency logic, and helping debug the integration with the main sketch.]
- **How the assisted code works:** [changeimagetransparency() fades in that character's colour layer on first hover, then uses a sine wave and lerp() to vary its opacity after the cursor leaves.]
- **How the code was reviewed or changed:** [ I adjusted the logic for determining a first time of mouse-entry(hover) event, then tested in the browser that each character responds when the cursor enters and leaves its area.]

### Audio – Xinya Huang

- **AI tool used:** [TO BE COMPLETED]
- **What it was used for:** [TO BE COMPLETED]
- **How the assisted code works:** [TO BE COMPLETED]
- **How the code was reviewed or changed:** [TO BE COMPLETED]

### Perlin Noise and Randomness – Runqing Tian

- **AI tool used:** [TO BE COMPLETED]
- **What it was used for:** [TO BE COMPLETED]
- **How the assisted code works:** [TO BE COMPLETED]
- **How the code was reviewed or changed:** [TO BE COMPLETED]

### Time-based Interaction – Leona Li

ChatGPT was used to assist with planning, developing, explaining and debugging parts of the Time-based mechanic.

It assisted with:

- Structuring the `CharacterWorld` and `ThoughtIcon` classes
- Creating independent timers for Character A and Character B
- Organising the thirteen-second sequence into five visual stages
- Improving variable names, comments and code organisation

The Time-based code measures the elapsed frames after a character is activated. The elapsed time is converted into Outline, Colour, Expansion, Focus or Dissolve. Each `ThoughtIcon` then updates its opacity, colour, glow, scale, position, motion and deformation according to the current stage.

### Visual Asset Authorship

All visual assets used in the final artwork were designed and created by the team. No generative AI was used to produce or modify the final background, characters, thought icons, circles, bubbles, particles or textures.

| Visual Element | Creation Method | Use in the Project |
|---|---|---|---|
| Background | [Designed and created by Xinaya Huang] | [Establishes the cosmic and dreamlike environment of the artwork] |
| Character A | [Designed and created by Leona Li] | [Represents Reality and Pressure] |
| Character B | [Designed and created by Leona Li] | [Represents Memory and Imagination] |
| Thought icons | [Designed and created by Leona Li] | [Represent the thoughts, memories and responsibilities inside each character] |
| Perlin noise bubbles | [Designed and created by Runqing Tian] | [Produce continuously changing frosted bubble forms] |
The project was visually inspired by the digital artworks of Arthur Machado, but the team did not copy or directly reuse visual assets from his artworks.

### References

- Colorful Coding. (2021, March 1). Code an audio visualizer in p5js (from scratch) | Coding Project #17 [Video]. YouTube. https://www.youtube.com/watch?             v=uk96O7N1Yo0
- Liude Dingdianshi. (2026, July 14). A colourful ring that breathes with music in p5.js [Video]. Xiaohongshu.                                                        https://www.xiaohongshu.com/explore/6a556c58000000000f030883
- Machado, A. (2015). In Natura [Databend artwork]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2015). Sin título [Databend artwork]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2016). New DLA [3D model]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Machado, A. (2016). Nobody H Me [3D model]. [ANTI]MATERIA. https://anti-materia.org/arthur-machado-eng
- Vivi S. (2024, December 16). p5.js sound noise [Video]. Xiaohongshu. https://www.xiaohongshu.com/explore/675f05dd000000000600f2f3
- Yangou Nengliang Wuqiong. (2026, July 22). Audio visualisation [Video]. Xiaohongshu. https://www.xiaohongshu.com/explore/6a60c3b6000000000f01611a
    


## Team Members

| Team Member | Mechanic |
|---|---|
| Senhuan Huang | User Input |
| Xinya Huang | Audio |
| Runqing Tian | Perlin Noise and Randomness |
| Leona Li | Time-based Interaction |
