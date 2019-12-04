import React from "react";

import Text from "./Text.d";

import text from "../style/text";
import color from "../style/color";

const include = {
    ...text.center,
    color: color.red,
}

const Error = ({ children }: { children: any }) => (
    <Text>{children}</Text>
);

export default Error;