import ReactDom from 'react-dom'

import './index.css'

export default function Modal ({ children, onClose, isOpen }) {
  if (!isOpen) {
    return null
  }

  return (
    ReactDom.createPortal(
      <div className='Modal'>
        <div className='Modal__container'>
          <button onClick={onClose} className='Modal__close-button'>X</button>
          {children}
        </div>
      </div>
      , document.getElementById('modal'))
  )
}
