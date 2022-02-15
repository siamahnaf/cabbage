export default {
    ShowDescription: {
        backgroundColor: "primary.youtube",
        p: "5px 10px",
        borderRadius: "3px",
        "& p": {
            fontSize: "16px",
            color: "background.default",
            fontWeight: 700
        }
    },
    Player: {
        position: "relative",
        pt: "56.25%",
        "& .cabbage-player": {
            position: "absolute",
            top: 0,
            left: 0
        }
    },
    Description: {
        pt: "15px",
        "& .ReactCollapse--collapse": {
            transition: "height 500ms",
            "& p": {
                fontSize: "18px",
                whiteSpace: "pre-line"
            }
        }
    }
};