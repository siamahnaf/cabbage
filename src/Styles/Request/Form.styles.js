export default {
    InputLabel: {
        color: "text.primary",
        fontSize: "18px",
        mb: "5px"
    },
    InputField: {
        border: theme => `1px solid ${theme.palette.primary.borderColor}`,
        padding: "2px 10px",
        borderRadius: "3px"
    },
    HintsLabel: {
        color: "primary.main",
        fontSize: "16px",
        mb: "5px"
    },
    Submit: {
        background: theme => theme.palette.primary.mainGradient,
        fontSize: "20px",
        p: "4px 22px",
        borderRadius: "3px",
        color: "background.default",
        fontWeight: 700,
        mr: "15px",
        "&.disable": {
            opacity: "0.7",
            pointerEvents: "none"
        }
    },
    ErrorMessage: {
        color: "primary.youtube",
        svg: {
            mr: "5px",
            mb: "-3px"
        }
    },
    EmailSuccess: {
        fontSize: "18px",
        fontWeight: 500,
        color: "primary.success"
    },
    EmailError: {
        fontSize: "18px",
        fontWeight: 500,
        color: "primary.youtube"
    }
}