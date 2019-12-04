import React from "react";

import { Link } from "react-router-dom";

import Title from "../components/Title.d";
import Text from "../components/Text.d";
import Container from "../components/Container.d";
import Chevron from "../components/Chevron.d";

import text from "../style/text";
import color from "../style/color";

const inline = {
    container: {
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    rule: {
        height: `1px`,
        backgroundColor: color.grey
    },
    author: {
        ...text.small,
        ...text.right,
        width: "100%",
        marginBottom: "40px"
    }
}

const Landing = () => {
    return (
        <Container style={inline.container}>
            <Title>pistis.</Title>
            <Text>
                “Christianity, if  false, is of
                no importance, and if true, of
                infinite importance. The only
                thing it cannot be is moderately
                important.”
            </Text>
            <div style={inline.rule} />
            <Text style={inline.author}>
                C.S. Lewis
            </Text>
            <Link to="/bubbles">
                <Chevron direction="down" />
            </Link>
        </Container>
    );
}

export default Landing;