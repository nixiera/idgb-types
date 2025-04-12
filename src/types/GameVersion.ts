/**
 * Represents game version information.
 *
 * Request Path: https://api.igdb.com/v4/game_versions
 * Description: Details about game editions and versions.
 */
export type GameVersion = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Array of Game Version Feature IDs. Features and descriptions of what makes each version/edition different from the main game. */
    features?: number[]; // Assuming Game Version Feature ID is a number

    /** Reference ID for Game. The game these versions/editions are of. */
    game: number; // Assuming Game is a reference ID

    /** Array of Game IDs. Game Versions and Editions. */
    games?: number[]; // Assuming Game ID is a number

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;
};