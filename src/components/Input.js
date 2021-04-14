import { useState } from "react"

export default function Input({ keyDown, disabled }) {
  const [text, setText] = useState('')

  const keyDownHandler = (event) => {
    if (event.key.length === 1 && event.key.charCodeAt() >= 32 && event.key.charCodeAt() <= 126) {
      keyDown(event.key)
      setText(prev => prev + event.key)
    }
  }

  return (
    <textarea col="10" row="5" value={text} onKeyDown={keyDownHandler} disabled={disabled}></textarea>
  )
}