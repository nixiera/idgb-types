/**
 * Represents game mode information.
 *
 * Request Path: https://api.igdb.com/v4/game_modes
 * Description: Single player, Multiplayer etc.
 */
export type GameMode = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The name of the game mode. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};