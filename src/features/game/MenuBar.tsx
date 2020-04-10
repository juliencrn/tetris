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
    isGaming: boolean
    isTimeRunning: boolean
    onToggleGaming: () => void
    onTogglePlay: () => void
}

const MenuBar: FC<MenuBarProps> = (props) => {
    const { isGaming, isTimeRunning, onToggleGaming, onTogglePlay } = props

    return (
        <Flex sx={style.flex}>
            <Button onClick={onToggleGaming}>
                {isGaming ? 'Reset Game' : 'New Game'}
            </Button>
            <Button onClick={onTogglePlay}>
                {isTimeRunning ? 'Pause' : 'Play'}
            </Button>
        </Flex>
    )
}

export default MenuBar
