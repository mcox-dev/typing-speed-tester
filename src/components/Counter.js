import React, { useEffect, useRef, useState } from 'react'
import useInterval from './../hooks/useInterval'

export default function Counter() {
    const [count, setCount] = useState(0)
    useInterval(() => {
        setCount(count + 1)
    }, 1000)

    return <h1>{count}</h1>
}