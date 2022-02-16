export default {
    Buttons: {
        mx: "12px",
        width: "unset",
        p: "0",
        a: {
            textDecoration: "none",
            color: "text.primary",
            fontWeight: 500,
            button: {
                fontSize: "18px",
                p: "2px 10px",
                borderRadius: "5px",
            }
        },
        "&.active": {
            a: {
                color: "background.default",
                button: {
                    background: theme => theme.palette.primary.mainGradient
                }
            }
        }
    },
    MobileBar: {
        textAlign: "right",
        display: {
            smd: "none",
            xxs: "block"
        },
        button: {
            fontSize: "20px",
            p: "5px 8px",
            borderRadius: "3px",
            mr: "-4px"
        }
    },
    MobileMenu: {
        backgroundColor: "background.default",
        position: "absolute",
        zIndex: 99,
        padding: "10px",
        right: "0",
        minWidth: "235px",
        borderRadius: "3px",
        boxShadow: "0 0 20px #00000026",
        visibility: "hidden",
        opacity: 0,
        "&.show": {
            visibility: "visible",
            opacity: 1,
        }
    }
}