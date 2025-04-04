"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { SuperheroProps } from "@/types";

const FormContainer = styled.form`
    width: 24rem;
    border-radius: 0.75rem;
    padding: 1rem;
    background-color: rgb(56, 189, 248);
`;

const TextFieldStyled = styled(TextField)`
    background-color: white;
    width: 100%;
    margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonStyled = styled(Button)`
    width: 50%;
`;

export default function SuperheroSearch({ onSearchResults, onError }: {
    onSearchResults: (heroes: SuperheroProps[]) => void,
    onError: (message: string) => void
}) {
    const [superheroName, setSuperheroName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!superheroName.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(`/api/getSuperheroData?name=${encodeURIComponent(superheroName)}`);

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                onSearchResults([]);
                onError(`Error: Unable to fetch data (${response.status})`);
                return;
            }

            const data = await response.json();

            if (data.length === 0) {
                onError(`The superhero "${superheroName}" does not exist in our database.`);
            } else {
                onError(""); // Clear any previous errors
                onSearchResults(data);
            }
        } catch (error) {
            console.error("Error searching for superhero:", error);
            onSearchResults([]);
            onError("Error: Something went wrong with the search");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer onSubmit={(e) => {
            e.preventDefault();
            void handleSearch();
        }}>
            <TextFieldStyled
                variant="filled"
                label="Superhero Name"
                placeholder="Enter a superhero name"
                value={superheroName}
                onChange={(e) => setSuperheroName(e.target.value)}
            />
            <ButtonContainer>
                <ButtonStyled
                    variant="contained"
                    type="submit"
                    disabled={superheroName === "" || loading}
                >
                    {loading ? "Searching..." : "Search"}
                </ButtonStyled>
            </ButtonContainer>
        </FormContainer>
    );
}
