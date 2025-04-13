/**
 * Represents keyword information.
 *
 * Request Path: https://api.igdb.com/v4/keywords
 * Description: Keywords are words or phrases that get tagged to a game such as “world war 2” or “steampunk”.
 */
export type Keyword = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Keyword name. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};