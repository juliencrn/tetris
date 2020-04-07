/** @jsx jsx */
import { FC, Fragment } from 'react'
import { Grid, jsx, Text, Flex } from 'theme-ui'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/store'
import MenuBar from './MenuBar'
import Canvas from '../canvas/Canvas'

const Game: FC<{}> = () => {
    const game = useSelector((state: RootState) => state.game)

    // Add the current Shape at the first place if exists
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
