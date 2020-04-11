/** @jsx jsx */
import { FC } from 'react'
import { jsx, Text, Box } from 'theme-ui'

import { Styles } from '../types'

const style: Styles = {
    root: {
        py: 4,
        px: 3,
        backgroundColor: 'primary',
        color: 'black',
        textAlign: 'center',
    },
    primary: {
        fontWeight: 'heading',
        mb: 3,
    },
}

export interface PostItProps {
    primary: string
    secondary: string
}

const PostIt: FC<PostItProps> = ({ primary, secondary }) => (
    <Box sx={style.root}>
        <Text sx={style.primary}>{primary}</Text>
        <Text>{secondary}</Text>
    </Box>
)

export default PostIt
