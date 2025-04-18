# igdb-types

[![npm version](https://badge.fury.io/js/igdb-types.svg)](https://badge.fury.io/js/igdb-types)

An unofficial TypeScript type definitions package for the IGDB API responses.
This package aims to provide developers with strongly typed interfaces for working with IGDB data,
enhancing development speed and reducing errors.

**Important Notes:**

* **Unofficial and Community-Maintained:** This is a passion project developed and maintained by a single developer. It
  is not officially supported or endorsed by IGDB.
* **Maintenance Effort:** I will do my best to keep the type up to date with IGDB's API. However, due to the unofficial
  nature, there may be delays or inaccuracies.
* **Versioning Strategy:** This package follows semantic versioning (MAJOR.MINOR.PATCH). See our [versioning strategy](./docs/VERSION.md) 
  for details on how we handle API changes, deprecations, and breaking changes.
* **Contributions Welcome:** If you find errors or have improvements, please feel free to submit pull requests.
* **Relationship Expansion:** Most fields with a secondary key also have an optional Type apart from ID, in case if the
  relationship needs to be expanded.
* **Use at your own risk.** As this is not an official package, there is no warranty.

## Installation

Choose your preferred package manager:

```bash
npm install igdb-types
```

or

```bash
bun install igdb-types
```

## Package Structure

The package is organized into two main categories:

- **Types**: Comprehensive TypeScript interfaces for all IGDB API entities
- **Enums**: TypeScript enums for all categorical data in the IGDB API

All types and enums are exported from the main index file, allowing for clean imports:

```typescript
import { Game, GameStatusEnum } from 'igdb-types';
```

## API Overview

This package provides TypeScript definitions for all entities in the IGDB API, along with runtime type validation using Zod. Here's an overview of the main categories:

> **Note:** For a comprehensive mapping between types and IGDB API endpoints, see the [endpoints documentation](./docs/endpoints.md).

### Core Game Data
- `Game`: The central type representing a video game with all its properties
- `GameEngine`: Information about game engines
- `GameMode`: Different modes of gameplay (single-player, multiplayer, etc.)
- `GameStatus`: Release status of a game
- `GameType`: Type classification of a game

### Media & Assets
- `Artwork`: Game artwork images
- `Cover`: Game cover images
- `Screenshot`: Game screenshots
- `GameVideo`: Game trailers and videos

### Classification & Metadata
- `Genre`: Game genres
- `Theme`: Game themes
- `Keyword`: Keywords associated with games
- `AgeRating`: Age ratings from various organizations

### Companies & People
- `Company`: Game companies (developers, publishers)
- `InvolvedCompany`: Relationship between companies and games
- `Character`: Game characters

### Platforms & Releases
- `Platform`: Gaming platforms (consoles, PC, etc.)
- `ReleaseDate`: Game release dates
- `Region`: Geographic regions

### Runtime Type Validation

This package includes Zod validators for all types and enums, allowing you to validate data at runtime:

- `GameSchema`: Validates Game objects
- `GameStatusSchema`: Validates GameStatus objects
- `GameTypeSchema`: Validates GameType objects
- And many more...

Each validator comes with a corresponding type guard function:

- `isGame`: Checks if a value is a valid Game object
- `isGameStatus`: Checks if a value is a valid GameStatus object
- `isGameType`: Checks if a value is a valid GameType object
- And many more...

## Usage Examples

### Basic Type Usage

```typescript
import { Game } from 'igdb-types';

// Type checking for game objects
const game: Game = {
  name: "The Witcher 3: Wild Hunt",
  slug: "the-witcher-3-wild-hunt",
  summary: "A story-driven, open world RPG set in a fantasy universe",
  first_release_date: 1431993600, // Unix timestamp
  checksum: "abc123", // UUID hash
  created_at: new Date(),
  updated_at: new Date()
};

// Access properties with full type safety
console.log(game.name); // "The Witcher 3: Wild Hunt"
console.log(game.first_release_date); // 1431993600
```

### Runtime Type Validation

```typescript
import { GameSchema, validate, isGame } from 'igdb-types/validators';

// Validate a game object using the schema and validate function
const gameData = {
  name: "The Witcher 3: Wild Hunt",
  slug: "the-witcher-3-wild-hunt",
  checksum: "abc123",
  created_at: 1431993600,
  updated_at: 1431993600
};

// Method 1: Using the validate utility function
const result = validate(GameSchema, gameData);
if (result.success) {
  // Data is valid and typed as Game
  const validatedGame = result.data;
  console.log(`Validated game: ${validatedGame.name}`);
} else {
  // Data is invalid, error contains validation details
  console.error('Validation failed:', result.error);
}

// Method 2: Using the type guard function
if (isGame(gameData)) {
  // gameData is now typed as Game
  console.log(`Valid game: ${gameData.name}`);
} else {
  console.error('Invalid game object');
}

// Method 3: Direct schema validation
try {
  // Parse will throw an error if validation fails
  const validatedGame = GameSchema.parse(gameData);
  console.log(`Validated game: ${validatedGame.name}`);
} catch (error) {
  console.error('Validation failed:', error);
}
```

### Working with Enums

```typescript
import { Game, GameStatusEnum, GameCategoryEnum } from 'igdb-types';

// Using enums for type-safe categorical data
const releasedGame: Game = {
  name: "Cyberpunk 2077",
  slug: "cyberpunk-2077",
  status: GameStatusEnum.RELEASED, // Using enum value
  category: GameCategoryEnum.MAIN_GAME,
  checksum: "def456",
  created_at: new Date(),
  updated_at: new Date()
};

// Type checking prevents invalid enum values
// This would cause a TypeScript error:
// const invalidGame: Game = {
//   status: "not-a-valid-status", // Error: Type '"not-a-valid-status"' is not assignable to type 'GameStatusEnum'
// };

// Enum values can be used in conditionals
if (releasedGame.status === GameStatusEnum.RELEASED) {
  console.log("Game is released!");
}
```

### Handling Relationship Expansions

```typescript
import { Game, Platform, Genre } from 'igdb-types';

// Example with ID references (unexpanded)
const basicGame: Game = {
  name: "Halo Infinite",
  platforms: [48, 49, 169], // Xbox One, Xbox Series X|S, PC
  genres: [5, 12], // Shooter, Role-playing (RPG)
  checksum: "ghi789",
  created_at: new Date(),
  updated_at: new Date()
};

// Example with expanded relationships
const expandedGame: Game = {
  name: "Halo Infinite",
  // Full Platform objects instead of just IDs
  platforms: [
    {
      id: 48,
      name: "Xbox One",
      slug: "xbox-one",
      checksum: "platform1",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 49,
      name: "Xbox Series X|S",
      slug: "xbox-series-x",
      checksum: "platform2",
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  // Full Genre objects
  genres: [
    {
      id: 5,
      name: "Shooter",
      slug: "shooter",
      checksum: "genre1",
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  checksum: "ghi789",
  created_at: new Date(),
  updated_at: new Date()
};

// You can access expanded relationship data
if (Array.isArray(expandedGame.platforms)) {
  expandedGame.platforms.forEach(platform => {
    if (typeof platform === 'number') {
      console.log(`Platform ID: ${platform}`);
    } else {
      console.log(`Platform Name: ${platform.name}`);
    }
  });
}
```

### Working with API Responses

```typescript
import { Game, AgeRating, AgeRatingCategoryEnum } from 'igdb-types';
import axios from 'axios';

// Example function to fetch games from IGDB API
async function fetchGames(): Promise<Game[]> {
  const response = await axios.post('https://api.igdb.com/v4/games', 
    'fields name,genres.name,platforms.name,age_ratings.*; limit 10;',
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );

  // Response data is now typed as Game[]
  return response.data as Game[];
}

// Using the typed response
async function displayGameInfo() {
  const games = await fetchGames();

  games.forEach(game => {
    console.log(`Game: ${game.name}`);

    // Type-safe access to age ratings
    if (game.age_ratings) {
      game.age_ratings.forEach(rating => {
        if (typeof rating !== 'number') {
          // This is an expanded AgeRating object
          const ratingObj: AgeRating = rating;

          // Access enum values
          if (ratingObj.category === AgeRatingCategoryEnum.ESRB) {
            console.log('ESRB Rating:', ratingObj.rating);
          }
        }
      });
    }
  });
}
```

For more information about the IGDB API, visit the [official IGDB API documentation](https://api-docs.igdb.com/).

## Development

Install dependencies:

```bash
npm install
```

or

```bash
bun install
```

To build the package:

```bash
npm run build
```

or

```bash
bun run build
```

## License

MIT

## Contributing

If you'd like to contribute:

1. Fork the repository
2. Create your feature branch
3. Submit a pull request with your changes

## Disclaimer

This package is provided "as is," without a warranty of any kind.
The maintainer is not responsible for any issues arising from the use of these type definitions.
