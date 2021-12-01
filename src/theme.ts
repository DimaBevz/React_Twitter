import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";


export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff'
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#fff'
    },
    text: {
        primary: '#14171a',
    }
  },
//   shadows: [],
  overrides: {
    MuiButton: {
        root: {
            borderRadius: 30,
            textTransform: 'none',
            fontSize: 16,
            height: 40,
            fontWeight: 700
        },
        textPrimary: {
            padding: '0 20px 0 20px',
        },
        outlinedPrimary: {
            borderColor: 'rgb(29, 161, 243)',
        },
    },
    MuiFilledInput: {
        underline: {
            '&:after': {
                borderBottomWidth: '2px',
            },
            '&:before': {
                borderColor: '#000',
                borderBottomWidth: '2px'
            },
        },
        input: {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    MuiDialog: {
        paper: {
            borderRadius: 15
        },
    },
    MuiDialogActions: {
        root: {
            marginBottom: 8,
        },
    },
    MuiDialogTitle: {
        root: {
            borderBottom: '1px solid #ccc',
            marginBottom: 10, 
            padding: '10px 15px',
            '& h2': {
                display: 'flex',
                alignItems: 'center',
                fontWeight: 800,
            },
            '& button': {
                padding: 8,
                marginRight: 20
            }
        }
    }
  }
});
