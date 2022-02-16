import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: "Assistant"
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
            success: "#28A745", //Success color message
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices
            sm: 480, // Small Devices
            msm: 576, // Medium Small Medium Devices
            lsm: 640, // Large Small Medium Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices
            lg: 1200, // Large Devices
            xl: 1536, // Extra Large Devices
            xxl: 1980 // Double Extra Large Devices
        },
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
                    fontFamily: "Assistant"
                },
            },
        },
    },
});
export default theme;