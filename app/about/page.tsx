"use client";

import { styled } from 'styled-components';

// Styled component for the title (h1)
const StyledTitle = styled.h1`
    text-align: center;
`;

// Styled component for paragraph (p) elements
const StyledP = styled.p`
    color: black;
    text-align: center;
    margin: auto;
`;

// Styled component for an unordered list (ul)
const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    list-style-position: inside;
`;

// Styled component for individual list items (li)
const StyledListItem = styled.li`
    text-align: center;
`;

export default function AboutPage() {
    return (
        <>
            {/* Title of the About Page */}
            <StyledTitle>About Page</StyledTitle>

            {/* Description of the application and its creator */}
            <StyledP>This application was created by Vincent Lin and it displays information about superheroes.</StyledP>

            {/* Explanation of what the app displays */}
            <StyledP>It fetches superhero details from comics and displays:</StyledP>

            {/* List of details displayed by the app */}
            <StyledList>
                <StyledListItem>Hero Name</StyledListItem>
                <StyledListItem>Real Name</StyledListItem>
                <StyledListItem>The Publisher</StyledListItem>
                <StyledListItem>Picture</StyledListItem>
            </StyledList>

            {/* Additional notes about missing data and image issues */}
            <StyledP>Please note that some heroes might not have the information in the database
                and in that case, the field is labeled unknown. Furthermore, some images might not
                load as their links lead to a deleted page.</StyledP>

            {/* Information about the API used for fetching superhero data */}
            <StyledP>All the information used comes from this API - https://superheroapi.com/</StyledP>
        </>
    );
}
