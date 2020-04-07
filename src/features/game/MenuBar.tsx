/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../app/store'
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
    const game = useSelector((state: RootState) => state.game)

    const canMove = !!game?.currentShape

    /*
     * Game control functions
     */

    const handleNewShape = () => {
        dispatch(createShape(getRandomShapeOptions()))
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
        <Fragment>
            <Flex sx={style.flex}>
                <Button disabled={!canMove} onClick={handleRotate}>
                    Rotate
                </Button>
                <Button disabled={!canMove} onClick={handleMoveLeft}>
                    Left
                </Button>
                <Button disabled={!canMove} onClick={handleMoveRight}>
                    Right
                </Button>
                <Button disabled={!canMove} onClick={handleMoveBottom}>
                    Go Bottom
                </Button>
            </Flex>

            <Flex sx={style.flex}>
                <Button>Play</Button>
                <Button>Pause</Button>
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={handleNewShape}>New Shape</Button>
            </Flex>
        </Fragment>
    )
}

export default MenuBar
