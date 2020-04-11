/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { FC, Fragment, useEffect } from 'react'
import { Grid, jsx, Flex, Box, Heading } from 'theme-ui'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'

import useInterval from '../../common/hooks/useInterval'
import { Styles } from '../../common/types'
import { canvasSize, cols } from '../../common/config'
import PostIt from '../../common/components/PostIt'

import Canvas from '../canvas/Canvas'

import MenuBar from './MenuBar'
import Keyboard from './Keyboard'
import Statistics from './Statistics'
import { getRandomShapeOptions } from './utils'
import * as actions from './module'

const style: Styles = {
    canvasWrap: {
        ...canvasSize,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    aside: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: 4,
    },
    gameOver: {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
    },
}

const Game: FC<{}> = () => {
    // todo : make game-over dynamic
    const isGameOver = false
    const game = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    // Merge archived shapes with currentShape
    const allShapes = game.currentShape
        ? [...game.shapes, game.currentShape]
        : game.shapes

    const createNewShape = () => {
        dispatch(actions.createShape(getRandomShapeOptions()))
    }

    const toggleGaming = () => {
        dispatch(game.isGaming ? actions.resetGame() : actions.newGame())
    }

    const togglePlay = () => {
        dispatch(game.isTimeRunning ? actions.pause() : actions.play())
    }

    // Launch the timer
    useInterval(
        () => {
            dispatch(actions.setTime(game.tick + 1))
        },
        game.isTimeRunning ? 600 : null,
    )

    // Move shape to bottom using timer
    useEffect(() => {
        dispatch(actions.moveBottom())
    }, [game.tick])

    // Check if has entire line and remove it
    useEffect(() => {
        const countByY: Record<string, number> = {}
        game.shapes.forEach(({ rects }) => {
            rects.forEach(({ y }) => {
                countByY[y] = countByY[y] ? countByY[y] + 1 : 1
                if (countByY[y] === cols) {
                    dispatch(actions.removeLine(y))
                }
            })
        })
    }, [game.shapes])

    // Create the new shape
    useEffect(() => {
        if (game.isGaming && typeof game.currentShape === 'undefined') {
            createNewShape()
        }
    }, [game.isGaming, game.currentShape])

    return (
        <Fragment>
            <Keyboard />

            <Grid columns={2}>
                <Flex opacity={isGameOver ? 0.5 : 1} sx={style.canvasWrap}>
                    <Canvas shapes={allShapes} />
                    {isGameOver && (
                        <Heading sx={style.gameOver}>Game over</Heading>
                    )}
                </Flex>

                <Flex as="aside" sx={style.aside}>
                    <MenuBar
                        isGaming={game.isGaming}
                        isTimeRunning={game.isTimeRunning}
                        onTogglePlay={togglePlay}
                        onToggleGaming={toggleGaming}
                    />

                    <PostIt
                        primary="Welcome to the Tetris Game!"
                        secondary="Use keyboard arrows to move shapes and ArrowTop to rotate."
                    />

                    <Statistics
                        isTimeRunning={game.isTimeRunning}
                        isGaming={game.isGaming}
                        level={1}
                        lines={game.lines}
                    />
                </Flex>
            </Grid>
        </Fragment>
    )
}

export default Game
