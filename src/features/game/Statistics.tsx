/** @jsx jsx */
import { FC, useState, useEffect } from 'react'
import { jsx, Box } from 'theme-ui'
import { Styles } from '../../common/types'
import useInterval from '../../common/hooks/useInterval'

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
    isTimeRunning: boolean
    isGaming: boolean
    level?: number
    score?: number
    bestScore?: number
    lines?: number
    bestLines?: number
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
    const [time, setTime] = useState(0)
    const { isGaming, isTimeRunning, level, score, lines } = props

    // Reset timer
    useEffect(() => {
        if (time && !isGaming) {
            setTime(0)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGaming])

    useInterval(
        () => {
            setTime(time + 1)
        },
        isTimeRunning ? 1000 : null,
    )

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
