export type SuperheroProps = {
    id: string;
    name: string;
    fullname: string;  // This will come from biography["full-name"] in the API
    publisher: string; // This will come from biography.publisher in the API
    image: string;     // This will store the URL from image.url in the API
}

export type SuperheroApiResponse = {
    response: string;
    "results-for": string;
    results: Array<{
        id: string;
        name: string;
        powerstats: {
            intelligence: string;
            strength: string;
            speed: string;
            durability: string;
            power: string;
            combat: string;
        };
        biography: {
            "full-name": string;
            "alter-egos": string;
            aliases: string[];
            "place-of-birth": string;
            "first-appearance": string;
            publisher: string;
            alignment: string;
        };
        appearance: {
            gender: string;
            race: string;
            height: string[];
            weight: string[];
            "eye-color": string;
            "hair-color": string;
        };
        work: {
            occupation: string;
            base: string;
        };
        connections: {
            "group-affiliation": string;
            relatives: string;
        };
        image: {
            url: string;
        };
    }>;
};