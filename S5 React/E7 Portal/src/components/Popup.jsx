import React from 'react'
import {createPortal} from 'react-dom'

const Popup = ({Copied}) => {
  return createPortal(
    <section>
        {Copied && (<div style={{position: 'absolute', bottom:"3rem"}}>Copied to clipboard</div>)}
    </section>,
    document.querySelector('#popup')
  )
}

export default Popup