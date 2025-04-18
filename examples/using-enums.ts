/**
 * Using Enums Example
 * 
 * This example demonstrates how to use enums from the igdb-types package.
 * It shows how to use enums for type-safe categorical data in game objects.
 */

// Import the necessary types and enums from the igdb-types package
import { 
  Game, 
  GameStatusEnum, 
  GameCategoryEnum,
  AgeRating,
  AgeRatingCategoryEnum,
  AgeRatingRatingEnum,
  WebsiteCategoryEnum,
  Website
} from 'igdb-types';

// Example 1: Using enums for game status and category
const game: Game = {
  name: "Starfield",
  slug: "starfield",
  checksum: "c3d4e5f6-g7h8-9012-ijkl-mn3456789012",
  created_at: new Date("2022-01-01T00:00:00Z"),
  updated_at: new Date("2023-09-01T00:00:00Z"),
  
  // Using enum values for categorical data
  status: GameStatusEnum.RELEASED, // Using the enum value for "Released"
  category: GameCategoryEnum.MAIN_GAME, // Using the enum value for "Main Game"
};

// Example 2: Using enums for age ratings
const gameWithAgeRatings: Game = {
  name: "Grand Theft Auto V",
  slug: "grand-theft-auto-v",
  checksum: "d4e5f6g7-h8i9-0123-jklm-no4567890123",
  created_at: new Date("2013-09-17T00:00:00Z"),
  updated_at: new Date("2023-01-01T00:00:00Z"),
  
  // Array of age ratings using enums
  age_ratings: [
    {
      category: AgeRatingCategoryEnum.ESRB, // Entertainment Software Rating Board
      rating: AgeRatingRatingEnum.ESRB_MATURE, // M (Mature 17+)
      checksum: "age-rating-123",
      created_at: new Date("2013-09-17T00:00:00Z"),
      updated_at: new Date("2013-09-17T00:00:00Z")
    },
    {
      category: AgeRatingCategoryEnum.PEGI, // Pan European Game Information
      rating: AgeRatingRatingEnum.PEGI_EIGHTEEN, // PEGI 18
      checksum: "age-rating-456",
      created_at: new Date("2013-09-17T00:00:00Z"),
      updated_at: new Date("2013-09-17T00:00:00Z")
    }
  ]
};

// Example 3: Using enums for website categories
const gameWithWebsites: Game = {
  name: "The Elder Scrolls V: Skyrim",
  slug: "the-elder-scrolls-v-skyrim",
  checksum: "e5f6g7h8-i9j0-1234-klmn-op5678901234",
  created_at: new Date("2011-11-11T00:00:00Z"),
  updated_at: new Date("2022-01-01T00:00:00Z"),
  
  // Array of websites using enums for categories
  websites: [
    {
      category: WebsiteCategoryEnum.OFFICIAL, // Official website
      url: "https://elderscrolls.bethesda.net/skyrim/",
      checksum: "website-123",
      created_at: new Date("2011-11-11T00:00:00Z"),
      updated_at: new Date("2011-11-11T00:00:00Z")
    },
    {
      category: WebsiteCategoryEnum.STEAM, // Steam store page
      url: "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/",
      checksum: "website-456",
      created_at: new Date("2011-11-11T00:00:00Z"),
      updated_at: new Date("2011-11-11T00:00:00Z")
    },
    {
      category: WebsiteCategoryEnum.REDDIT, // Reddit community
      url: "https://www.reddit.com/r/skyrim/",
      checksum: "website-789",
      created_at: new Date("2011-11-11T00:00:00Z"),
      updated_at: new Date("2011-11-11T00:00:00Z")
    }
  ]
};

// Example 4: Using enums in conditional logic
function isGameReleased(game: Game): boolean {
  return game.status === GameStatusEnum.RELEASED;
}

function getAgeRatingDescription(ageRating: AgeRating): string {
  if (ageRating.category === AgeRatingCategoryEnum.ESRB) {
    switch (ageRating.rating) {
      case AgeRatingRatingEnum.ESRB_EVERYONE:
        return "Everyone";
      case AgeRatingRatingEnum.ESRB_EVERYONE_TEN_PLUS:
        return "Everyone 10+";
      case AgeRatingRatingEnum.ESRB_TEEN:
        return "Teen";
      case AgeRatingRatingEnum.ESRB_MATURE:
        return "Mature 17+";
      case AgeRatingRatingEnum.ESRB_ADULTS_ONLY:
        return "Adults Only 18+";
      default:
        return "Unknown ESRB Rating";
    }
  } else if (ageRating.category === AgeRatingCategoryEnum.PEGI) {
    switch (ageRating.rating) {
      case AgeRatingRatingEnum.PEGI_THREE:
        return "PEGI 3";
      case AgeRatingRatingEnum.PEGI_SEVEN:
        return "PEGI 7";
      case AgeRatingRatingEnum.PEGI_TWELVE:
        return "PEGI 12";
      case AgeRatingRatingEnum.PEGI_SIXTEEN:
        return "PEGI 16";
      case AgeRatingRatingEnum.PEGI_EIGHTEEN:
        return "PEGI 18";
      default:
        return "Unknown PEGI Rating";
    }
  }
  
  return "Unknown Rating System";
}

// Example usage
console.log(`Is ${game.name} released? ${isGameReleased(game)}`);

if (gameWithAgeRatings.age_ratings) {
  gameWithAgeRatings.age_ratings.forEach(rating => {
    if (typeof rating !== 'number') {
      console.log(`${gameWithAgeRatings.name} has rating: ${getAgeRatingDescription(rating)}`);
    }
  });
}

// Example 5: Type safety with enums
function getWebsitesByCategory(game: Game, category: WebsiteCategoryEnum): Website[] {
  if (!game.websites) {
    return [];
  }
  
  return game.websites.filter(website => {
    if (typeof website !== 'number') {
      return website.category === category;
    }
    return false;
  }) as Website[]; // Type assertion since we've filtered out number types
}

// Get all official websites
const officialWebsites = getWebsitesByCategory(gameWithWebsites, WebsiteCategoryEnum.OFFICIAL);
console.log(`${gameWithWebsites.name} has ${officialWebsites.length} official website(s)`);