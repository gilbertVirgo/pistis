import React, { useRef, useEffect } from "react";

declare module "react";

const inline = {
    position: "relative" as const,
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box" as const,
    marginLeft: "auto", marginRight: "auto"
}

const Container = ({ onBounds, style, children }: { onBounds?: any, style?: object, children: any }) => {
    const container = useRef(null);

    useEffect(() => {
        const el: HTMLElement | null = container.current;

        if (el && onBounds) onBounds(el!.getBoundingClientRect());
    }, [container]);

    return <div ref={container} style={{ ...style, ...inline }}>{children}</div>
}

export default Container;