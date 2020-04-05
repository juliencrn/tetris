/** @jsx jsx */
import { FC, Fragment } from 'react'
import { Grid, jsx } from 'theme-ui'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/store'
import MenuBar from './MenuBar'
import { getDemoData } from './demo'
import Canvas from './Canvas'

const Game: FC<{}> = () => {
    const game = useSelector((state: RootState) => state.game)

    // Add the current Shape at the first place if exists
    const shapes = game?.currentShape
        ? [game?.currentShape, ...game.shapes]
        : game.shapes

    return (
        <Fragment>
            <MenuBar />

            <Grid columns={[1, 1, 2, 2]}>
                <Canvas shapes={shapes} />
                <Canvas shapes={getDemoData()} />
            </Grid>
        </Fragment>
    )
}

export default Game
