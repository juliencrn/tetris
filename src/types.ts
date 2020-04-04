import { SxStyleProp } from 'theme-ui'

export interface Location {
    x: number
    y: number
}

export type Quarter = '0' | '1' | '2' | '3'

export interface ObjectOfStyles {
    [key: string]: SxStyleProp
}
