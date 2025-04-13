/**
 * Represents release date status information.
 *
 * Request Path: https://api.igdb.com/v4/release_date_statuses
 * Description: An endpoint to provide definition of all of the current release date statuses.
 */
export type ReleaseDateStatus = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The description of the release date status. */
    description?: string;

    /** The name of the release date status. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};