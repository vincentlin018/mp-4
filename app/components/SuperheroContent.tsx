"use client"; // Indicates that this component is a client-side component.

import { SuperheroProps } from '@/types'; // Importing the TypeScript type for superhero properties.
import styled from 'styled-components'; // Importing styled-components for styling React components.

// Styled component for individual superhero cards
const Card = styled.div`
    background-color: rgb(211, 175, 55);
    border-radius: 0.75rem;
    padding: 1rem;
    margin: 0.5rem;
    width: 24rem;
`;

// Styled component for the superhero's name
const HeroName = styled.h4`
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
`;

// Styled component for superhero details (e.g., real name, publisher)
const HeroDetails = styled.p`
    margin-top: 0.5rem;
    text-align: center;
`;

// Styled component for the superhero's image
const HeroImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
`;

// Styled component for the container that holds all superhero cards
const HeroesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

// Functional component to render superhero content
export default function SuperheroContent({ heroes }: { heroes: SuperheroProps[] }) {
    return (
        <HeroesContainer>
            {/* Mapping over the heroes array to render individual cards */}
            {heroes.map(hero => (
                <Card key={hero.id}>
                    {/* Displaying the hero's name */}
                    <HeroName>{hero.name}</HeroName>

                    {/* Displaying the hero's real name */}
                    <HeroDetails>Real Name: {hero.fullname}</HeroDetails>

                    {/* Displaying the publisher of the hero */}
                    <HeroDetails>Publisher: {hero.publisher}</HeroDetails>

                    {/* Displaying the hero's image */}
                    <HeroImage src={hero.image} alt={hero.name} />
                </Card>
            ))}
        </HeroesContainer>
    );
}
