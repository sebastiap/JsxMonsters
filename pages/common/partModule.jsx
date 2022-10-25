import Link from 'next/link'
import {useState} from 'react'
import styles from "./parts.module.css";

// FontAwesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

// Needs content and Onclick properties to work properly.





function Module(props) {
const [animated, setAnimated] = useState(false);


var contenido = [];
if (props.content != undefined) { for (var i = 0; i < props.content; i++) {
  contenido.push(<FontAwesomeIcon style={{fontSize:"15px"}} icon={faEye} />)
        }
        }


  return (
    <div className={animated ? `${styles.module} ${styles.clicked}` : `${styles.partmodule}`}
    onClick={() => setAnimated(() => true, props.onClick())}
    onAnimationEnd={() => setAnimated(() => false)}
    >

    {props.type === "eye" ?<FontAwesomeIcon icon={faEye} />: props.content }
      
      {/* {contenido.map(ojo => ojo)} */}
      {/* <FontAwesomeIcon icon={faEye} /> */}

      </div>
  )
}

export default Module