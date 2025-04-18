# IGDB API Endpoints and Type Relationships

This document provides a comprehensive mapping between the TypeScript types defined in this package and the corresponding IGDB API endpoints. It serves as a reference for developers who want to understand how to use the types with the IGDB API.

## Table of Contents

- [Introduction](#introduction)
- [How to Use This Document](#how-to-use-this-document)
- [Core Game Data](#core-game-data)
- [Media & Assets](#media--assets)
- [Classification & Metadata](#classification--metadata)
- [Companies & People](#companies--people)
- [Platforms & Releases](#platforms--releases)
- [Collections & Franchises](#collections--franchises)
- [Miscellaneous](#miscellaneous)
- [Examples](#examples)

## Introduction

The IGDB API provides access to a vast database of video game information through various endpoints. Each endpoint corresponds to a specific type of data, such as games, platforms, companies, etc. This package provides TypeScript type definitions for the responses from these endpoints, making it easier to work with the data in a type-safe manner.

This document maps each TypeScript type to its corresponding API endpoint, providing a clear reference for developers who want to use the IGDB API with TypeScript.

## How to Use This Document

For each category of data, this document lists the available endpoints, the corresponding TypeScript types, and a brief description of what the endpoint provides. You can use this information to:

1. Identify which endpoint to use for specific data
2. Understand the structure of the response data
3. Use the appropriate TypeScript type for type checking

## Core Game Data

| Endpoint | Type | Description |
|----------|------|-------------|
| [/games](https://api.igdb.com/v4/games) | `Game` | The central endpoint for accessing game information |
| [/game_engines](https://api.igdb.com/v4/game_engines) | `GameEngine` | Information about game engines used in games |
| [/game_modes](https://api.igdb.com/v4/game_modes) | `GameMode` | Different modes of gameplay (single-player, multiplayer, etc.) |
| [/game_statuses](https://api.igdb.com/v4/game_statuses) | `GameStatus` | Release status of a game (released, alpha, beta, etc.) |
| [/game_types](https://api.igdb.com/v4/game_types) | `GameType` | Type classification of a game |
| [/game_versions](https://api.igdb.com/v4/game_versions) | `GameVersion` | Different versions of a game |
| [/game_version_features](https://api.igdb.com/v4/game_version_features) | `GameVersionFeature` | Features available in different game versions |
| [/game_version_feature_values](https://api.igdb.com/v4/game_version_feature_values) | `GameVersionFeatureValue` | Values for game version features |
| [/game_videos](https://api.igdb.com/v4/game_videos) | `GameVideo` | Videos associated with games |
| [/game_localizations](https://api.igdb.com/v4/game_localizations) | `GameLocalization` | Localization information for games |
| [/game_time_to_beats](https://api.igdb.com/v4/game_time_to_beats) | `GameTimeToBeat` | Information about how long it takes to complete games |
| [/game_release_formats](https://api.igdb.com/v4/game_release_formats) | `GameReleaseFormat` | Formats in which games are released |

## Media & Assets

| Endpoint | Type | Description |
|----------|------|-------------|
| [/artworks](https://api.igdb.com/v4/artworks) | `Artwork` | Artwork images for games |
| [/covers](https://api.igdb.com/v4/covers) | `Cover` | Cover images for games |
| [/screenshots](https://api.igdb.com/v4/screenshots) | `Screenshot` | Screenshots of games |
| [/game_videos](https://api.igdb.com/v4/game_videos) | `GameVideo` | Videos of games |
| [/game_engine_logos](https://api.igdb.com/v4/game_engine_logos) | `GameEngineLogo` | Logos for game engines |
| [/company_logos](https://api.igdb.com/v4/company_logos) | `CompanyLogo` | Logos for companies |
| [/platform_logos](https://api.igdb.com/v4/platform_logos) | `PlatformLogo` | Logos for platforms |
| [/character_mug_shots](https://api.igdb.com/v4/character_mug_shots) | `CharacterMugShot` | Mug shots of characters |
| [/event_logos](https://api.igdb.com/v4/event_logos) | `EventLogo` | Logos for events |

## Classification & Metadata

| Endpoint | Type | Description |
|----------|------|-------------|
| [/genres](https://api.igdb.com/v4/genres) | `Genre` | Game genres |
| [/themes](https://api.igdb.com/v4/themes) | `Theme` | Game themes |
| [/keywords](https://api.igdb.com/v4/keywords) | `Keyword` | Keywords associated with games |
| [/age_ratings](https://api.igdb.com/v4/age_ratings) | `AgeRating` | Age ratings from various organizations |
| [/age_rating_categories](https://api.igdb.com/v4/age_rating_categories) | `AgeRatingCategory` | Categories of age ratings |
| [/age_rating_content_descriptions](https://api.igdb.com/v4/age_rating_content_descriptions) | `AgeRatingContentDescription` | Content descriptions for age ratings |
| [/age_rating_content_descriptions_v2](https://api.igdb.com/v4/age_rating_content_descriptions_v2) | `AgeRatingContentDescriptionV2` | Updated content descriptions for age ratings |
| [/age_rating_organizations](https://api.igdb.com/v4/age_rating_organizations) | `AgeRatingOrganization` | Organizations that provide age ratings |
| [/player_perspectives](https://api.igdb.com/v4/player_perspectives) | `PlayerPerspective` | Perspectives from which games are played |

## Companies & People

| Endpoint | Type | Description |
|----------|------|-------------|
| [/companies](https://api.igdb.com/v4/companies) | `Company` | Game companies (developers, publishers) |
| [/involved_companies](https://api.igdb.com/v4/involved_companies) | `InvolvedCompany` | Relationship between companies and games |
| [/company_websites](https://api.igdb.com/v4/company_websites) | `CompanyWebsite` | Websites associated with companies |
| [/company_statuses](https://api.igdb.com/v4/company_statuses) | `CompanyStatus` | Status of companies |
| [/characters](https://api.igdb.com/v4/characters) | `Character` | Game characters |
| [/character_genders](https://api.igdb.com/v4/character_genders) | `CharacterGender` | Genders of characters |
| [/character_species](https://api.igdb.com/v4/character_species) | `CharacterSpecies` | Species of characters |

## Platforms & Releases

| Endpoint | Type | Description |
|----------|------|-------------|
| [/platforms](https://api.igdb.com/v4/platforms) | `Platform` | Gaming platforms (consoles, PC, etc.) |
| [/platform_families](https://api.igdb.com/v4/platform_families) | `PlatformFamily` | Families of platforms |
| [/platform_versions](https://api.igdb.com/v4/platform_versions) | `PlatformVersion` | Different versions of platforms |
| [/platform_version_companies](https://api.igdb.com/v4/platform_version_companies) | `PlatformVersionCompany` | Companies associated with platform versions |
| [/platform_version_release_dates](https://api.igdb.com/v4/platform_version_release_dates) | `PlatformVersionReleaseDate` | Release dates for platform versions |
| [/platform_websites](https://api.igdb.com/v4/platform_websites) | `PlatformWebsite` | Websites associated with platforms |
| [/platform_types](https://api.igdb.com/v4/platform_types) | `PlatformType` | Types of platforms |
| [/release_dates](https://api.igdb.com/v4/release_dates) | `ReleaseDate` | Release dates for games |
| [/release_date_regions](https://api.igdb.com/v4/release_date_regions) | `ReleaseDateRegion` | Regions for release dates |
| [/release_date_statuses](https://api.igdb.com/v4/release_date_statuses) | `ReleaseDateStatus` | Status of release dates |
| [/regions](https://api.igdb.com/v4/regions) | `Region` | Geographic regions |

## Collections & Franchises

| Endpoint | Type | Description |
|----------|------|-------------|
| [/collections](https://api.igdb.com/v4/collections) | `Collection` | Collections of games |
| [/collection_types](https://api.igdb.com/v4/collection_types) | `CollectionType` | Types of collections |
| [/collection_memberships](https://api.igdb.com/v4/collection_memberships) | `CollectionMembership` | Memberships of games in collections |
| [/collection_membership_types](https://api.igdb.com/v4/collection_membership_types) | `CollectionMembershipType` | Types of collection memberships |
| [/collection_relations](https://api.igdb.com/v4/collection_relations) | `CollectionRelation` | Relations between collections |
| [/collection_relation_types](https://api.igdb.com/v4/collection_relation_types) | `CollectionRelationType` | Types of collection relations |
| [/franchises](https://api.igdb.com/v4/franchises) | `Franchise` | Game franchises |

## Miscellaneous

| Endpoint | Type | Description |
|----------|------|-------------|
| [/alternative_names](https://api.igdb.com/v4/alternative_names) | `AlternativeName` | Alternative names for games |
| [/external_games](https://api.igdb.com/v4/external_games) | `ExternalGame` | External IDs for games on other services |
| [/external_game_sources](https://api.igdb.com/v4/external_game_sources) | `ExternalGameSource` | Sources for external game IDs |
| [/websites](https://api.igdb.com/v4/websites) | `Website` | Websites associated with games |
| [/website_types](https://api.igdb.com/v4/website_types) | `WebsiteType` | Types of websites |
| [/multiplayer_modes](https://api.igdb.com/v4/multiplayer_modes) | `MultiplayerMode` | Multiplayer modes for games |
| [/languages](https://api.igdb.com/v4/languages) | `Language` | Languages supported by games |
| [/language_supports](https://api.igdb.com/v4/language_supports) | `LanguageSupport` | Language support for games |
| [/language_support_types](https://api.igdb.com/v4/language_support_types) | `LanguageSupportType` | Types of language support |
| [/events](https://api.igdb.com/v4/events) | `Event` | Gaming events |
| [/event_networks](https://api.igdb.com/v4/event_networks) | `EventNetwork` | Networks for events |
| [/network_types](https://api.igdb.com/v4/network_types) | `NetworkType` | Types of networks |
| [/date_formats](https://api.igdb.com/v4/date_formats) | `DateFormat` | Date formats |
| [/popularity_primitives](https://api.igdb.com/v4/popularity_primitives) | `PopularityPrimitive` | Primitives for popularity |
| [/popularity_types](https://api.igdb.com/v4/popularity_types) | `PopularityType` | Types of popularity |
| [/search](https://api.igdb.com/v4/search) | `Search` | Search functionality |

## Examples

### Basic Endpoint Usage

```typescript
// @ts-ignore
import { Game } from 'igdb-types';
// @ts-ignore
import axios from 'axios';

async function fetchGames(): Promise<Game[]> {
  const response = await axios.post('https://api.igdb.com/v4/games', 
    'fields name,genres.name,platforms.name; limit 10;',
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );

  return response.data as Game[];
}
```

### Expanding Relationships

Many types in the IGDB API have relationships with other types. You can expand these relationships in your API requests to get more detailed information:

```typescript
// @ts-ignore
import { Game, Genre, Platform } from 'igdb-types';
// @ts-ignore
import axios from 'axios';

async function fetchGameWithExpansions(): Promise<Game[]> {
  const response = await axios.post('https://api.igdb.com/v4/games', 
    'fields name,genres.*,platforms.*; limit 1;',
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );

  const games = response.data as Game[];
  
  // Now genres and platforms are expanded objects, not just IDs
  games.forEach(game => {
    if (game.genres) {
      game.genres.forEach(genre => {
        if (typeof genre !== 'number') {
          // This is an expanded Genre object
          const genreObj: Genre = genre;
          console.log(`Genre: ${genreObj.name}`);
        }
      });
    }
    
    if (game.platforms) {
      game.platforms.forEach(platform => {
        if (typeof platform !== 'number') {
          // This is an expanded Platform object
          const platformObj: Platform = platform;
          console.log(`Platform: ${platformObj.name}`);
        }
      });
    }
  });
  
  return games;
}
```

### Using Multiple Endpoints

Sometimes you need to use multiple endpoints to get all the information you need:

```typescript
// @ts-ignore
import { Game, Company, InvolvedCompany } from 'igdb-types';
// @ts-ignore
import axios from 'axios';

async function fetchGameAndDevelopers(gameId: number): Promise<{game: Game, developers: Company[]}> {
  // First, fetch the game
  const gameResponse = await axios.post('https://api.igdb.com/v4/games', 
    `fields name,involved_companies; where id = ${gameId};`,
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );
  
  const game = gameResponse.data[0] as Game;
  
  // Then, fetch the involved companies
  if (!game.involved_companies || game.involved_companies.length === 0) {
    return { game, developers: [] };
  }
  
  const involvedCompanyIds = Array.isArray(game.involved_companies) 
    ? game.involved_companies.map(ic => typeof ic === 'number' ? ic : ic.id).join(',')
    : game.involved_companies;
    
  const involvedCompaniesResponse = await axios.post('https://api.igdb.com/v4/involved_companies', 
    `fields company,developer; where id = (${involvedCompanyIds}); limit 50;`,
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );
  
  const involvedCompanies = involvedCompaniesResponse.data as InvolvedCompany[];
  
  // Filter to only developers
  const developerInvolvedCompanies = involvedCompanies.filter(ic => ic.developer);
  
  // Finally, fetch the developer companies
  if (developerInvolvedCompanies.length === 0) {
    return { game, developers: [] };
  }
  
  const developerCompanyIds = developerInvolvedCompanies
    .map(ic => typeof ic.company === 'number' ? ic.company : ic.company.id)
    .join(',');
    
  const developersResponse = await axios.post('https://api.igdb.com/v4/companies', 
    `fields name,slug,description; where id = (${developerCompanyIds}); limit 50;`,
    {
      headers: {
        'Client-ID': 'your-client-id',
        'Authorization': 'Bearer your-access-token'
      }
    }
  );
  
  const developers = developersResponse.data as Company[];
  
  return { game, developers };
}
```

These examples demonstrate how to use the IGDB API endpoints with the TypeScript types provided by this package. For more detailed information about the IGDB API, refer to the [official IGDB API documentation](https://api-docs.igdb.com/).