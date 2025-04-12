/**
 * Represents external game information.
 *
 * Request Path: https://api.igdb.com/v4/external_games
 * Description: Game IDs on other services.
 */
export type ExternalGame = {
    /** @deprecated DEPRECATED! Use `external_game_source` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Array of Integers. The ISO country code of the external game product. */
    countries?: number[];

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for External Game Source. The source of the external game. */
    external_game_source: number; // Assuming External Game Source is a reference ID

    /** Reference ID for Game. The IGDB ID of the game. */
    game: number; // Assuming Game is a reference ID

    /** Reference ID for Game Release Format. The release format of the external game. */
    game_release_format: number; // Assuming Game Release Format is a reference ID

    /** @deprecated DEPRECATED! Use `game_release_format` instead. */
    media?: string; // Assuming Media Enum can be represented as a string

    /** The name of the game according to the other service. */
    name: string;

    /** Reference ID for Platform. The platform of the external game product. */
    platform: number; // Assuming Platform is a reference ID

    /** The other service's ID for this game. */
    uid?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;

    /** The year in full (2018). */
    year?: number;
};