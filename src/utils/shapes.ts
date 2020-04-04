import { Location, Quarter } from '../types'
import { unit } from '../config'

type DrawShape = (ctx: any, location: Location, quarter?: Quarter) => void

export const drawI: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'cyan'
    switch (quarter) {
        case '1':
        case '3':
            ctx.fillRect(x, y, 4 * unit, unit)
            break

        default:
            ctx.fillRect(x, y, unit, 4 * unit)
            break
    }
}

export const drawO: DrawShape = (ctx, { x, y }) => {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(x, y, 2 * unit, 2 * unit)
}

export const drawT: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'purple'
    switch (quarter) {
        case '1':
            ctx.fillRect(x + unit, y, unit, 3 * unit)
            ctx.fillRect(x, y + unit, unit, unit)
            break

        case '2':
            ctx.fillRect(x + unit, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, unit)
            break

        case '3':
            ctx.fillRect(x, y, unit, 3 * unit)
            ctx.fillRect(x + unit, y + unit, unit, unit)
            break

        default:
            ctx.fillRect(x, y, 3 * unit, 1 * unit)
            ctx.fillRect(x + unit, y + unit, unit, unit)
            break
    }
}

export const drawL: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'orange'
    switch (quarter) {
        case '1':
            ctx.fillRect(x, y, 2 * unit, unit)
            ctx.fillRect(x + unit, y, unit, 3 * unit)
            break

        case '2':
            ctx.fillRect(x + 2 * unit, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, unit)
            break

        case '3':
            ctx.fillRect(x, y, unit, 3 * unit)
            ctx.fillRect(x + unit, y + 2 * unit, unit, unit)
            break

        default:
            ctx.fillRect(x, y, 3 * unit, 1 * unit)
            ctx.fillRect(x, y + unit, unit, unit)
            break
    }
}

export const drawJ: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'blue'
    switch (quarter) {
        case '1':
            ctx.fillRect(x, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, 1 * unit)
            break

        case '2':
            ctx.fillRect(x, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, 1 * unit)
            break

        case '3':
            ctx.fillRect(x, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, 1 * unit)
            break

        default:
            ctx.fillRect(x, y, unit, unit)
            ctx.fillRect(x, y + unit, 3 * unit, 1 * unit)
            break
    }
}

export const drawZ: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'red'
    switch (quarter) {
        case '1':
            ctx.fillRect(x, y, 2 * unit, unit)
            ctx.fillRect(x + unit, y + unit, 2 * unit, unit)
            break

        case '2':
            ctx.fillRect(x, y, 2 * unit, unit)
            ctx.fillRect(x + unit, y + unit, 2 * unit, unit)
            break

        case '3':
            ctx.fillRect(x, y, 2 * unit, unit)
            ctx.fillRect(x + unit, y + unit, 2 * unit, unit)
            break

        default:
            ctx.fillRect(x, y, 2 * unit, unit)
            ctx.fillRect(x + unit, y + unit, 2 * unit, unit)
            break
    }
}

export const drawS: DrawShape = (ctx, { x, y }, quarter = '0') => {
    ctx.fillStyle = 'green'
    switch (quarter) {
        case '1':
            ctx.fillRect(x + unit, y, 2 * unit, unit)
            ctx.fillRect(x, y + unit, 2 * unit, unit)
            break

        case '2':
            ctx.fillRect(x + unit, y, 2 * unit, unit)
            ctx.fillRect(x, y + unit, 2 * unit, unit)
            break

        case '3':
            ctx.fillRect(x + unit, y, 2 * unit, unit)
            ctx.fillRect(x, y + unit, 2 * unit, unit)
            break

        default:
            ctx.fillRect(x + unit, y, 2 * unit, unit)
            ctx.fillRect(x, y + unit, 2 * unit, unit)
            break
    }
}
