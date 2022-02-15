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
                fontSize: "20px",
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
    }
}