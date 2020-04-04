import { Location, Quarter, ShapeType, Shape, Rect } from '../types'
import { unit } from './config'

type GetShapeRect = (location: Location, quarter?: Quarter) => Rect[]
interface ShapeProps {
    type: ShapeType
    quarter: Quarter
    location: Location
}

const getIShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return [{ x, y, sx: 4 * unit, sy: unit }]
        default:
            return [{ x, y, sx: unit, sy: 4 * unit }]
    }
}

const getOShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        default:
            return [{ x, y, sx: 2 * unit, sy: 2 * unit }]
    }
}

const getTShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return [
                { x: x + unit, y, sx: unit, sy: 3 * unit },
                { x, y: y + unit, sx: unit, sy: unit },
            ]
        case '2':
            return [
                { x: x + unit, y, sx: unit, sy: unit },
                { x, y: y + unit, sx: 3 * unit, sy: unit },
            ]
        case '3':
            return [
                { x, y, sx: unit, sy: 3 * unit },
                { x: x + unit, y: y + unit, sx: unit, sy: unit },
            ]
        default:
            return [
                { x, y, sx: 3 * unit, sy: unit },
                { x: x + unit, y: y + unit, sx: unit, sy: unit },
            ]
    }
}

const getLShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return [
                { x, y, sx: 2 * unit, sy: unit },
                { x: x + unit, y: y + unit, sx: unit, sy: 2 * unit },
            ]
        case '2':
            return [
                { x, y, sx: unit, sy: 2 * unit },
                { x, y: y + unit, sx: 3 * unit, sy: unit },
            ]
        case '3':
            return [
                { x, y, sx: unit, sy: 3 * unit },
                { x: x + unit, y: y + 2 * unit, sx: unit, sy: unit },
            ]
        default:
            return [
                { x, y, sx: 3 * unit, sy: unit },
                { x, y: y + unit, sx: unit, sy: unit },
            ]
    }
}

const getJShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
            return [
                { x, y, sx: unit, sy: 3 * unit },
                { x: x + unit, y, sx: unit, sy: unit },
            ]
        case '2':
            return [
                { x, y, sx: unit * 3, sy: unit },
                { x: x + 2 * unit, y: y + unit, sx: unit, sy: unit },
            ]
        case '3':
            return [
                { x, y: y + 2 * unit, sx: unit, sy: unit },
                { x: x + unit, y, sx: unit, sy: 3 * unit },
            ]
        default:
            return [
                { x, y, sx: unit, sy: unit },
                { x, y: y + unit, sx: 3 * unit, sy: 1 * unit },
            ]
    }
}

const getZShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return [
                { x: x + unit, y, sx: unit, sy: 2 * unit },
                { x, y: y + unit, sx: unit, sy: 2 * unit },
            ]
        default:
            return [
                { x, y, sx: 2 * unit, sy: unit },
                { x: x + unit, y: y + unit, sx: 2 * unit, sy: unit },
            ]
    }
}

const getSShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        case '1':
        case '3':
            return [
                { x, y, sx: unit, sy: 2 * unit },
                { x: x + unit, y: y + unit, sx: unit, sy: 2 * unit },
            ]
        default:
            return [
                { x: x + unit, y, sx: 2 * unit, sy: unit },
                { x, y: y + unit, sx: 2 * unit, sy: unit },
            ]
    }
}

export const getShape = ({ location, type, quarter }: ShapeProps): Shape => {
    switch (type) {
        case 'O':
            return {
                color: 'yellow',
                quarter,
                type,
                rects: getOShape(location, quarter),
            }
        case 'T':
            return {
                color: 'purple',
                quarter,
                type,
                rects: getTShape(location, quarter),
            }
        case 'L':
            return {
                color: 'orange',
                quarter,
                type,
                rects: getLShape(location, quarter),
            }
        case 'J':
            return {
                color: 'blue',
                quarter,
                type,
                rects: getJShape(location, quarter),
            }
        case 'Z':
            return {
                color: 'red',
                quarter,
                type,
                rects: getZShape(location, quarter),
            }
        case 'S':
            return {
                color: 'green',
                quarter,
                type,
                rects: getSShape(location, quarter),
            }

        default:
            // Case 'I' as default
            return {
                color: 'cyan',
                quarter,
                type,
                rects: getIShape(location, quarter),
            }
    }
}
