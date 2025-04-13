/**
 * Represents date format information.
 *
 * Request Path: https://api.igdb.com/v4/date_formats
 * Description: The Date Format.
 */
export type DateFormat = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The date format string. */
    format: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};