/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
    createShape,
    resetGame,
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
} from '../game/actions'

const MenuBar: FC<{}> = () => {
    const dispatch = useDispatch()

    /*
     * Game control functions
     */

    const handleNewShape = () => {
        dispatch(createShape())
    }

    const handleReset = () => {
        dispatch(resetGame())
    }

    /*
     * Game Play functions
     */

    const handleRotate = () => {
        dispatch(rotate())
    }

    const handleMoveLeft = () => {
        dispatch(moveLeft())
    }

    const handleMoveRight = () => {
        dispatch(moveRight())
    }

    const handleMoveBottom = () => {
        dispatch(moveBottom())
    }

    return (
        <Flex
            sx={{
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                mb: 3,
            }}
        >
            <Flex>
                <Button onClick={handleRotate}>Rotate</Button>
                <Button onClick={handleMoveLeft}>Left</Button>
                <Button onClick={handleMoveRight}>Right</Button>
                <Button onClick={handleMoveBottom}>Go Bottom</Button>
            </Flex>
            <Flex>
                <Button>Play</Button>
                <Button>Pause</Button>
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleNewShape}>New Shape</Button>
            </Flex>
        </Flex>
    )
}

export default MenuBar
