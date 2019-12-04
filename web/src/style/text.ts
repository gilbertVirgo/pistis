const text = {
    default: {
        fontFamily: "Nunito, sans-serif"
    },
    thin: {
        fontWeight: 200 as const
    },
    bold: {
        fontWeight: 700 as const
    },
    small: {
        fontSize: "14px"
    },
    medium: {
        fontSize: "18px"
    },
    large: {
        fontSize: "40px"
    },
    left: {
        textAlign: "left" as const
    },
    center: {
        textAlign: "center" as const
    },
    right: {
        textAlign: "right" as const
    }
}

export default text;