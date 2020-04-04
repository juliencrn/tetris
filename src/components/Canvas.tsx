/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'
import { FC, useEffect, useRef } from 'react'

import { canvasSize } from '../config'
import { drawGrid } from '../utils/grid'
import { drawDemo } from '../utils/demo'

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
            console.log({ ctx })
            if (demo) {
                drawDemo(ctx)
            }
            drawGrid(ctx)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <canvas sx={style} ref={ref} {...canvasSize} />
}

export default Canvas
