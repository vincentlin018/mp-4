import { NextRequest, NextResponse } from "next/server"; // Importing Next.js server-side request and response utilities
import { SuperheroProps, SuperheroApiResponse } from "@/types"; // Importing TypeScript types for better type safety

// Helper function to handle empty or invalid values
function getValueOrUnknown(value: string | null | undefined): string {
    // If the value is null, undefined, empty, or "-", return "Unknown"
    return (!value || value === "" || value === "-") ? "Unknown" : value;
}

// GET handler for the API route
export async function GET(request: NextRequest) {
    // Extract query parameters from the request URL
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name"); // Get the "name" parameter

    // If the "name" parameter is missing or invalid, return an error response
    if (!name) {
        return NextResponse.json({ error: "name is invalid" });
    }

    // Retrieve the API key from environment variables
    const apiKey = process.env.API_KEY;

    // If the API key is missing, log an error and return an error response
    if (!apiKey) {
        console.error("API key is undefined");
        return NextResponse.json({ error: "API key is missing in environment variables" });
    }

    try {
        // Construct the API URL using the API key and the superhero name
        const apiUrl = `https://superheroapi.com/api/${apiKey}/search/${name}`;

        // Fetch data from the superhero API
        const response = await fetch(apiUrl);

        // Parse the response as JSON and cast it to the expected type
        const data = await response.json() as SuperheroApiResponse;

        // Check if the API returned a successful response with results
        if (data.response === "success" && data.results?.length > 0) {
            // Map through the results to create an array of superheroes with formatted data
            const heroes: SuperheroProps[] = data.results.map((hero) => ({
                id: hero.id, // Superhero ID
                name: getValueOrUnknown(hero.name), // Name of the superhero (or "Unknown" if missing)
                fullname: getValueOrUnknown(hero.biography["full-name"]), // Full name of the superhero (or "Unknown")
                publisher: getValueOrUnknown(hero.biography.publisher), // Publisher of the superhero (or "Unknown")
                image: hero.image.url // URL of the superhero's image
            }));

            // Return the formatted superheroes as a JSON response
            return NextResponse.json(heroes);
        }

        // If no results are found, return an empty array
        return NextResponse.json([]);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error("Error fetching superhero data:", error);

        // Return an error response indicating a failure to fetch data
        return NextResponse.json({ error: "Failed to fetch superhero data" });
    }
}
