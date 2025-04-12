/**
 * Represents game information.
 *
 * Request Path: https://api.igdb.com/v4/games
 * Description: Video Games!
 */
export type Game = {
    /** Array of Age Rating IDs. The PEGI rating. */
    age_ratings?: number[]; // Assuming Age Rating ID is a number

    /** Rating based on external critic scores. */
    aggregated_rating?: number;

    /** Number of external critic scores. */
    aggregated_rating_count?: number;

    /** Array of Alternative Name IDs. Alternative names for this game. */
    alternative_names?: number[]; // Assuming Alternative Name ID is a number

    /** Array of Artwork IDs. Artworks of this game. */
    artworks?: number[]; // Assuming Artwork ID is a number

    /** Array of Game IDs. The bundles this game is a part of. */
    bundles?: number[]; // Assuming Game ID is a number

    /** @deprecated DEPRECATED! Use `game_type` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** @deprecated DEPRECATED! Use `collections` instead. */
    collection?: number; // Assuming Collection is a reference ID

    /** Array of Collection IDs. The collections that this game is in. */
    collections?: number[]; // Assuming Collection ID is a number

    /** Reference ID for Cover. The cover of this game. */
    cover?: number; // Assuming Cover is a reference ID

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Array of Game IDs. DLCs for this game. */
    dlcs?: number[]; // Assuming Game ID is a number

    /** Array of Game IDs. Expanded games of this game. */
    expanded_games?: number[]; // Assuming Game ID is a number

    /** Array of Game IDs. Expansions of this game. */
    expansions?: number[]; // Assuming Game ID is a number

    /** Array of External Game IDs. External IDs this game has on other services. */
    external_games?: number[]; // Assuming External Game ID is a number

    /** Unix Time Stamp. The first release date for this game. */
    first_release_date?: number;

    /** @deprecated DEPRECATED! - To be removed. */
    follows?: number;

    /** Array of Game IDs. Forks of this game. */
    forks?: number[]; // Assuming Game ID is a number

    /** Reference ID for Franchise. The main franchise. */
    franchise?: number; // Assuming Franchise is a reference ID

    /** Array of Franchise IDs. Other franchises the game belongs to. */
    franchises?: number[]; // Assuming Franchise ID is a number

    /** Array of Game Engine IDs. The game engine used in this game. */
    game_engines?: number[]; // Assuming Game Engine ID is a number

    /** Array of Game Localization IDs. Supported game localizations for this game. A region can have at most one game localization for a given game. */
    game_localizations?: number[]; // Assuming Game Localization ID is a number

    /** Array of Game Mode IDs. Modes of gameplay. */
    game_modes?: number[]; // Assuming Game Mode ID is a number

    /** Reference ID for Game Status. The status of the game's release. */
    game_status?: number; // Assuming Game Status is a reference ID

    /** Reference ID for Game Type. The type of game. */
    game_type?: number; // Assuming Game Type is a reference ID

    /** Array of Genre IDs. Genres of the game. */
    genres?: number[]; // Assuming Genre ID is a number

    /** Number of follows a game gets before release. */
    hypes?: number;

    /** Array of Involved Company IDs. Companies who developed this game. */
    involved_companies?: number[]; // Assuming Involved Company ID is a number

    /** Array of Keyword IDs. Associated keywords. */
    keywords?: number[]; // Assuming Keyword ID is a number

    /** Array of Language Support IDs. Supported Languages for this game. */
    language_supports?: number[]; // Assuming Language Support ID is a number

    /** Array of Multiplayer Mode IDs. Multiplayer modes for this game. */
    multiplayer_modes?: number[]; // Assuming Multiplayer Mode ID is a number

    /** Game name. */
    name: string;

    /** Reference ID for Game. If a DLC, expansion or part of a bundle, this is the main game or bundle. */
    parent_game?: number; // Assuming Game is a reference ID

    /** Array of Platform IDs. Platforms this game was released on. */
    platforms?: number[]; // Assuming Platform ID is a number

    /** Array of Player Perspective IDs. The main perspective of the player. */
    player_perspectives?: number[]; // Assuming Player Perspective ID is a number

    /** Array of Game IDs. Ports of this game. */
    ports?: number[]; // Assuming Game ID is a number

    /** Average IGDB user rating. */
    rating?: number;

    /** Total number of IGDB user ratings. */
    rating_count?: number;

    /** Array of Release Date IDs. Release dates of this game. */
    release_dates?: number[]; // Assuming Release Date ID is a number

    /** Array of Game IDs. Remakes of this game. */
    remakes?: number[]; // Assuming Game ID is a number

    /** Array of Game IDs. Remasters of this game. */
    remasters?: number[]; // Assuming Game ID is a number

    /** Array of Screenshot IDs. Screenshots of this game. */
    screenshots?: number[]; // Assuming Screenshot ID is a number

    /** Array of Game IDs. Similar games. */
    similar_games?: number[]; // Assuming Game ID is a number

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Array of Game IDs. Standalone expansions of this game. */
    standalone_expansions?: number[]; // Assuming Game ID is a number

    /** @deprecated DEPRECATED! Use `game_status` instead. */
    status?: string; // Assuming Status Enum can be represented as a string

    /** A short description of a game's story. */
    storyline?: string;

    /** A description of the game. */
    summary?: string;

    /** Array of Tag Numbers. Related entities in the IGDB API. */
    tags?: number[];

    /** Array of Theme IDs. Themes of the game. */
    themes?: number[]; // Assuming Theme ID is a number

    /** Average rating based on both IGDB user and external critic scores. */
    total_rating?: number;

    /** Total number of user and external critic scores. */
    total_rating_count?: number;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;

    /** Reference ID for Game. If a version, this is the main game. */
    version_parent?: number; // Assuming Game is a reference ID

    /** Title of this version (i.e Gold edition). */
    version_title?: string;

    /** Array of Game Video IDs. Videos of this game. */
    videos?: number[]; // Assuming Game Video ID is a number

    /** Array of Website IDs. Websites associated with this game. */
    websites?: number[]; // Assuming Website ID is a number
};