/**
 * Represents game type information.
 *
 * Request Path: https://api.igdb.com/v4/game_types
 * Description: The type that this game is.
 */
export type GameType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The type of the game. */
    type: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};