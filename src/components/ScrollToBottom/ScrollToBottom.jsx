import React from 'react'
import { useEffect, useState } from 'react'
import './scroll.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToBottom = () => {
  const [backToTopButtom, setBackTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setBackTopButton(true)
      } else {
        setBackTopButton(false)
      }
    })
  }, [])

  const scrollDown = () => {
    var objDiv = document.getElementById("about");

    window.scrollTo({
      top: objDiv.scrollHeight - 200,
      behavior: 'smooth',
    })
  }

  return (
    <div className="App">
      {backToTopButtom && (
        <button className="scroll-up object" onClick={scrollDown} 
            style={{marginBottom: "20px", transform: "rotate(180deg)", width: '100%', display: 'flex', justifyContent: 'center'}}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  )
}

export default ScrollToBottom
