import { SxStyleProp } from 'theme-ui'

export type Quarter = '0' | '1' | '2' | '3'
export type ShapeType = 'I' | 'O' | 'T' | 'L' | 'J' | 'Z' | 'S'

export interface Styles {
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

export interface Shape extends ShapeOptions {
    color: string
    width: number
    height: number
    rects: Rect[]
}

export interface Drawn {
    location: Location
    key: string // x-y => 5-1
}
