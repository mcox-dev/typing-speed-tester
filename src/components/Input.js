import { useEffect, useRef, useState } from "react"

export default function Input({ keyDown, disabled }) {
  const [text, setText] = useState('')
  const input = useRef(null)

  useEffect(() => {
    input.current.focus();
  }, [])

  const keyDownHandler = (event) => {
    if (event.key.length === 1 && event.key.charCodeAt() >= 32 && event.key.charCodeAt() <= 126) {
      keyDown(event.key)
      setText(prev => prev + event.key)
    }
  }

  return (
    <textarea className="border w-full p-4 focus:outline-none focus:ring focus:border-blue-300 rounded"
      ref={input}
      col="10"
      row="5"
      value={text}
      onKeyDown={keyDownHandler}
      disabled={disabled}
    ></textarea>
  )
}