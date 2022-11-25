## Sassquatch Monster

### HTML Concepts

### CSS Concepts
 * CSS Grid (https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties)
 * Box-shadow (https://egghead.io/lessons/css-create-basic-effects-with-css-box-shadow)
 * Object-fit  (An element adjust to the size of its father https://egghead.io/lessons/)flexbox-create-an-automatically-responsive-flexbox-gallery)
 * Sass (https://sass-lang.com/guide)

 
### JS Concepts
 * Map 
 * Filter (Array.prototype.filter())

### React Concepts

### Algorithm Concepts
 
### Cultural Concepts & References
 * Sasquatch - Another name for Bigfoot, an ape-like creature of North American folklore.

### Other Concepts

## Creation Hardships & Solutions
I wanted to use Sass for this one.

### Converting Sass into Css
 * Executing the following command :
 $ sass --watch /d/Programacion/React/JsxMonsters/pages/monsters/sassquatch/styles.sass /d/Programacion/React/JsxMonsters/pages/monsters/sassquatch/sassquatch.module.css

### Converting Sass vs Scss Syntax
Sass has two syntaxes.The SCSS syntax (.scss) is used most commonly.
 * Sass is more like python , using only indentation.
 * Scss is more like vanilla css.

### Running Sass in a script with Next
I had to modify the script "npm run demo" to run both commands (Sass and Next). I also had to :
 * Run the sass command with relative path.
 * Made a separate command to run Sass (for better reading).
 * Add "start" at each command to run in a separate prompt.

