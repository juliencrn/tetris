/** @jsx jsx */
import { FC, Fragment } from 'react'
import { Grid, jsx } from 'theme-ui'
import { useSelector } from 'react-redux'

import { RootState } from '../../app/store'
import MenuBar from './MenuBar'
import { getDemoData } from './demo'
import Canvas from './Canvas'

const Game: FC<{}> = () => {
    const { shapes, currentShape } = useSelector(
        (state: RootState) => state.game,
    )

    return (
        <Fragment>
            <MenuBar />

            <Grid columns={[1, 1, 2, 2]}>
                <Canvas shapes={[currentShape, ...shapes]} />
                <Canvas shapes={getDemoData()} />
            </Grid>
        </Fragment>
    )
}

export default Game
