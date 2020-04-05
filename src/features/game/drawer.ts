import { rgba } from 'polished'

import { ShapeOptions, Shape } from '../../common/types'
import { getShape } from './shapes'
import { unit, canvasSize, cols, rows } from '../../common/config'
import theme from '../../app/theme'

const { width, height } = canvasSize

/**
 * Draw the Grid
 * @param ctx
 */
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

/**
 * Draw one shape
 * @param ctx
 * @param props
 */
const drawShape = (ctx: any, props?: Partial<ShapeOptions>): void => {
    const defaultProps: ShapeOptions = {
        location: { x: 0, y: 0 },
        type: 'I',
        quarter: '0',
    }

    const currentShape: Shape = getShape({
        ...defaultProps,
        ...props,
    })

    if (currentShape) {
        const { color, rects } = currentShape
        if (color) {
            ctx.fillStyle = color
        }
        if (rects) {
            rects.forEach(({ x, y, sx, sy }) => {
                ctx.fillRect(x, y, sx, sy)
            })
        }
    }
}

/**
 * Draw All shapes
 * @param ctx
 * @param shapesToDraw Partial<ShapeOptions>[]
 */
export const drawShapes = (
    ctx: any,
    shapesToDraw?: Partial<ShapeOptions>[],
): void => {
    if (ctx && shapesToDraw) {
        shapesToDraw.forEach((props) => {
            drawShape(ctx, props)
        })
    }
}
