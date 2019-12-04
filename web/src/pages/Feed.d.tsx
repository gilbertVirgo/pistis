import React, { useEffect, useState } from "react";
import Container from "../components/Container.d";

import Error from "../components/Error.d";

declare module "react";

interface FeedProps {
    match: { params: { category: string } }
}

const Feed = ({ match: { params: { category } } }: FeedProps) => {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);

    useEffect(function () {
        (async function () {
            const response = await fetch(`/api/v1/feed/${category}`)
        })();
    }, [])

    return (
        <Container>
            {error && <Error>{error}</Error>}
            {(Array.isArray(items)) && items.map(item => {

            })}
        </Container>
    );
}

export default Videos;