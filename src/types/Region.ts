/**
 * Represents region information.
 *
 * Request Path: https://api.igdb.com/v4/regions
 * Description: Region for game localization.
 */
export type Region = {
    /** This can be either ’locale’ or ‘continent’. */
    category?: string;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** This is the identifier of each region. */
    identifier?: string;

    /** The name of the region. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};