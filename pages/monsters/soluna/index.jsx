
// Next Route
import Link from 'next/link'

// React useState
import {useState} from 'react'


// My own Components
import Module from './Module'

// My own styles
import styles from "./octopus.module.css";


// Hash Map 
// What 2 numbers 
var originalnums = [2,5,11,15,44,1,7];
var target = 9

var prevnums = []

// a function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
var nums = shuffle(originalnums)

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
       var diff = target - nums[i]
            if(prevnums.includes(diff)){
                return [prevnums.indexOf(diff),i]
        }
         prevnums[i] =nums[i]
        
    }
    return [-1,-1];
};
var weakpoints = twoSum(nums,target);

var detectValue = (value) => {

  for (var i=0;i<nums.length;i++) {    
    if (nums.i === value) {
      return false;
    }}
}

function Chaos({ }) {

  
const [hits,setHits] = useState(0);
const [partStatus,setPartStatus] = useState(["fine"]);

var dropValue = (value) => {
  let valuedrop = 1;
  // the index starts at 0
  if (value === weakpoints[0] || value === weakpoints[1]  ){
    valuedrop = 2;
  }
  setHits(hits+valuedrop)
  // console.log(nums.filter(num => num === value));
  console.log(value,weakpoints,weakpoints[0],valuedrop)
}
var replay = () => {setHits(0);shuffle(nums);weakpoints = twoSum(nums,target); }

  return (
    <div className={styles.chaosglobal}>
      <div className={styles.chaosgrid}>
        {hits >= 15? <div className={`${styles.chaosend} ${styles.vibrate}`}> <p> - </p> </div> :

    <>
          {nums.map((post,index) => (
            <Module
            key={index}
            content={post}
            onClick={() => dropValue(index)}>
          
            </Module>

          ))}
          <Module content={twoSum(nums,target)} onClick={() => console.log("Missed Hit")}/>
          </>
        }
      </div>
      
      {hits < 15? <>
      The monster received {hits} hits so far ...
      {/* For the player the index starts at 1 */}
      <p>Its weak points are {weakpoints[0] +1 } and {weakpoints[1] +1}</p>
      </>
      :<>
        <p>The monster is dead</p>
        <button content={"replay?"} onClick={() =>replay()}>Replay?</button>
      </> 
      }
    </div>

  )
}

export default Chaos