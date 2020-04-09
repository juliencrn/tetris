import { unit, cols } from '../../common/config'
import {
    Location,
    Quarter,
    Shape,
    Drawn,
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

// Make a location like x-y (ex: 5-1)
export const makeLocationKey = ({ x, y }: Location): string =>
    `${x / unit}-${y / unit}`

// Retrieve Location from this key like x-y (ex: 5-1)
export const getLocationFromKey = (key: string): Location | false => {
    try {
        const arr = key.split('-')
        const location = {
            x: Number(arr[0]) * unit,
            y: Number(arr[1]) * unit,
        }
        return location
    } catch (error) {
        return false
    }
}

// Increment the quarter for rotate shape
// Set '0' if it is at the last position
export const incrementQuarter = (quarter: Quarter): Quarter =>
    `${Number(quarter) < 3 ? Number(quarter) + 1 : 0}` as Quarter

// Create the shape drawn array from Shape
export const makeShapeDrawn = ({ uid, rects }: Shape): Drawn[] =>
    rects.map((location) => ({
        location,
        shapeId: uid,
        key: makeLocationKey(location),
    }))

// Exclude drawn location who's match with the uid
export const filterDrawn = (uid: string, drawn: Drawn[]): Drawn[] =>
    drawn.filter(({ shapeId }) => shapeId !== uid)

// Create a random ShapeOptions
export const getRandomShapeOptions = (): ShapeOptions => ({
    location: getTheStartLocation(),
    type: getRandomShapeType(),
    quarter: '0',
})

// Check if one-of shape rects is in drawn cases
export const shapeTouchedDrawn = (shape: Shape, drawn: Drawn[]): boolean => {
    let matches = false
    shape.rects.forEach((rect) => {
        // 1. Simulate the next position
        const location = rect

        // 2. check if the new location is drawn or free
        const rectKey = makeLocationKey(location as Location)
        filterDrawn(shape.uid, drawn).forEach(({ key }) => {
            if (rectKey === key) {
                matches = true
            }
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
