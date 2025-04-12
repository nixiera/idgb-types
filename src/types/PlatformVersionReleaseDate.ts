/**
 * Represents platform version release date information.
 *
 * Request Path: https://api.igdb.com/v4/platform_version_release_dates
 * Description: A handy endpoint that extends platform release dates. Used to dig deeper into release dates, platforms and versions.
 */
export type PlatformVersionReleaseDate = {
    /** @deprecated DEPRECATED! Use `date_format` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Unix Time Stamp. The release date. */
    date?: number;

    /** Reference ID for Date Format. The format of the change date. */
    date_format?: number; // Assuming Date Format is a reference ID

    /** A human readable version of the release date. */
    human?: string;

    /** The month as an integer starting at 1 (January). */
    m?: number;

    /** Reference ID for Platform Version. The platform this release date is for. */
    platform_version: number; // Assuming Platform Version is a reference ID

    /** @deprecated DEPRECATED! Use `release_region` instead. */
    region?: string; // Assuming Region Enum can be represented as a string

    /** Reference ID for Release Date Region. The region of the release. */
    release_region: number; // Assuming Release Date Region is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The year in full (2018). */
    y?: number;
};