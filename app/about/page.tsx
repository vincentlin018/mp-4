"use client";
import { styled } from 'styled-components';

const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledP = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function AboutPage() {
    return (
        <>
            <StyledTitle>About Page</StyledTitle>
            <StyledP>This application was created by Vincent Lin and it displays information about superheroes.</StyledP>
        </>
    );
}