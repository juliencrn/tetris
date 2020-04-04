/** @jsx jsx */
import { Container, Heading, Grid, jsx } from 'theme-ui'

import image from './assets/background.jpg'
import Canvas from './components/Canvas'
import { ObjectOfStyles } from './types'
import MenuBar from './components/MenuBar'

const styles: ObjectOfStyles = {
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: {
        py: 5,
        px: 4,
        backgroundColor: 'background',
    },
    title: {
        fontSize: 6,
        textAlign: 'center',
        textTransform: 'uppercase',
        mb: 4,
    },
}

function App() {
    return (
        <div sx={styles.root}>
            <Container>
                <div sx={styles.paper}>
                    <Heading sx={styles.title} color="primary">
                        Tetris game
                    </Heading>

                    <MenuBar />

                    <Grid columns={[1, 1, 2, 2]}>
                        <Canvas />
                        <Canvas demo />
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default App
