import Link from 'next/link'
import styles from "./chaos.module.css";

// Hash Map 
var nums = [2,7,11,15];
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



function Chaos({ }) {
  return (
    <div ClassName={styles.chaosglobal}>
      {nums.map((post) => (
        <div ClassName={styles.chaosmodule}  key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a style={{color: 'red', textAlign: 'center'}}>{post}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Chaos