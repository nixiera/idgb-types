# Game Type Relationships

This diagram shows the relationships between the `Game` type and other major types in the IGDB API.

## Core Game Entity Relationships

```mermaid
classDiagram
    Game <|-- GameStatus : game_status
    Game <|-- GameType : game_type
    Game <|-- Cover : cover
    Game <|-- Genre : genres[]
    Game <|-- Platform : platforms[]
    Game <|-- Theme : themes[]
    Game <|-- GameEngine : game_engines[]
    Game <|-- InvolvedCompany : involved_companies[]
    Game <|-- ReleaseDate : release_dates[]
    Game <|-- Website : websites[]
    Game <|-- Screenshot : screenshots[]
    Game <|-- Artwork : artworks[]
    Game <|-- GameVideo : videos[]
    Game <|-- AgeRating : age_ratings[]
    Game <|-- GameMode : game_modes[]
    Game <|-- PlayerPerspective : player_perspectives[]
    Game <|-- Franchise : franchise
    Game <|-- Collection : collections[]
    Game <|-- Game : parent_game
    Game <|-- Game : similar_games[]
    Game <|-- Game : dlcs[]
    Game <|-- Game : expansions[]
    Game <|-- Game : remakes[]
    Game <|-- Game : remasters[]

    class Game {
        +string name
        +string slug
        +string summary
        +number first_release_date
        +number rating
        +string checksum
        +Date created_at
        +Date updated_at
    }

    class GameStatus {
        +string status
    }

    class GameType {
        +string type
    }

    class Cover {
        +string url
    }

    class Genre {
        +string name
        +string slug
    }

    class Platform {
        +string name
        +string slug
    }
```

## Notes on Relationship Types

- **One-to-One**: Relationships like `game_status`, `game_type`, and `cover` are one-to-one relationships where a game has at most one of these entities.
- **One-to-Many**: Relationships like `genres`, `platforms`, and `themes` are one-to-many relationships where a game can have multiple of these entities.
- **Self-Referential**: Relationships like `parent_game`, `similar_games`, and `dlcs` are self-referential relationships where a game references other games.

## Expansion Pattern

In the IGDB API, relationships can be represented in two ways:

1. **ID References**: Properties contain numeric IDs that reference other entities
2. **Expanded Objects**: Properties contain the full objects of the related entities

This is represented in the type definitions using union types, for example:

```
// Example of a relationship property in the Game type
genres?: number[] | Genre[];
```

This means the `genres` property can be either an array of genre IDs or an array of Genre objects, depending on whether the relationship was expanded in the API request.
