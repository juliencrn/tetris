/** @jsx jsx */
import { FC } from 'react'
import { jsx, Box } from 'theme-ui'
import { Styles } from '../../common/types'

const style: Styles = {
    root: {
        maxWidth: '100%',
        width: '200px',
        mx: 'auto',
    },
    table: {
        width: '100%',
    },
}

export interface StatisticsProps {
    level?: number
    score?: number
    bestScore?: number
    lines?: number
    bestLines?: number
    time?: number
}

interface RowProps {
    label: string
    value?: number
}

const Row: FC<RowProps> = ({ label, value = 0 }) => (
    <tr>
        <td>{`${label}:`}</td>
        <td sx={{ textAlign: 'right' }}>{value}</td>
    </tr>
)

const Statistics: FC<StatisticsProps> = (props) => {
    const { level, score, lines, time } = props
    return (
        <Box sx={style.root}>
            <table sx={style.table}>
                <tbody>
                    <Row label="Level" value={level} />
                    <Row label="Score" value={score} />
                    <Row label="Lines" value={lines} />
                    <Row label="Time" value={time} />
                </tbody>
            </table>
        </Box>
    )
}

export default Statistics
