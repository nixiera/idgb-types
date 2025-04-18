/**
 * Relationships Example
 * 
 * This example demonstrates how to work with relationships between types in the igdb-types package.
 * It shows how to handle both ID references and expanded objects in API responses.
 */

// Import the necessary types from the igdb-types package
import { Game, Platform, Genre, Company, InvolvedCompany } from 'igdb-types';

// Example 1: Game with ID references (unexpanded relationships)
const gameWithIds: Game = {
  name: "Cyberpunk 2077",
  slug: "cyberpunk-2077",
  checksum: "b2c3d4e5-f6g7-8901-hijk-lm2345678901",
  created_at: new Date("2020-12-10T00:00:00Z"),
  updated_at: new Date("2023-02-20T00:00:00Z"),
  
  // Relationships as ID references
  platforms: [48, 49, 6, 167], // Xbox One, Xbox Series X|S, PC, PlayStation 5
  genres: [5, 12, 31], // Shooter, RPG, Adventure
  involved_companies: [123, 456] // CD Projekt Red, etc.
};

// Example 2: Game with expanded relationships
const gameWithExpanded: Game = {
  name: "Cyberpunk 2077",
  slug: "cyberpunk-2077",
  checksum: "b2c3d4e5-f6g7-8901-hijk-lm2345678901",
  created_at: new Date("2020-12-10T00:00:00Z"),
  updated_at: new Date("2023-02-20T00:00:00Z"),
  
  // Expanded platform objects
  platforms: [
    {
      id: 48,
      name: "Xbox One",
      slug: "xbox-one",
      checksum: "platform-123",
      created_at: new Date("2013-05-21T00:00:00Z"),
      updated_at: new Date("2022-01-10T00:00:00Z")
    },
    {
      id: 49,
      name: "Xbox Series X|S",
      slug: "xbox-series-x",
      checksum: "platform-456",
      created_at: new Date("2020-11-10T00:00:00Z"),
      updated_at: new Date("2022-01-15T00:00:00Z")
    }
  ],
  
  // Expanded genre objects
  genres: [
    {
      id: 5,
      name: "Shooter",
      slug: "shooter",
      checksum: "genre-123",
      created_at: new Date("2010-01-01T00:00:00Z"),
      updated_at: new Date("2020-01-01T00:00:00Z")
    },
    {
      id: 12,
      name: "Role-playing (RPG)",
      slug: "role-playing-rpg",
      checksum: "genre-456",
      created_at: new Date("2010-01-01T00:00:00Z"),
      updated_at: new Date("2020-01-01T00:00:00Z")
    }
  ],
  
  // Expanded involved company objects with nested company objects
  involved_companies: [
    {
      id: 123,
      company: {
        id: 789,
        name: "CD Projekt Red",
        slug: "cd-projekt-red",
        checksum: "company-789",
        created_at: new Date("2010-01-01T00:00:00Z"),
        updated_at: new Date("2020-01-01T00:00:00Z")
      },
      developer: true,
      publisher: true,
      checksum: "involved-123",
      created_at: new Date("2015-01-01T00:00:00Z"),
      updated_at: new Date("2020-01-01T00:00:00Z")
    }
  ]
};

// Example 3: Working with both expanded and unexpanded data
function displayGamePlatforms(game: Game): void {
  if (!game.platforms) {
    console.log("No platform information available");
    return;
  }
  
  console.log(`Platforms for ${game.name}:`);
  
  game.platforms.forEach(platform => {
    if (typeof platform === 'number') {
      // Handle ID reference
      console.log(`- Platform ID: ${platform}`);
    } else {
      // Handle expanded Platform object
      console.log(`- ${platform.name} (ID: ${platform.id})`);
    }
  });
}

// Example usage
displayGamePlatforms(gameWithIds);
displayGamePlatforms(gameWithExpanded);

// Example 4: Type-safe access to nested relationships
function displayDevelopers(game: Game): void {
  if (!game.involved_companies) {
    console.log("No company information available");
    return;
  }
  
  console.log(`Developers for ${game.name}:`);
  
  game.involved_companies.forEach(involvedCompany => {
    if (typeof involvedCompany === 'number') {
      // Handle ID reference
      console.log(`- Involved Company ID: ${involvedCompany}`);
    } else {
      // Handle expanded InvolvedCompany object
      if (involvedCompany.developer) {
        const company = typeof involvedCompany.company === 'number' 
          ? `Company ID: ${involvedCompany.company}`
          : involvedCompany.company.name;
          
        console.log(`- ${company}`);
      }
    }
  });
}

// Example usage
displayDevelopers(gameWithExpanded);