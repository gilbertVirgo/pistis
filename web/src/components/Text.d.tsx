import React from "react";

import text from "../style/text";

const inline = (noMargin: boolean) => ({
    ...text.default,
    marginTop: "0",
    marginBottom: noMargin ? "0" : "20px"
})

const Text = ({ noMargin = false, style, children }: { noMargin?: boolean, style?: object, children: any }) => (
    <p style={{ ...style, ...inline(noMargin) }}>{children}</p>
)

export default Text;