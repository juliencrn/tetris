import { Location, Quarter, ShapeType, Shape } from '../../common/types'
import { unit } from '../../common/config'

type GetShapeRect = (
    location: Location,
    quarter?: Quarter,
) => { rects: Location[]; width: number; height: number }

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
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x: x + 2 * unit, y },
                    { x: x + 3 * unit, y },
                ],
            }
        default:
            return {
                width: unit,
                height: 4 * unit,
                rects: [
                    { x, y },
                    { x, y: y + unit },
                    { x, y: y + 2 * unit },
                    { x, y: y + 3 * unit },
                ],
            }
    }
}

const getOShape: GetShapeRect = ({ x, y }, quarter = '0') => {
    switch (quarter) {
        default:
            return {
                width: 2 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x, y: y + unit },
                    { x: x + unit, y: y + unit },
                ],
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
                    { x: x + unit, y },
                    { x: x + unit, y: y + unit },
                    { x: x + unit, y: y + 2 * unit },
                    { x, y: y + unit },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x: x + unit, y },
                    { x, y: y + unit },
                    { x: x + unit, y: y + unit },
                    { x: x + 2 * unit, y: y + unit },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y },
                    { x, y: y + unit },
                    { x, y: y + 2 * unit },
                    { x: x + unit, y: y + unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x: x + 2 * unit, y },
                    { x: x + unit, y: y + unit },
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
                    { x: x + unit, y },
                    { x: x + unit, y: y + unit },
                    { x: x + unit, y: y + 2 * unit },
                    { x, y },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y: y + unit },
                    { x: x + unit, y: y + unit },
                    { x: x + 2 * unit, y: y + unit },
                    { x: x + 2 * unit, y },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y },
                    { x, y: y + unit },
                    { x, y: y + 2 * unit },
                    { x: x + unit, y: y + 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x: x + 2 * unit, y },
                    { x, y: y + unit },
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
                    { x: x + unit, y },
                    { x: x + unit, y: y + unit },
                    { x: x + unit, y: y + 2 * unit },
                    { x, y: y + 2 * unit },
                ],
            }
        case '2':
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x, y: y + unit },
                    { x: x + unit, y: y + unit },
                    { x: x + 2 * unit, y: y + unit },
                ],
            }
        case '3':
            return {
                width: 2 * unit,
                height: 3 * unit,
                rects: [
                    { x, y },
                    { x, y: y + unit },
                    { x, y: y + 2 * unit },
                    { x: x + unit, y: y + 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x: x + 2 * unit, y },
                    { x: x + 2 * unit, y: y + unit },
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
                    { x: x + unit, y },
                    { x: x + unit, y: y + unit },
                    { x, y: y + unit },
                    { x, y: y + 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x, y },
                    { x: x + unit, y },
                    { x: x + unit, y: y + unit },
                    { x: x + 2 * unit, y: y + unit },
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
                    { x, y },
                    { x, y: y + unit },
                    { x: x + unit, y: y + unit },
                    { x: x + unit, y: y + 2 * unit },
                ],
            }
        default:
            return {
                width: 3 * unit,
                height: 2 * unit,
                rects: [
                    { x: x + unit, y },
                    { x: x + 2 * unit, y },
                    { x: x + unit, y: y + unit },
                    { x, y: y + unit },
                ],
            }
    }
}

export const getShape = (props: ShapeProps): Omit<Shape, 'uid'> => {
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
