## Chaos Monster

### HTML Concepts

### CSS Concepts
 * Animation (https://www.w3schools.com/css/css3_animations.asp) 
 * Custom Animations (https://xsgames.co/animatiss/)
 * Gradients (https://cssgradient.io/gradient-backgrounds/)
 * CSS Grid (https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties)
 
### JS Concepts
 * Map 
 * Filter (Array.prototype.filter())

### React Concepts
 * useState

### Algorithm Concepts
 * Lowest Common Ancestor of a Binary Search Tree (https://www.youtube.com/watch?v=gs2LMfuOR9k)
 * Two-sum locator on an Array
 * Shuffle an Array 
 
### Cultural Concepts & References
KHAOS (Chaos) was the first of the primordial gods (protogenoi) to emerge at the dawn of creation. Chaos the very first of all, the origin of everything, the empty, unfathomable space at the beginning of time.

Other Chaotic entities are:
 * Eris (Greek)
 * Apophis (Egyptian)
 * Tiamat (Mesopotamian)
 * Loki (Norse)
 * Balor (Celtic)

### Other Concepts

## Creation Hardships & Solutions
Since it was the first monster created, several quirks and forgotten knowledge was faced. The

### Force an Animation to conclude 
 * Using onClick and onAnimationEnd with useState to change classes dinamically

### Making a Css Animation Loop Forever
animation-iteration-count: infinite;

### Passing several styled classes to a div
 * Using the notation `$` f.e :  <div className={animated ? `${styles.module} ${styles.clicked}` : `${styles.chaosmodule}`}

 ### Passing some extra code on a prop to execute onClick (Module)
 * In the component : onClick={() => setAnimated(() => true, props.onClick())}
