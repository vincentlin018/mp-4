"use client";

import Link from 'next/link'; // Importing the Link component from Next.js for client-side navigation.
import { styled } from 'styled-components'; // Importing styled-components for styling React components.

// Styled component for links in the navigation bar
const StyledLink = styled(Link)`
    padding: 0.25rem;
    margin: 0.5rem;
    font-size: 1.25rem;
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

// Styled component for the header section
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 100%;
    background-color: rgb(255, 236, 131);
    margin-bottom: 2rem;
`;

// Styled component for the website title (h2)
const StyledH2 = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    padding: 1rem;
`;

// Styled component for the navigation container
const StyledNav = styled.nav`
    padding: 0.5rem;
    margin: 1rem;
`;

export default function Header() {
    return (
        <>
            {/* Main header container */}
            <StyledHeader>
                {/* Website title */}
                <StyledH2>Superhero Database</StyledH2>

                {/* Navigation bar */}
                <StyledNav>
                    {/* Link to home page */}
                    <StyledLink href="/">
                        Home
                    </StyledLink>

                    {/* Link to about page */}
                    <StyledLink href="/about">
                        About
                    </StyledLink>
                </StyledNav>
            </StyledHeader>
        </>
    );
}
