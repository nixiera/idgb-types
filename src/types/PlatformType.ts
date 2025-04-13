/**
 * Represents platform type information.
 *
 * Request Path: https://api.igdb.com/v4/platform_types
 * Description: Types of platforms.
 */
export type PlatformType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The name of the platform type. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};