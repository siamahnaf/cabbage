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