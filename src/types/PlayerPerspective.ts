/**
 * Represents player perspective information.
 *
 * Request Path: https://api.igdb.com/v4/player_perspectives
 * Description: Player perspectives describe the view/perspective of the player in a video game.
 */
export type PlayerPerspective = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The name of the player perspective. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};