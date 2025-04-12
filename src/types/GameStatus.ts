/**
 * Represents game status information.
 *
 * Request Path: https://api.igdb.com/v4/game_statuses
 * Description: The release status of the game.
 */
export type GameStatus = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The release status of the game. */
    status: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};