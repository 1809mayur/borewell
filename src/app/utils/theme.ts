import createTheme from '@mui/material/styles/createTheme'
import { blue, grey, purple } from '@mui/material/colors'



export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1200
    }
  },
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: purple[100]
    },
    background: {
      default: grey[700]
    },
    divider: grey[200]
  },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h5: {
//       fontWeight: 'bold'
//     },
//     h6: {
//       fontWeight: 'bold'
//     }
//   }
})

export default theme
