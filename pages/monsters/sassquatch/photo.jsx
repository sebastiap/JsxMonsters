// React useState
import {useState} from 'react'

// My own styles
import styles from "./sassquatch.module.css";

function Photo({ }) {

  return (
    <div >
    <ul className={styles.gallery}>
      <li className={styles.item}>
        <img src="https://i.cbc.ca/1.4362553.1572547255!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/bigfoot-film-patterson-gimlin.jpg"/>
      </li> 
      <li className={styles.item}>
        <img src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/07/23/60fadb964ea37.jpeg"/>
      </li> 
      <li className={styles.item}>
        <img src="https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/0EHnoj-CA6LNDUVS21eHweiFZGw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/DVZYVXMV3NHF7L35IJMSQMR6BM.jpg"/>
      </li> 
      <li className={styles.item}>
        <img src="https://i0.wp.com/dailyyonder.com/wp-content/uploads/2021/12/Harlan-county.png?fit=640%2C405&ssl=1"/>
      </li> 
      <li className={styles.item}>
        <img src="https://mynbc15.com/resources/media/ceb05bb4-a2c3-4b35-b2ae-61464b3d70f5-largeScale_278392803_663746368187717_5823070215490840546_n.jpeg?1650054974304"/>
      </li> 
    </ul>
    </div>
  )
}

export default Photo