// React useState
import {useState} from 'react'
// My own styles
import styles from "./sassquatch.module.css";

function Vats({ }) {

  
const [hits,setHits] = useState(0);

var replay = () => {setHits(0);shuffle(nums);weakpoints = twoSum(nums,target); }

  return (
    <div className={styles.mathclass}>
    <main className={styles.gridwrap}>
      <div className={styles.grid}>
        <span className={styles.span}>Ape Head</span>
      </div>

      <div className={styles.grid}>
        <span className={styles.span}>Hairy Shoulder</span>
        <span className={styles.span}>Hairy Shoulder</span>
      </div>

      <div className={styles.grid}>
        <span className={styles.span}>Big Pectoral</span>
        <span className={styles.span}>Big Belly</span>
        <span className={styles.span}>Big Pectoral</span>
      </div>

      <div className={styles.grid}>
        <span className={styles.span}>Big Right Arm</span>
        <span className={styles.span}>Big Right Knee</span>
        <span className={styles.span}>Big Left Knee</span>
        <span className={styles.span}>Big Left Arm</span>
      </div>
      <div className={styles.grid}>
        <span className={styles.span}>Big Right Hand</span>
        <span className={styles.span}>Big Right Foot</span>
        <span className={styles.span}>Big Left Foot</span>
        <span className={styles.span}>Big Left Hand</span>
      </div>
    </main>
    </div>
  )
}

export default Vats;