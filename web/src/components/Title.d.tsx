import React from "react";

import Text from "./Text.d";

import text from "../style/text";

const inline = {
    ...text.default,
    ...text.bold,
    ...text.large,
    ...text.center
}

const Title = ({ children }: { children: any }) => (
    <Text style={inline}>{children}</Text>
);

export default Title;