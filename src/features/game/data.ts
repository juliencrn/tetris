import { Shape, Drawn } from '../../common/types'

export const shapes: Shape[] = [
    {
        uid: '3',
        color: '#18ffff',
        location: {
            x: 50,
            y: 150,
        },
        type: 'I',
        quarter: '0',
        width: 25,
        height: 100,
        rects: [
            {
                x: 50,
                y: 150,
            },
            {
                x: 50,
                y: 175,
            },
            {
                x: 50,
                y: 200,
            },
            {
                x: 50,
                y: 225,
            },
        ],
    },
    {
        uid: '2',
        color: '#00e676',
        location: {
            x: 100,
            y: 200,
        },
        type: 'S',
        quarter: '0',
        width: 75,
        height: 50,
        rects: [
            {
                x: 125,
                y: 200,
            },
            {
                x: 150,
                y: 200,
            },
            {
                x: 125,
                y: 225,
            },
            {
                x: 100,
                y: 225,
            },
        ],
    },
    {
        uid: '1',
        color: '#18ffff',
        location: {
            x: 150,
            y: 225,
        },
        type: 'I',
        quarter: '1',
        width: 100,
        height: 25,
        rects: [
            {
                x: 150,
                y: 225,
            },
            {
                x: 175,
                y: 225,
            },
            {
                x: 200,
                y: 225,
            },
            {
                x: 225,
                y: 225,
            },
        ],
    },
    {
        uid: '0',
        color: '#ffff00',
        location: {
            x: 0,
            y: 200,
        },
        type: 'O',
        quarter: '0',
        width: 50,
        height: 50,
        rects: [
            {
                x: 0,
                y: 200,
            },
            {
                x: 25,
                y: 200,
            },
            {
                x: 0,
                y: 225,
            },
            {
                x: 25,
                y: 225,
            },
        ],
    },
]

export const drawn: Drawn[] = [
    {
        location: {
            x: 0,
            y: 200,
        },
        shapeId: '0',
        key: '0-8',
    },
    {
        location: {
            x: 25,
            y: 200,
        },
        shapeId: '0',
        key: '1-8',
    },
    {
        location: {
            x: 0,
            y: 225,
        },
        shapeId: '0',
        key: '0-9',
    },
    {
        location: {
            x: 25,
            y: 225,
        },
        shapeId: '0',
        key: '1-9',
    },
    {
        location: {
            x: 150,
            y: 225,
        },
        shapeId: '1',
        key: '6-9',
    },
    {
        location: {
            x: 175,
            y: 225,
        },
        shapeId: '1',
        key: '7-9',
    },
    {
        location: {
            x: 200,
            y: 225,
        },
        shapeId: '1',
        key: '8-9',
    },
    {
        location: {
            x: 225,
            y: 225,
        },
        shapeId: '1',
        key: '9-9',
    },
    {
        location: {
            x: 125,
            y: 200,
        },
        shapeId: '2',
        key: '5-8',
    },
    {
        location: {
            x: 150,
            y: 200,
        },
        shapeId: '2',
        key: '6-8',
    },
    {
        location: {
            x: 125,
            y: 225,
        },
        shapeId: '2',
        key: '5-9',
    },
    {
        location: {
            x: 100,
            y: 225,
        },
        shapeId: '2',
        key: '4-9',
    },
    {
        location: {
            x: 50,
            y: 150,
        },
        shapeId: '3',
        key: '2-6',
    },
    {
        location: {
            x: 50,
            y: 175,
        },
        shapeId: '3',
        key: '2-7',
    },
    {
        location: {
            x: 50,
            y: 200,
        },
        shapeId: '3',
        key: '2-8',
    },
    {
        location: {
            x: 50,
            y: 225,
        },
        shapeId: '3',
        key: '2-9',
    },
    {
        location: {
            x: 75,
            y: 175,
        },
        shapeId: '4',
        key: '3-7',
    },
    {
        location: {
            x: 75,
            y: 200,
        },
        shapeId: '4',
        key: '3-8',
    },
    {
        location: {
            x: 75,
            y: 225,
        },
        shapeId: '4',
        key: '3-9',
    },
    {
        location: {
            x: 100,
            y: 200,
        },
        shapeId: '4',
        key: '4-8',
    },
]
