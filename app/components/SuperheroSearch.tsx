"use client";

import { Button, TextField } from "@mui/material"; // Importing Material-UI components for styling and functionality.
import { useState } from "react";
import styled from "styled-components";
import { SuperheroProps } from "@/types";

// Styled component for the form container
const FormContainer = styled.form`
    width: 30%;
    min-width: 20rem;
    border-radius: 0.75rem;
    padding: 1rem;
    background-color: rgb(227, 0, 34);
    margin: auto;
    box-sizing: border-box;
`;

// Styled TextField with custom background and text colors
const TextFieldStyled = styled(TextField)`
    && {
        background-color: rgb(252, 194, 0);
        width: 100%;
        margin-bottom: 1rem;

        input {
            color: black; /* Sets input text color to black */
        }

        label {
            color: black; /* Sets label text color to black */
        }
    }
`;

// Styled container for the button
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

// Styled Button with custom background and hover effects
const ButtonStyled = styled(Button)`
    && {
        width: 50%;
        background-color: rgb(252, 194, 0);

        color: black; /* Sets button text color to black */

        &:hover {
            background-color: rgb(255, 214, 10); /* Slightly lighter yellow on hover */
        }
    }
`;

// Functional component for the superhero search form
export default function SuperheroSearch({ onSearchResults, onError }: {
    onSearchResults: (heroes: SuperheroProps[]) => void, // Callback function to handle search results
    onError: (message: string) => void // Callback function to handle error messages
}) {
    const [superheroName, setSuperheroName] = useState(""); // State to track the input superhero name
    const [loading, setLoading] = useState(false); // State to track the loading status

    // Function to handle the search operation
    const handleSearch = async () => {
        if (!superheroName.trim()) return; // Prevent empty searches

        setLoading(true); // Set loading state to true while fetching data
        try {
            const response = await fetch(`/api/getSuperheroData?name=${encodeURIComponent(superheroName)}`); // Fetch data from the API

            if (!response.ok) { // Handle HTTP errors
                console.error(`HTTP error! status: ${response.status}`);
                onSearchResults([]); // Clear previous results
                onError(`Error: Unable to fetch data (${response.status})`); // Set error message
                return;
            }

            const data = await response.json(); // Parse the JSON response

            if (data.length === 0) {
                onError(`The superhero "${superheroName}" does not exist in our database.`); // Handle no results found
            } else {
                onError(""); // Clear any previous errors
                onSearchResults(data); // Pass the results to the parent component
            }
        } catch (error) {
            console.error("Error searching for superhero:", error); // Log any unexpected errors
            onSearchResults([]); // Clear previous results
            onError("Error: Something went wrong with the search"); // Set a generic error message
        } finally {
            setLoading(false); // Reset loading state after the operation completes
        }
    };

    return (
        <FormContainer onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            void handleSearch(); // Trigger the search operation
        }}>
            {/* Input field for entering superhero name */}
            <TextFieldStyled
                variant="filled"
                label="Superhero Name"
                placeholder="Enter a superhero name"
                value={superheroName}
                onChange={(e) => setSuperheroName(e.target.value)} // Update state when input changes
            />

            {/* Container for the search button */}
            <ButtonContainer>
                <ButtonStyled
                    variant="contained"
                    type="submit"
                    disabled={superheroName === "" || loading} // Disable button when input is empty or loading is in progress
                >
                    {loading ? "Searching..." : "Search"} {/* Display loading text or "Search" */}
                </ButtonStyled>
            </ButtonContainer>
        </FormContainer>
    );
}
