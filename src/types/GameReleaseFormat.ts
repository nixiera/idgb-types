/**
 * Represents game release format information.
 *
 * Request Path: https://api.igdb.com/v4/game_release_formats
 * Description: The format of the game release.
 */
export type GameReleaseFormat = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The format of the game release. */
    format: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};