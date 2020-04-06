import { Location, Quarter, ShapeType, Shape, Rect } from '../../common/types'
import { unit, cols } from '../../common/config'

type GetShapeRect = (
    location: Location,
    quarter?: Quarter,
) => { rects: Rect[]; width: number; height: number }
interface ShapeProps {
    type: ShapeType
    quarter: Quarter
    location: Location
}

const getIShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return {
                width: 4 * unit,
                height: unit,
                rects: [{ x, y, sx: 4 * unit, sy: unit }],
            }
        default:
            return {
                width: unit,
                height: 4 * unit,
                rects: [{ x, y, sx: unit, sy: 4 * unit }],
            }
    }
}

const getOShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        default:
            return {
                width: 2 * unit,
                height: 2 * unit,
                rects: [{ x, y, sx: 2 * unit, sy: 2 * unit }],
            }
    }
}

const getTShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x: x + unit, y, sx: unit, sy: 3 * unit },
                    { x, y: y + unit, sx: unit, sy: unit },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x: x + unit, y, sx: unit, sy: unit },
                    { x, y: y + unit, sx: 3 * unit, sy: unit },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y, sx: unit, sy: 3 * unit },
                    { x: x + unit, y: y + unit, sx: unit, sy: unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: 3 * unit, sy: unit },
                    { x: x + unit, y: y + unit, sx: unit, sy: unit },
                ],
            }
    }
}

const getLShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y, sx: 2 * unit, sy: unit },
                    { x: x + unit, y: y + unit, sx: unit, sy: 2 * unit },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: unit, sy: 2 * unit },
                    { x, y: y + unit, sx: 3 * unit, sy: unit },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y, sx: unit, sy: 3 * unit },
                    { x: x + unit, y: y + 2 * unit, sx: unit, sy: unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: 3 * unit, sy: unit },
                    { x, y: y + unit, sx: unit, sy: unit },
                ],
            }
    }
}

const getJShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y, sx: unit, sy: 3 * unit },
                    { x: x + unit, y, sx: unit, sy: unit },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: unit * 3, sy: unit },
                    { x: x + 2 * unit, y: y + unit, sx: unit, sy: unit },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y: y + 2 * unit, sx: unit, sy: unit },
                    { x: x + unit, y, sx: unit, sy: 3 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: unit, sy: unit },
                    { x, y: y + unit, sx: 3 * unit, sy: 1 * unit },
                ],
            }
    }
}

const getZShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x: x + unit, y, sx: unit, sy: 2 * unit },
                    { x, y: y + unit, sx: unit, sy: 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y, sx: 2 * unit, sy: unit },
                    { x: x + unit, y: y + unit, sx: 2 * unit, sy: unit },
                ],
            }
    }
}

const getSShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y, sx: unit, sy: 2 * unit },
                    { x: x + unit, y: y + unit, sx: unit, sy: 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x: x + unit, y, sx: 2 * unit, sy: unit },
                    { x, y: y + unit, sx: 2 * unit, sy: unit },
                ],
            }
    }
}

export const getShape = (props: ShapeProps): Shape => {
    const { location, type, quarter } = props
    switch (type) {
        case 'O':
            return {
                color: 'yellow',
                ...props,
                ...getOShape(location, quarter),
            }
        case 'T':
            return {
                color: 'purple',
                ...props,
                ...getTShape(location, quarter),
            }
        case 'L':
            return {
                color: 'orange',
                ...props,
                ...getLShape(location, quarter),
            }
        case 'J':
            return {
                color: 'blue',
                ...props,
                ...getJShape(location, quarter),
            }
        case 'Z':
            return {
                color: 'red',
                ...props,
                ...getZShape(location, quarter),
            }
        case 'S':
            return {
                color: 'green',
                ...props,
                ...getSShape(location, quarter),
            }

        default:
            // Case 'I' as default
            return {
                color: 'cyan',
                ...props,
                ...getIShape(location, quarter),
            }
    }
}

export const getRandomShape = (): Shape => {
    // 1. Get random shape key
    const shapesKeys: ShapeType[] = ['I', 'O', 'T', 'J', 'L', 'Z', 'S']
    const type = shapesKeys[Math.floor(Math.random() * shapesKeys.length)]

    // 2. Get the started location from Canvas width
    const isPair = cols % 2 === 0
    const x = (isPair ? (cols - 2) / 2 : (cols - 3) / 2) * unit
    const location = { x, y: 0 }

    return getShape({ location, type, quarter: '0' })
}
