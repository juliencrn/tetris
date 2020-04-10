import { useEffect, useRef } from 'react'

/**
 * Params
 * @param {function} callback - Custom logic function
 * @param {number|null} delay - Delayed millisecond, stop if null
 *
 * @link https://overreacted.io/fr/making-setinterval-declarative-with-react-hooks/
 */

export default function useInterval(
    callback: () => void,
    delay: number | null,
) {
    const savedCallback = useRef<() => void | null>()

    // Save the last callback
    useEffect(() => {
        savedCallback.current = callback
    })

    useEffect(() => {
        function tick() {
            if (typeof savedCallback?.current !== 'undefined') {
                savedCallback?.current()
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
