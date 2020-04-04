import { rgba } from 'polished'

// A custom theme for this app
const theme = {
    colors: {
        text: '#fff',
        background: rgba('#1C0D46', 0.9),
        purple: '#1C0D46',
        primary: '#ECD858',
        secondary: '#DE09DD',
        muted: '#191919',
        red: '#F04467',
    },
    fonts: {
        body: "'Fira Code', monospace",
        heading: "'Fira Code', monospace",
        monospace: "'Fira Code', monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
        body: 400,
        heading: 700,
        display: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    layout: {
        container: {
            maxWidth: 920,
            padding: '0 1rem',
        },
    },
    buttons: {
        primary: {
            border: '2px solid',
            background: 'transparent',
            color: 'secondary',
            fontWeight: 'heading',
            mx: 1,
        },
    },
    textStyles: {
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        display: {
            variant: 'textStyles.heading',
            fontSize: [5, 6],
            fontWeight: 'display',
            letterSpacing: '-0.03em',
            mt: 3,
        },
    },
    styles: {
        Container: {
            p: 3,
            maxWidth: 1024,
        },
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: 'textStyles.display',
        },
        h2: {
            variant: 'textStyles.heading',
            fontSize: 5,
        },
        h3: {
            variant: 'textStyles.heading',
            fontSize: 4,
        },
        h4: {
            variant: 'textStyles.heading',
            fontSize: 3,
        },
        h5: {
            variant: 'textStyles.heading',
            fontSize: 2,
        },
        h6: {
            variant: 'textStyles.heading',
            fontSize: 1,
        },
        a: {
            color: 'primary',
            '&:hover': {
                color: 'secondary',
            },
        },
        pre: {
            variant: 'prism',
            fontFamily: 'monospace',
            fontSize: 1,
            p: 3,
            color: 'text',
            bg: 'muted',
            overflow: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            color: 'secondary',
            fontSize: 1,
        },
        inlineCode: {
            fontFamily: 'monospace',
            color: 'secondary',
            bg: 'muted',
        },
        table: {
            width: '100%',
            my: 4,
            borderCollapse: 'separate',
            borderSpacing: 0,
            'th,td': {
                textAlign: 'left',
                py: '4px',
                pr: '4px',
                pl: 0,
                borderColor: 'muted',
                borderBottomStyle: 'solid',
            },
        },
        th: {
            verticalAlign: 'bottom',
            borderBottomWidth: '2px',
        },
        td: {
            verticalAlign: 'top',
            borderBottomWidth: '1px',
        },
        hr: {
            border: 0,
            borderBottom: '1px solid',
            borderColor: 'muted',
        },
        img: {
            maxWidth: '100%',
        },
    },
}

export default theme
