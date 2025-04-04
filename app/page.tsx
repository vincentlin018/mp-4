"use client";
import { useState } from "react";
import SuperheroSearch from "./components/SuperheroSearch";
import SuperheroContent from "./components/SuperheroContent";
import { SuperheroProps } from "@/types";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const ErrorMessage = styled.div`
    color: red;
    padding: 1rem;
    text-align: center;
    margin: auto;
`;

export default function Home() {
    const [heroes, setHeroes] = useState<SuperheroProps[]>([]);
    const [error, setError] = useState("");

    const handleSearchResults = (results: SuperheroProps[]) => {
        setHeroes(results);
    };

    return (
        <>
            <StyledDiv>
                <SuperheroSearch
                    onSearchResults={handleSearchResults}
                    onError={setError}
                />

                {error && <ErrorMessage>{error}</ErrorMessage>}
            </StyledDiv>

            {!error && heroes.length > 0 && <SuperheroContent heroes={heroes} />}
        </>
    );
}

