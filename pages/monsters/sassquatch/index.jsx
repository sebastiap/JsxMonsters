
// Next Route
import Link from 'next/link'

// React useState
import {useState} from 'react'


// My own Components
import Photo from './photo'
import Vats from './vats'

// My own styles
import styles from "./sassquatch.module.css";
// import "./styles.css";


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

function Sassquatch({ }) {

  
const [hits,setHits] = useState(0);
const [vatsmode,setvatsMode] = useState(false)

var replay = () => {setHits(0);shuffle(nums);weakpoints = twoSum(nums,target); }

  return (
    <>
      {vatsmode? <Vats/>: <Photo/>
      }
      <div className={styles.specialdisplay}>
    <p>WARNING!</p>
    </div>
    <div className={styles.textdisplay}>
      {vatsmode? 
      <p>
      <p>Monster Detected </p> 
      <p>Prepare for Battle </p> 
      </p>
      : 
      <p>
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
      </p>
    }
    </div>
    <div className={styles.buttonwrapper}>
      <button onClick={() => setvatsMode(false)} className={styles.wait}>WAIT</button>
      <button onClick={() => setvatsMode(true)}className={styles.attack}>ATTACK</button>
      <Link href="/"><button className={styles.retreat}>RETREAT</button></Link>
    </div>
    </>
  )
}

export default Sassquatch;