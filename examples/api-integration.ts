/**
 * API Integration Example
 * 
 * This example demonstrates how to integrate with the IGDB API using the types from the igdb-types package.
 * It shows how to make API requests and handle the typed responses.
 * 
 * Note: This example uses axios for HTTP requests. You would need to install it:
 * npm install axios
 * or
 * bun install axios
 */

// Import the necessary types from the igdb-types package
import { Game, Platform, Genre, AgeRating, AgeRatingCategoryEnum } from 'igdb-types';

// This would be imported from axios in a real project
// import axios from 'axios';

/**
 * Example function to fetch games from the IGDB API
 * 
 * @param clientId Your Twitch Client ID
 * @param accessToken Your OAuth access token
 * @param query The IGDB API query
 * @returns A promise that resolves to an array of Game objects
 */
async function fetchGames(clientId: string, accessToken: string, query: string): Promise<Game[]> {
  // In a real implementation, you would use axios like this:
  /*
  const response = await axios.post(
    'https://api.igdb.com/v4/games',
    query,
    {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      }
    }
  );
  
  return response.data as Game[];
  */
  
  // For this example, we'll return mock data
  return mockApiResponse;
}

// Example usage of the fetchGames function
async function getRecentGames(): Promise<void> {
  try {
    // Replace with your actual credentials
    const clientId = 'your_client_id';
    const accessToken = 'your_access_token';
    
    // IGDB API query to get recent games with expanded relationships
    const query = `
      fields name, slug, summary, first_release_date, rating, 
             genres.name, platforms.name, age_ratings.*, cover.url;
      where first_release_date > ${Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 90}; 
      limit 5;
    `;
    
    const games = await fetchGames(clientId, accessToken, query);
    
    // Process the typed response
    games.forEach(game => {
      console.log(`Game: ${game.name}`);
      console.log(`Release Date: ${new Date(game.first_release_date * 1000).toLocaleDateString()}`);
      
      // Type-safe access to rating
      if (game.rating) {
        console.log(`Rating: ${game.rating.toFixed(1)}/100`);
      }
      
      // Type-safe access to genres (expanded relationship)
      if (game.genres) {
        const genreNames = game.genres.map(genre => 
          typeof genre === 'number' ? `Genre ID: ${genre}` : genre.name
        );
        console.log(`Genres: ${genreNames.join(', ')}`);
      }
      
      // Type-safe access to platforms (expanded relationship)
      if (game.platforms) {
        const platformNames = game.platforms.map(platform => 
          typeof platform === 'number' ? `Platform ID: ${platform}` : platform.name
        );
        console.log(`Platforms: ${platformNames.join(', ')}`);
      }
      
      // Type-safe access to age ratings (expanded relationship)
      if (game.age_ratings) {
        game.age_ratings.forEach(rating => {
          if (typeof rating !== 'number') {
            // This is an expanded AgeRating object
            const ratingObj: AgeRating = rating;
            
            // Use enum values for type-safe comparisons
            if (ratingObj.category === AgeRatingCategoryEnum.ESRB) {
              console.log(`ESRB Rating: ${ratingObj.rating}`);
            } else if (ratingObj.category === AgeRatingCategoryEnum.PEGI) {
              console.log(`PEGI Rating: ${ratingObj.rating}`);
            }
          }
        });
      }
      
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}

// Example of how to build a more complex query
function buildAdvancedQuery(): string {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const oneYearAgo = currentTimestamp - 60 * 60 * 24 * 365;
  
  return `
    fields name, slug, summary, storyline, first_release_date, rating, rating_count, 
           aggregated_rating, aggregated_rating_count, total_rating, total_rating_count,
           genres.name, platforms.name, platforms.platform_family.name,
           involved_companies.company.name, involved_companies.developer, involved_companies.publisher,
           age_ratings.*, cover.url, screenshots.url, videos.video_id, websites.*;
    where first_release_date > ${oneYearAgo} 
      & rating > 80 
      & rating_count > 50;
    sort rating desc;
    limit 10;
  `;
}

// Mock API response for demonstration purposes
const mockApiResponse: Game[] = [
  {
    name: "Baldur's Gate 3",
    slug: "baldurs-gate-3",
    summary: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.",
    first_release_date: 1691020800, // August 3, 2023
    rating: 94.8,
    checksum: "mock-checksum-1",
    created_at: new Date("2023-08-03T00:00:00Z"),
    updated_at: new Date("2023-08-03T00:00:00Z"),
    genres: [
      { id: 12, name: "Role-playing (RPG)", slug: "role-playing-rpg", checksum: "genre-1", created_at: new Date(), updated_at: new Date() },
      { id: 16, name: "Turn-based strategy (TBS)", slug: "turn-based-strategy-tbs", checksum: "genre-2", created_at: new Date(), updated_at: new Date() }
    ],
    platforms: [
      { id: 6, name: "PC (Microsoft Windows)", slug: "win", checksum: "platform-1", created_at: new Date(), updated_at: new Date() },
      { id: 48, name: "PlayStation 5", slug: "ps5", checksum: "platform-2", created_at: new Date(), updated_at: new Date() }
    ],
    age_ratings: [
      { 
        id: 1, 
        category: AgeRatingCategoryEnum.ESRB, 
        rating: 5, // Mature 17+
        checksum: "age-rating-1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  },
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    slug: "the-legend-of-zelda-tears-of-the-kingdom",
    summary: "The adventure is yours to create in a world fueled by your imagination. In this sequel to the Legend of Zelda: Breath of the Wild, you'll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above.",
    first_release_date: 1683849600, // May 12, 2023
    rating: 96.2,
    checksum: "mock-checksum-2",
    created_at: new Date("2023-05-12T00:00:00Z"),
    updated_at: new Date("2023-05-12T00:00:00Z"),
    genres: [
      { id: 31, name: "Adventure", slug: "adventure", checksum: "genre-3", created_at: new Date(), updated_at: new Date() },
      { id: 12, name: "Role-playing (RPG)", slug: "role-playing-rpg", checksum: "genre-1", created_at: new Date(), updated_at: new Date() }
    ],
    platforms: [
      { id: 130, name: "Nintendo Switch", slug: "switch", checksum: "platform-3", created_at: new Date(), updated_at: new Date() }
    ],
    age_ratings: [
      { 
        id: 2, 
        category: AgeRatingCategoryEnum.ESRB, 
        rating: 3, // Everyone 10+
        checksum: "age-rating-2",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  }
];

// Call the example function
// In a real application, you would call this function when needed
// getRecentGames();

// Export the example functions for use in other examples
export { fetchGames, getRecentGames, buildAdvancedQuery };