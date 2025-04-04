"use client";

import { useState } from "react";
import SuperheroSearch from "./components/SuperheroSearch"; // Importing the SuperheroSearch component for the search functionality.
import SuperheroContent from "./components/SuperheroContent"; // Importing the SuperheroContent component to display superhero data.
import { SuperheroProps } from "@/types"; // Importing TypeScript type for superhero properties.
import styled from "styled-components";

// Styled component for the main container
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

// Styled component for displaying error messages
const ErrorMessage = styled.div`
    color: red;
    padding: 1rem;
    text-align: center;
    margin: auto;
`;

// Functional component for the Home page
export default function Home() {
    const [heroes, setHeroes] = useState<SuperheroProps[]>([]); // State to store the list of superheroes.
    const [error, setError] = useState(""); // State to store error messages.

    // Callback function to handle search results
    const handleSearchResults = (results: SuperheroProps[]) => {
        setHeroes(results); // Update the heroes state with the search results.
    };

    return (
        <>
            {/* Main container */}
            <StyledDiv>
                {/* Search component */}
                <SuperheroSearch
                    onSearchResults={handleSearchResults} // Pass callback to handle search results.
                    onError={setError} // Pass callback to handle errors.
                />

                {/* Display error message if there is an error */}
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </StyledDiv>

            {/* Display superhero content if no error and heroes are available */}
            {!error && heroes.length > 0 && <SuperheroContent heroes={heroes} />}
        </>
    );
}
