/** @jsx jsx */
import { FC, Fragment } from 'react'
import { Grid, jsx, Text, Flex } from 'theme-ui'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'
import MenuBar from './MenuBar'
import Canvas from '../canvas/Canvas'
import { createShape } from './module'
import { getRandomShapeOptions } from './utils'

const Game: FC<{}> = () => {
    const game = useSelector((state: RootState) => state.game)
    const dispatch = useDispatch()

    // When a shape collides the bottom
    // It's archived and removed
    // Here create new current shape if needed
    if (typeof game?.currentShape === 'undefined') {
        dispatch(createShape(getRandomShapeOptions()))
    }

    // merge current and others shapes
    const shapes = game?.currentShape
        ? [game?.currentShape, ...game.shapes]
        : game.shapes

    return (
        <Fragment>
            <Grid columns={2}>
                <Canvas shapes={shapes} />
                <Flex
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MenuBar />
                    <Text sx={{ textAlign: 'center', mb: 3 }}>
                        Use keyboard arrows to move shapes and ArrowTop to
                        rotate
                    </Text>
                </Flex>
            </Grid>
        </Fragment>
    )
}

export default Game
