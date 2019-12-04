import React from "react";

const inline = {
    width: "40px"
}

const Chevron = ({ style, direction }: { style?: object, direction: string }) => (
    <img style={inline} src={require(`../assets/chev-${direction}.svg`)} />
);

export default Chevron;