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
    currentShape?: Shape
    needClear: boolean
}

const Canvas: FC<CanvasProps> = ({ currentShape, needClear }) => {
    const ref = useRef<HTMLCanvasElement>(null)

    // Work on all the canvas grid
    useEffect(() => {
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
            const draw = drawer(ctx)

            // Clear the canvas
            if (needClear) {
                draw.clearAll()
            }
        }
    }, [needClear])

    // Update specific part of canvas
    useEffect(() => {
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
            const draw = drawer(ctx)

            // 1. Remove the prev position
            if (currentShape?.prevRects) {
                draw.clear(currentShape.prevRects)
            }

            // 3. Draw the new Shape
            if (currentShape) {
                draw.shape(currentShape)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentShape])

    return <canvas sx={style} ref={ref} {...canvasSize} />
}

export default memo(Canvas)
