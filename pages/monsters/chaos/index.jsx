import Link from 'next/link'
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

var dropValue = (value) => {

  console.log(nums.filter(num => num === value));
}


function Chaos({ }) {
  return (
    <div className={styles.chaosglobal}>
      {nums.map((post,index) => (
        <div className={`${styles.chaosmodule} ${styles.vibrate}`}  key={index}
        onClick={() => dropValue(post)}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>{post}</a>
          </Link>
        </div>
      ))}
      <div className={`${styles.chaosmodule} ${styles.vibrate}`} >
        {twoSum(nums,target)}
      </div>
    </div>
  )
}

export default Chaos