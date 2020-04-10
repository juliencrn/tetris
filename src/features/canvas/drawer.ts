import { rgba } from 'polished'

import { Shape, Location } from '../../common/types'
import theme from '../../common/theme'
import { unit, canvasSize, cols, rows } from '../../common/config'

const { width, height } = canvasSize

// Clean all the canvas
const clearAll = (ctx: any) => () =>
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

// Clean part of the canvas
const clear = (ctx: any) => (rects: Location[]) => {
    rects.forEach(({ x, y }) => {
        ctx.clearRect(x, y, unit, unit)
    })
}

// Draw the Grid
const drawGrid = (ctx: any) => () => {
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

// Draw one shape
const drawShape = (ctx: any) => (shape: Shape): void => {
    const { color, rects } = shape
    const line = 0.5

    if (rects) {
        rects.forEach(({ x, y }) => {
            // the shape square background as border
            ctx.fillStyle = theme.colors.purple
            ctx.fillRect(x, y, unit, unit)

            // the shape square with padding
            if (color) {
                ctx.fillStyle = color
            }
            ctx.fillRect(x + line, y + line, unit - line * 2, unit - line * 2)
        })
    }
}

// Draw All shapes
const drawShapes = (ctx: any) => (shapes: Shape[]): void => {
    if (ctx && shapes) {
        shapes.forEach((shape) => {
            drawShape(ctx)(shape)
        })
    }
}

const drawer = (ctx: any) => ({
    clear: clear(ctx),
    clearAll: clearAll(ctx),
    grid: drawGrid(ctx),
    shape: drawShape(ctx),
    shapes: drawShapes(ctx),
})

export default drawer
