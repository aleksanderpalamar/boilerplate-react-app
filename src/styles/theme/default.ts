export const defaultTheme = {
  colors: {
    background: '#121214',
    text: '#e1e1e6',

    success: '#00b37e',
    error: '#b10040',
    warning: '#ffcf00',    
  },
  fontFamilies: {
    body: 'Roboto, sans-serif',
  },
  fontSizes: {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'md': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    'shorter': '1rem',
    'short': '1.25rem',
    'base': '1.5rem',
    'tall': '1.75rem',
  },
  radius: {
    'sm': '0.125rem',
    'md': '0.25rem',
    'lg': '0.5rem',
    'full': '9999px',
  },
  spaces: {
    '$1': '0.25rem',
    '$2': '0.5rem',
    '$3': '0.75rem',
    '$4': '1rem',
    '$5': '1.25rem',
    '$6': '1.5rem',
    '$8': '2rem',
    '$10': '2.5rem',
    '$20': '5rem',
    '$40': '10rem',
    '$64': '16rem',
    '$80': '20rem',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
        fontFamily: 'body',
        fontSize: 'md',
        lineHeight: 'base',
      },
    },
  }
} as const;
