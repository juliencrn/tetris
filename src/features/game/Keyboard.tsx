import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
    incrementScore,
} from './module'

enum KeyCode {
    left = 37,
    right = 39,
    down = 40,
    top = 38,
}

const Keyboard: FC<{}> = () => {
    const dispatch = useDispatch()

    function handleKeyPress({ keyCode }: { keyCode: number }) {
        switch (keyCode) {
            case KeyCode.left:
                dispatch(moveLeft())
                break
            case KeyCode.right:
                dispatch(moveRight())
                break
            case KeyCode.down:
                dispatch(moveBottom())
                dispatch(incrementScore(2))
                break
            case KeyCode.top:
                dispatch(rotate())
                break

            default:
                break
        }
    }

    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return null
}

export default Keyboard
