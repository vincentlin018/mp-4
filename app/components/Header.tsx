"use client"
import Link from 'next/link';
import { styled } from 'styled-components';

const StyledLink = styled(Link) `
    padding: 0.25rem;
    margin: 0.5rem;
    font-size: 1.25rem;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 5rem;
    
`;

const StyledH2 = styled.h2`
    font-size: 2.25rem;
    font-weight: 600;
    padding: 1rem
`;

const StyledNav = styled.nav`
    padding: 0.5rem;
    margin: 1rem;
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <StyledH2>Superheroes</StyledH2>

                <StyledNav>
                    <StyledLink href="/">
                        Home
                    </StyledLink>
                    <StyledLink href="/about">
                        About
                    </StyledLink>
                </StyledNav>
            </StyledHeader>
        </>
    );
}