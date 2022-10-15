
// Next Route
import Link from 'next/link'

// React useState
import {useState} from 'react'
// FontAwesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// My own Components
import Module from './Module'

// My own styles
import styles from "./chaos.module.css";


// Hash Map 
// What 2 numbers 
var nums = [2,5,11,15,44,1,7];
var target = 9

var prevnums = []

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
  setHits(hits+1)
  console.log(nums.filter(num => num === value));
}

  return (
    <div className={styles.chaosglobal}>
    {hits >= 5? <div className={`${styles.chaosend} ${styles.vibrate}`}>"puf"</div> :

<>
      {nums.map((post,index) => (
        <Module
        key={index}
        content={post}
        onClick={() => dropValue(post)}>
          <FontAwesomeIcon icon="eye" />
        </Module>

      ))}
      <Module content={twoSum(nums,target)} onClick={() => console.log("Missed Hit")}/>
      </>
    }
    
      The monster received {hits} hits so far ...



    </div>
  )
}

export default Chaos