/**
 * Basic Usage Example
 * 
 * This example demonstrates how to use the basic types from the igdb-types package.
 * It shows how to define and use the Game type with proper type checking.
 */

// Import the Game type from the igdb-types package
import { Game } from 'igdb-types';

// Create a game object with the Game type
const game: Game = {
  // Required fields
  name: "The Witcher 3: Wild Hunt",
  slug: "the-witcher-3-wild-hunt",
  checksum: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // UUID hash
  created_at: new Date("2015-05-19T00:00:00Z"),
  updated_at: new Date("2023-01-15T00:00:00Z"),
  
  // Optional fields
  summary: "A story-driven, open world RPG set in a fantasy universe",
  storyline: "The Witcher 3: Wild Hunt follows Geralt of Rivia as he searches for his adopted daughter, Ciri, who is being pursued by the Wild Hunt.",
  first_release_date: 1431993600, // Unix timestamp for May 19, 2015
  rating: 92.5, // Rating out of 100
  rating_count: 8754,
  aggregated_rating: 94.3, // Critic rating
  aggregated_rating_count: 124,
  total_rating: 93.4, // Combined user and critic rating
  total_rating_count: 8878,
  url: "https://www.igdb.com/games/the-witcher-3-wild-hunt"
};

// Accessing properties with full type safety
console.log(`Game: ${game.name}`);
console.log(`Release Date: ${new Date(game.first_release_date * 1000).toLocaleDateString()}`);
console.log(`Rating: ${game.rating}/100 (${game.rating_count} ratings)`);

// Type checking prevents invalid properties
// This would cause a TypeScript error:
// game.invalid_property = "This property doesn't exist on the Game type";

// Type checking ensures correct types for properties
// This would cause a TypeScript error:
// game.rating = "Not a number"; // Error: Type 'string' is not assignable to type 'number'