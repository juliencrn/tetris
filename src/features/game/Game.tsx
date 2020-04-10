/** @jsx jsx */
import { FC, Fragment } from 'react'
import { Grid, jsx, Text, Flex, Box, Heading } from 'theme-ui'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'
import MenuBar from './MenuBar'
import Canvas from '../canvas/Canvas'
import { createShape, resetGame } from './module'
import { getRandomShapeOptions } from './utils'
import Statistics from './Statistics'
import { Styles } from '../../common/types'
import { canvasSize } from '../../common/config'
import Keyboard from './Keyboard'

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
    const game = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    const createNewShape = () => {
        dispatch(createShape(getRandomShapeOptions()))
    }

    const handleReset = () => {
        dispatch(resetGame())
    }

    const togglePlay = () => {
        console.log('toggle play')
    }

    // When a shape collides the bottom
    // It's archived and removed
    // Here create new current shape if needed
    // ! Ce comportement va changer avec le minuteur
    if (typeof game?.currentShape === 'undefined') {
        createNewShape()
    }

    // merge current and others shapes
    const shapes = game?.currentShape
        ? [game?.currentShape, ...game.shapes]
        : game.shapes

    // todo : make game-over dynamic
    const isGameOver = false

    return (
        <Fragment>
            <Keyboard />

            <Grid columns={2}>
                <Flex sx={style.canvasWrap}>
                    <Box mx="auto" opacity={isGameOver ? 0.5 : 1}>
                        <Canvas shapes={shapes} />
                    </Box>
                    {isGameOver && (
                        <Heading sx={style.gameOver}>Game over</Heading>
                    )}
                </Flex>

                <Flex as="aside" sx={style.aside}>
                    <MenuBar
                        isPlaying={game.isPlaying}
                        onTogglePlay={togglePlay}
                        onHandleReset={handleReset}
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

                    <Statistics level={2} time={74} />
                </Flex>
            </Grid>
        </Fragment>
    )
}

export default Game
