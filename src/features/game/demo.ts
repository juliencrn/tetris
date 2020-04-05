import { unit } from '../../common/config'
import { ShapeOptions } from '../../common/types'

export const getDemoData = (): Partial<ShapeOptions>[] => {
    return [
        { type: 'I', quarter: '0', location: { x: 1 * unit, y: 1 * unit } },
        { type: 'I', quarter: '1', location: { x: 5 * unit, y: 1 * unit } },
        { type: 'I', quarter: '2', location: { x: 11 * unit, y: 1 * unit } },
        { type: 'I', quarter: '3', location: { x: 14 * unit, y: 1 * unit } },

        { type: 'O', quarter: '0', location: { x: 1 * unit, y: 7 * unit } },
        { type: 'O', quarter: '1', location: { x: 5 * unit, y: 7 * unit } },
        { type: 'O', quarter: '2', location: { x: 9 * unit, y: 7 * unit } },
        { type: 'O', quarter: '3', location: { x: 14 * unit, y: 7 * unit } },

        { type: 'T', quarter: '0', location: { x: 1 * unit, y: 11 * unit } },
        { type: 'T', quarter: '1', location: { x: 5 * unit, y: 11 * unit } },
        { type: 'T', quarter: '2', location: { x: 9 * unit, y: 11 * unit } },
        { type: 'T', quarter: '3', location: { x: 14 * unit, y: 11 * unit } },

        { type: 'S', quarter: '0', location: { x: 1 * unit, y: 15 * unit } },
        { type: 'S', quarter: '1', location: { x: 5 * unit, y: 15 * unit } },
        { type: 'S', quarter: '2', location: { x: 9 * unit, y: 15 * unit } },
        { type: 'S', quarter: '3', location: { x: 14 * unit, y: 15 * unit } },

        { type: 'Z', quarter: '0', location: { x: 1 * unit, y: 19 * unit } },
        { type: 'Z', quarter: '1', location: { x: 5 * unit, y: 19 * unit } },
        { type: 'Z', quarter: '2', location: { x: 9 * unit, y: 19 * unit } },
        { type: 'Z', quarter: '3', location: { x: 14 * unit, y: 19 * unit } },

        { type: 'L', quarter: '0', location: { x: 1 * unit, y: 23 * unit } },
        { type: 'L', quarter: '1', location: { x: 5 * unit, y: 23 * unit } },
        { type: 'L', quarter: '2', location: { x: 9 * unit, y: 23 * unit } },
        { type: 'L', quarter: '3', location: { x: 14 * unit, y: 23 * unit } },

        { type: 'J', quarter: '0', location: { x: 1 * unit, y: 27 * unit } },
        { type: 'J', quarter: '1', location: { x: 5 * unit, y: 27 * unit } },
        { type: 'J', quarter: '2', location: { x: 9 * unit, y: 27 * unit } },
        { type: 'J', quarter: '3', location: { x: 14 * unit, y: 27 * unit } },
    ]
}
