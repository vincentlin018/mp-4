"use client"
import { SuperheroProps } from '@/types';
import styled from 'styled-components';

const Card = styled.div`
    background-color: rgb(186, 230, 253);
    border-radius: 0.75rem;
    padding: 1rem;
    margin: 0.5rem;
    width: 24rem;
`;

const HeroName = styled.h4`
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;
`;

const HeroDetails = styled.p`
    margin-top: 0.5rem;
    text-align: center;
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
`;

const HeroesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export default function SuperheroContent({ heroes }: { heroes: SuperheroProps[] }) {
    return (
        <HeroesContainer>
            {heroes.map(hero => (
                <Card key={hero.id}>
                    <HeroName>{hero.name}</HeroName>
                    <HeroDetails>Real Name: {hero.fullname}</HeroDetails>
                    <HeroDetails>Publisher: {hero.publisher}</HeroDetails>
                    <HeroImage src={hero.image} alt={hero.name} />
                </Card>
            ))}
        </HeroesContainer>
    );
}
