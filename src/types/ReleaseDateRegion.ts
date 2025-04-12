/**
 * Represents release date region information.
 *
 * Request Path: https://api.igdb.com/v4/release_date_regions
 * Description: Regions for release dates.
 */
export type ReleaseDateRegion = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The region for the release date. */
    region: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};