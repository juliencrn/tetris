/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Styles } from '../../common/types'

import { getRandomShapeOptions } from './utils'
import {
    createShape,
    resetGame,
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
} from './module'

const style: Styles = {
    flex: {
        mb: 3,
        justifyContent: 'center',
    },
}

const MenuBar: FC<{}> = () => {
    const dispatch = useDispatch()

    const handleNewShape = () => {
        dispatch(createShape(getRandomShapeOptions()))
    }

    const handleReset = () => {
        dispatch(resetGame())
    }

    enum KeyCode {
        left = 37,
        right = 39,
        down = 40,
        top = 38,
    }

    function downHandler({ keyCode }: { keyCode: number }) {
        switch (keyCode) {
            case KeyCode.left:
                dispatch(moveLeft())
                break
            case KeyCode.right:
                dispatch(moveRight())
                break
            case KeyCode.down:
                dispatch(moveBottom())
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
        window.addEventListener('keydown', downHandler)
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Flex sx={style.flex}>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleNewShape}>New Shape</Button>
        </Flex>
    )
}

export default MenuBar
