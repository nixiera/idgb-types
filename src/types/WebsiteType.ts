/**
 * Represents website type information.
 *
 * Request Path: https://api.igdb.com/v4/website_types
 * Description: A website type, usually the name of the website.
 */
export type WebsiteType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The website type. */
    type: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};