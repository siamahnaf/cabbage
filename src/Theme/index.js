import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Tajawal"
    },
    palette: {
        text: {
            primary: "#000000", //Default Text Color
        },
        background: {
            default: "#FFFFFF" //Default Background Color
        },
        primary: {
            main: "#41739b", //Others Main Color
            mainGradient: "linear-gradient(to right, #41739b, #ECBE31)", // Gradient Color
            youtube: "#FF0000", //Youtube Logo color
            black_opacity: "#e8e8e8", //Table Color
            link_color: "#653096", //Link Color
            borderColor: "#0000002e", //Border Color
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '2%',
                    paddingRight: '2%'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Tajawal"
                },
            },
        },
    },
});
export default theme;