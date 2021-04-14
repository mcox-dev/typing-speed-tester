import { useRef, useEffect } from 'react'

export default function useInterval(callback, delay = 1000) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    })

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }

        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
