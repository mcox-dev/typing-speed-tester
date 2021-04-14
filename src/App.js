import Text from './components/Text'
import Input from './components/Input'
import UserForm from './components/UserForm'
import StatusBar from './components/StatusBar'
import { useEffect, useState } from 'react'
import useInterval from './hooks/useInterval'
import group from './utils/group'
import avg from './utils/avg'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [user, setUser] = useLocalStorage('name', null)
  const [second, setSecond] = useState(0)
  const [position, setPosition] = useState(0)
  const text = 'Este texto es de prueba'
  const [textSplitted, setTextSplitted] = useState(text.split('').map(letter => ({state: null, value: letter, second: null})))
  const [ended, setEnded] = useState(false)
  const [keysBySecond, setKeysBySecond] = useState(null)

  useEffect(() => {
    if (ended) {
      const grouped = group(textSplitted, (letter => letter.second))
      const kbs = avg(Object.keys(
        grouped
      )
      .map(second => grouped[second])
      .map(group => group.length))

      setKeysBySecond(kbs)
    }
  }, [ended])

  useInterval(() => {
    setSecond(prev => prev + 1)
  }, 1000)

  const keyDownHandler = key => {
    console.log(key, textSplitted[position].value)
    setTextSplitted(prev => prev.map((t, idx) => {
      if (idx === position) {
        return {
          ...t,
          state: key === prev[position].value,
          second: second
        }
      }

      return {...t}
    }))
    console.log(textSplitted)
    setEnded(position === textSplitted.length - 1)
    setPosition(prevPosition => prevPosition + 1)
  }

  if (! user) {
    return (
      <UserForm onSave={setUser} />
    )
  }

  return (
    <div className="container mx-auto my-4">
      <StatusBar position={position} currentLetter={!ended && textSplitted[position].value || null} ended={ended} keysBySecond={keysBySecond} />
      <Text text={textSplitted} />
      <Input keyDown={keyDownHandler} disabled={ended} />
    </div>
  );
}

export default App;
