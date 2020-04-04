import { unit } from '../config'
import * as shapes from '../utils/shapes'

export function drawDemo(ctx: any) {
    shapes.drawI(ctx, { x: 1 * unit, y: 1 * unit })
    shapes.drawI(ctx, { x: 5 * unit, y: 1 * unit }, '1')
    shapes.drawI(ctx, { x: 11 * unit, y: 1 * unit }, '2')
    shapes.drawI(ctx, { x: 14 * unit, y: 1 * unit }, '3')

    shapes.drawO(ctx, { x: 1 * unit, y: 7 * unit })
    shapes.drawO(ctx, { x: 5 * unit, y: 7 * unit })
    shapes.drawO(ctx, { x: 9 * unit, y: 7 * unit })
    shapes.drawO(ctx, { x: 14 * unit, y: 7 * unit })

    shapes.drawT(ctx, { x: 1 * unit, y: 11 * unit })
    shapes.drawT(ctx, { x: 5 * unit, y: 11 * unit }, '1')
    shapes.drawT(ctx, { x: 9 * unit, y: 11 * unit }, '2')
    shapes.drawT(ctx, { x: 14 * unit, y: 11 * unit }, '3')

    shapes.drawL(ctx, { x: 1 * unit, y: 15 * unit })
    shapes.drawL(ctx, { x: 5 * unit, y: 15 * unit }, '1')
    shapes.drawL(ctx, { x: 9 * unit, y: 15 * unit }, '2')
    shapes.drawL(ctx, { x: 14 * unit, y: 15 * unit }, '3')

    shapes.drawZ(ctx, { x: 1 * unit, y: 19 * unit })
    shapes.drawZ(ctx, { x: 5 * unit, y: 19 * unit }, '1')
    shapes.drawZ(ctx, { x: 9 * unit, y: 19 * unit }, '2')
    shapes.drawZ(ctx, { x: 14 * unit, y: 19 * unit }, '3')

    shapes.drawJ(ctx, { x: 1 * unit, y: 23 * unit })
    shapes.drawJ(ctx, { x: 5 * unit, y: 23 * unit }, '1')
    shapes.drawJ(ctx, { x: 9 * unit, y: 23 * unit }, '2')
    shapes.drawJ(ctx, { x: 14 * unit, y: 23 * unit }, '3')

    shapes.drawS(ctx, { x: 1 * unit, y: 27 * unit })
    shapes.drawS(ctx, { x: 5 * unit, y: 27 * unit }, '1')
    shapes.drawS(ctx, { x: 9 * unit, y: 27 * unit }, '2')
    shapes.drawS(ctx, { x: 14 * unit, y: 27 * unit }, '3')
}
