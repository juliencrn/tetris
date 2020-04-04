/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { FC, useEffect, useRef } from 'react'

import { canvasSize } from '../utils/config'
import { drawGrid, drawShapes } from '../utils/drawer'
import { getDemoData } from '../utils/demo'

const style: SxStyleProp = {
    backgroundColor: 'purple',
    border: '1px solid',
    color: 'secondary',
    mx: 'auto',
}

const Canvas: FC<{ demo?: boolean }> = ({ demo }) => {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const ctx = ref?.current?.getContext('2d')
        if (ctx) {
            drawGrid(ctx)

            if (demo) {
                drawShapes(ctx, getDemoData())
            } else {
                // Do stuff
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <canvas sx={style} ref={ref} {...canvasSize} />
}

export default Canvas
