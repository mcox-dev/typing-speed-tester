import { useEffect, useRef, useState } from 'react'

export default function UserForm({ onSave }) {
  const [name, setName] = useState('')
  const input = useRef(null)

  useEffect(() => {
    input.current.focus()
  }, [])

  const handleInput = (event) => {
    setName(event.target.value)
  }

  const save = (evt) => {
    evt.preventDefault()
    if (name) {
      onSave(name)
    }
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <form onSubmit={save} className="flex container mx-auto border-b-2 border-green-500 pb-2">
        <input type="text" value={name} onChange={handleInput} className="flex-grow p-4 text-lg outline-none" ref={input} placeholder="Nombre" />
        <button type="submit" onClick={save} className="w-1/4 p-4 text-lg bg-green-500 text-white rounded">Guardar</button>
      </form>
    </div>
  )
}