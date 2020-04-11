import { SxStyleProp } from 'theme-ui'

export type Quarter = '0' | '1' | '2' | '3'
export type ShapeType = 'I' | 'O' | 'T' | 'L' | 'J' | 'Z' | 'S'

export type Styles = Record<string, SxStyleProp>

export interface Location {
    x: number
    y: number
}

export interface ShapeOptions {
    uid?: string
    type: ShapeType
    quarter: Quarter
    location: Location
}

export interface Shape extends ShapeOptions {
    uid: string
    color: string
    width: number
    height: number
    rects: Location[]
    prevRects?: Location[]
}
