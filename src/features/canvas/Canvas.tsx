/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { FC, useEffect, useRef, memo } from 'react'

import { canvasSize } from '../../common/config'
import { Shape } from '../../common/types'

import drawer from './drawer'

const style: SxStyleProp = {
    backgroundColor: 'purple',
    border: '1px solid',
    color: 'secondary',
    mx: 'auto',
}

export interface CanvasProps {
    shapes: Shape[]
}

const Canvas: FC<CanvasProps> = ({ shapes }) => {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
            const draw = drawer(ctx)

            // Clear the canvas
            draw.clearAll()

            // Draw the grid
            draw.grid()

            // Draw the shapes
            draw.shapes(shapes)
        }
    }, [shapes])

    return <canvas sx={style} ref={ref} {...canvasSize} />
}

export default memo(Canvas)
