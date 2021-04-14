export function Key({ letter }) {
    const bg = letter.state === null
        ? '#CCC'
        : letter.state === true
            ? '#00FF00'
            : '#FF0000'

    return (
        <span
            style={{
                background: bg
            }}
        >{letter.value}</span>
    )
} 

export default function Text({ text }) {
    return text.map((letter, index) => <Key letter={letter} key={index} />)
}