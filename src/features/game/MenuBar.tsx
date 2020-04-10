/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { FC } from 'react'

import { Styles } from '../../common/types'

const style: Styles = {
    flex: {
        mb: 3,
        justifyContent: 'center',
    },
}

export interface MenuBarProps {
    isPlaying: boolean
    onHandleReset: () => void
    onTogglePlay: () => void
}

const MenuBar: FC<MenuBarProps> = (props) => {
    const { isPlaying, onHandleReset, onTogglePlay } = props

    return (
        <Flex sx={style.flex}>
            <Button onClick={onHandleReset}>New Game</Button>
            <Button onClick={onTogglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </Button>
        </Flex>
    )
}

export default MenuBar
