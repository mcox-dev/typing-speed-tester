export function Key({ letter }) {
  const className = letter.state === null
    ? 'bg-gray-200'
    : letter.state === true
      ? 'bg-green-100'
      : 'bg-red-100'

  return (
    <span
      className={className}
    >{letter.value}</span>
  )
}

export default function Text({ text }) {
  return (
    <div className="my-4 bg-gray-200 p-4">
      {text.map((letter, index) => <Key letter={letter} key={index} />)}
    </div>
  )
}