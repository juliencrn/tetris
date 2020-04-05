/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { FC, useEffect, useRef } from 'react'

import { canvasSize } from '../../common/config'
import { drawGrid, drawShapes } from './drawer'
import { ShapeOptions } from '../../common/types'

const style: SxStyleProp = {
    backgroundColor: 'purple',
    border: '1px solid',
    color: 'secondary',
    mx: 'auto',
}

export interface CanvasProps {
    shapes: Partial<ShapeOptions>[]
}

const Canvas: FC<CanvasProps> = ({ shapes }) => {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
            // 1. Clear the canvas
            ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

            // 2. Draw the grid
            drawGrid(ctx)

            // 3. Draw the Shapes
            drawShapes(ctx, shapes)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shapes])

    return <canvas sx={style} ref={ref} {...canvasSize} />
}

export default Canvas
