/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { FC, Fragment, useEffect } from 'react'
import { Grid, jsx, Text, Flex, Box, Heading } from 'theme-ui'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'

import useInterval from '../../common/hooks/useInterval'
import { Styles } from '../../common/types'
import { canvasSize, cols } from '../../common/config'

import MenuBar from './MenuBar'
import Keyboard from './Keyboard'
import Statistics from './Statistics'
import Canvas from '../canvas/Canvas'

import { getRandomShapeOptions } from './utils'
import {
    createShape,
    resetGame,
    newGame,
    play,
    pause,
    setTime,
    moveBottom,
    removeLine,
} from './module'

const style: Styles = {
    canvasWrap: {
        ...canvasSize,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    gameOver: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
    },
    aside: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: 4,
    },
    instructionsWrap: {
        py: 4,
        px: 3,
        backgroundColor: 'primary',
        color: 'black',
        textAlign: 'center',
    },
    nextShape: {
        textAlign: 'center',
        py: 3,
    },
}

const Game: FC<{}> = () => {
    // todo : make game-over dynamic
    const isGameOver = false

    const {
        isGaming,
        isTimeRunning,
        currentShape,
        time,
        shapes,
        lines,
    } = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    const createNewShape = () => {
        dispatch(createShape(getRandomShapeOptions()))
    }

    const toggleGaming = () => {
        dispatch(isGaming ? resetGame() : newGame())
    }

    const togglePlay = () => {
        dispatch(isTimeRunning ? pause() : play())
    }

    // Launch the timer
    useInterval(
        () => {
            dispatch(setTime(time + 1))
        },
        isTimeRunning ? 1000 : null,
    )

    // Move shape to bottom using timer
    useEffect(() => {
        dispatch(moveBottom())
    }, [time])

    // Check if has entire line and remove it
    useEffect(() => {
        // 1. Count each drawn cases by lines
        const countByY: Record<string, number> = {}
        shapes.forEach(({ rects }) => {
            rects.forEach(({ y }) => {
                countByY[y] = countByY[y] ? countByY[y] + 1 : 1
            })
        })

        // 2. Remove line if all this cases are drawn
        Object.entries(countByY).forEach((item) => {
            if (item[1] === cols) {
                dispatch(removeLine(Number(item[0])))
            }
        })
    }, [shapes])

    // Create the new shape
    useEffect(() => {
        if (isGaming && typeof currentShape === 'undefined') {
            createNewShape()
        }
    }, [isGaming, currentShape])

    const allShapes = currentShape ? [...shapes, currentShape] : shapes

    return (
        <Fragment>
            <Keyboard />

            <Grid columns={2}>
                <Flex sx={style.canvasWrap}>
                    <Box mx="auto" opacity={isGameOver ? 0.5 : 1}>
                        <Canvas shapes={allShapes} />
                    </Box>
                    {isGameOver && (
                        <Heading sx={style.gameOver}>Game over</Heading>
                    )}
                </Flex>

                <Flex as="aside" sx={style.aside}>
                    <MenuBar
                        isGaming={isGaming}
                        isTimeRunning={isTimeRunning}
                        onTogglePlay={togglePlay}
                        onToggleGaming={toggleGaming}
                    />

                    <Box sx={style.instructionsWrap}>
                        <Text sx={{ fontWeight: 'heading', mb: 3 }}>
                            Welcome to the Tetris Game!
                        </Text>
                        <Text>
                            Use keyboard arrows to move shapes and ArrowTop to
                            rotate.
                        </Text>
                    </Box>

                    <Statistics level={2} time={time} lines={lines} />
                </Flex>
            </Grid>
        </Fragment>
    )
}

export default Game
