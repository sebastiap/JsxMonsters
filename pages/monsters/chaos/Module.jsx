import Link from 'next/link'
import {useState} from 'react'
import styles from "./chaos.module.css";

// FontAwesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

// Needs content and Onclick properties to work properly.

function Module(props) {
const [animated, setAnimated] = useState(false);
  return (
    <div className={animated ? `${styles.module} ${styles.clicked}` : `${styles.chaosmodule}`}
    onClick={() => setAnimated(() => true, props.onClick())}
    onAnimationEnd={() => setAnimated(() => false)}
    >
      {props.content}
      <FontAwesomeIcon icon={faEye} />

      </div>
  )
}

export default Module