import React, { useState, useEffect } from "react";
import color from "../style/color";
import Container from "../components/Container.d";

import { Link } from "react-router-dom";
import Text from "../components/Text.d";

const bubble = {
    borderRadius: "50%",
    position: "absolute" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: color.white
};

const inline = (width = 0) => ({
    container: {
        minHeight: "100vh"
    },
    green: {
        ...bubble,
        backgroundColor: color.green,
        width: width / 1.65,
        height: width / 1.65,
        left: "5%", top: "5%",
    },
    blue: {
        ...bubble,
        backgroundColor: color.blue,
        border: `10px solid ${color.white}`,
        width: width / 1.75,
        height: width / 1.75,
        left: "31.5%", top: "31.5%"
    },
    orange: {
        ...bubble,
        backgroundColor: color.orange,
        width: width / 1.65,
        height: width / 1.65,
        left: "17.5%", top: "60%"
    }
})

const Bubbles = () => {
    const [bounds, setBounds] = useState({ width: 0, height: 0 });

    return (
        <Container style={inline().container} onBounds={setBounds}>
            {bounds && (<>
                <Link to="/videos/bible">
                    <div style={inline(bounds.width).green}>
                        <Text noMargin>Bible</Text>
                    </div>
                </Link>
                <Link to="/videos/science">
                    <div style={inline(bounds.width).orange}>
                        <Text noMargin>Science</Text>
                    </div>
                </Link>
                <Link to="/videos/god">
                    <div style={inline(bounds.width).blue}>
                        <Text noMargin>God</Text>
                    </div>
                </Link>
            </>)}
        </Container>
    )
}

export default Bubbles;