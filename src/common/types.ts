import { SxStyleProp } from 'theme-ui'

export type Quarter = '0' | '1' | '2' | '3'
export type ShapeType = 'I' | 'O' | 'T' | 'L' | 'J' | 'Z' | 'S'

export interface ObjectOfStyles {
    [key: string]: SxStyleProp
}

export interface Location {
    x: number
    y: number
}

export interface Rect extends Location {
    sx: number
    sy: number
}

export interface ShapeOptions {
    type: ShapeType
    quarter: Quarter
    location: Location
}

export interface Shape {
    type: ShapeType
    quarter: Quarter
    color: string
    rects: Rect[]
}
