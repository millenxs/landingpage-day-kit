import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const colors = {
  ink: '#1F1B2E',
  muted: '#5E576F',
  cream: '#FFFBF2',
  purple: '#6E5BC7',
  purpleDark: '#4E3DA3',
  yellow: '#FFC93C',
  pink: '#FFC2D1',
  blue: '#BFDDFF',
  green: '#CDEBB5',
  lilac: '#DCCFFF',
  sand: '#FFE38F',
  line: '#ECE4D3',
}

let theme = createTheme({
  palette: {
    primary: { main: colors.purple, dark: colors.purpleDark, contrastText: '#fff' },
    secondary: { main: colors.yellow, contrastText: colors.ink },
    background: { default: colors.cream, paper: '#fff' },
    text: { primary: colors.ink, secondary: colors.muted },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Lexend", "Lexend Fallback", system-ui, sans-serif',
    h1: { fontWeight: 700, fontSize: '3.4rem', lineHeight: 1.08, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.15, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700, fontSize: '1.3rem', lineHeight: 1.3 },
    button: { textTransform: 'none', fontWeight: 700 },
    overline: { fontWeight: 600, letterSpacing: '0.14em' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 14, paddingInline: 24 },
        sizeLarge: { paddingBlock: 14, fontSize: '1.05rem' },
      },
    },
    MuiCard: {
      styleOverrides: { root: { border: `2px solid ${colors.line}`, boxShadow: 'none' } },
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
  },
})

export default responsiveFontSizes(theme, { factor: 2.4 })
