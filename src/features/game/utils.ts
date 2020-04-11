import { unit, cols } from '../../common/config'
import {
    Location,
    Quarter,
    Shape,
    ShapeOptions,
    ShapeType,
} from '../../common/types'
import { getRandomArrayItem, isPair } from '../../common/utils'

// Return a random shape type
export const getRandomShapeType = (): ShapeType =>
    getRandomArrayItem<ShapeType>(['I', 'O', 'T', 'J', 'L', 'Z', 'S'])

// Return the top/centered position of the canvas
export function getTheStartLocation(): Location {
    // Calc the Canvas half width minus one unit
    const colsHalf = isPair(cols) ? cols / 2 : (cols - 1) / 2
    return {
        x: (colsHalf - 1) * unit,
        y: 0,
    }
}

// Increment the quarter for rotate shape
// Set '0' if it is at the last position
export const incrementQuarter = (quarter: Quarter): Quarter =>
    `${Number(quarter) < 3 ? Number(quarter) + 1 : 0}` as Quarter

// Create a random ShapeOptions
export const getRandomShapeOptions = (): ShapeOptions => ({
    location: getTheStartLocation(),
    type: getRandomShapeType(),
    quarter: '0',
})

// Check if one-of shape rects is in drawn cases
export const shapeTouchedDrawn = (shape: Shape, shapes: Shape[]): boolean => {
    let matches = false
    shape.rects.forEach((rect) => {
        shapes.forEach((thisShape) => {
            thisShape.rects.forEach((thisRect) => {
                const hasSameX = thisRect.x === rect.x
                const hasSameY = thisRect.y === rect.y
                if (hasSameX && hasSameY) {
                    matches = true
                }
            })
        })
    })
    return matches
}

export const incrementLocation = (
    location: Location,
    axis: 'x' | 'y',
): Location => {
    if (axis === 'x') {
        return {
            ...location,
            x: location.x + unit,
        }
    } else {
        return {
            ...location,
            y: location.y + unit,
        }
    }
}

export const decrementLocation = (
    location: Location,
    axis: 'x' | 'y',
): Location => {
    if (axis === 'x') {
        return {
            ...location,
            x: location.x - unit,
        }
    } else {
        return {
            ...location,
            y: location.y - unit,
        }
    }
}
