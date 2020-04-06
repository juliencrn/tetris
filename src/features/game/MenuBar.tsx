/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import {
    createShape,
    resetGame,
    rotate,
    moveLeft,
    moveRight,
    moveBottom,
} from './module'
import { getRandomShape, getShape } from './shapes'
import { ShapeType, Styles, ShapeOptions } from '../../common/types'
import { unit } from '../../common/config'

const style: Styles = {
    flex: {
        mb: 3,
        justifyContent: 'center',
    },
}

const MenuBar: FC<{}> = () => {
    const dispatch = useDispatch()

    /*
     * Game control functions
     */

    const handleNewShape = () => {
        dispatch(createShape(getRandomShape()))
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

    const handleDraw = (type: ShapeType) => {
        const options: ShapeOptions = {
            type,
            quarter: '0',
            location: { x: 4 * unit, y: 0 },
        }
        dispatch(createShape(getShape(options)))
    }

    return (
        <Fragment>
            <Flex sx={style.flex}>
                <Button onClick={handleRotate}>Rotate</Button>
                <Button onClick={handleMoveLeft}>Left</Button>
                <Button onClick={handleMoveRight}>Right</Button>
                <Button onClick={handleMoveBottom}>Go Bottom</Button>
            </Flex>

            <Flex sx={style.flex}>
                <Button>Play</Button>
                <Button>Pause</Button>
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleNewShape}>New Shape</Button>
            </Flex>

            <Flex sx={style.flex}>
                <Button onClick={() => handleDraw('I')}>I</Button>
                <Button onClick={() => handleDraw('T')}>T</Button>
                <Button onClick={() => handleDraw('L')}>L</Button>
                <Button onClick={() => handleDraw('Z')}>Z</Button>
                <Button onClick={() => handleDraw('S')}>S</Button>
                <Button onClick={() => handleDraw('O')}>O</Button>
                <Button onClick={() => handleDraw('J')}>J</Button>
            </Flex>
        </Fragment>
    )
}

export default MenuBar
