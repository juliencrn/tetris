/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC } from 'react'

const MenuBar: FC<{}> = () => (
    <Flex
        sx={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mb: 3,
        }}
    >
        <Flex>
            <Button>Rotate</Button>
            <Button>Left</Button>
            <Button>Right</Button>
            <Button>Go Bottom</Button>
        </Flex>
        <Flex>
            <Button>Play</Button>
            <Button>Pause</Button>
            <Button>Reset</Button>
        </Flex>
    </Flex>
)

export default MenuBar
