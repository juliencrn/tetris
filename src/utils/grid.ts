import { rgba } from 'polished'

import { unit, canvasSize, cols, rows } from '../config'
import theme from '../theme'

const { width, height } = canvasSize

export function drawGrid(ctx: any) {
    const lineSize = 0.5
    ctx.fillStyle = rgba(theme.colors.red, 0.67)

    // Draw rows
    for (let i = 1; i < rows; i++) {
        ctx.fillRect(0, i * unit - lineSize / 2, width, lineSize)
    }

    // Draw Columns
    for (let i = 1; i < cols; i++) {
        ctx.fillRect(i * unit - lineSize / 2, 0, lineSize, height)
    }
}
