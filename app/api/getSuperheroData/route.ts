import { NextRequest, NextResponse } from "next/server";
import { SuperheroProps, SuperheroApiResponse } from "@/types";

// Helper function to handle empty values
function getValueOrUnknown(value: string | null | undefined): string {
    return (!value || value === "" || value === "-") ? "Unknown" : value;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");

    if (!name) {
        return NextResponse.json({error: "name is invalid"});
    }

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error("API key is undefined");
        return NextResponse.json({error: "API key is missing in environment variables"});
    }

    try {
        const apiUrl = `https://superheroapi.com/api/${apiKey}/search/${name}`;
        const response = await fetch(apiUrl);
        const data = await response.json() as SuperheroApiResponse;

        if (data.response === "success" && data.results?.length > 0) {
            const heroes: SuperheroProps[] = data.results.map((hero) => ({
                id: hero.id,
                name: getValueOrUnknown(hero.name),
                fullname: getValueOrUnknown(hero.biography["full-name"]),
                publisher: getValueOrUnknown(hero.biography.publisher),
                image: hero.image.url
            }));

            return NextResponse.json(heroes);
        }

        return NextResponse.json([]);
    } catch (error) {
        console.error("Error fetching superhero data:", error);
        return NextResponse.json({ error: "Failed to fetch superhero data" });
    }
}
