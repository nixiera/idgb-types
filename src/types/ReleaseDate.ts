/**
 * Represents release date information.
 *
 * Request Path: https://api.igdb.com/v4/release_dates
 * Description: A handy endpoint that extends game release dates. Used to dig deeper into release dates, platforms and versions.
 */
export type ReleaseDate = {
    /** @deprecated DEPRECATED! Use `date_format` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The date of the release. */
    date?: string; // Assuming datetime can be represented as a string

    /** Reference ID for Date Format. The format of the change date. */
    date_format?: number; // Assuming Date Format is a reference ID

    /** Reference ID for Game. */
    game: number; // Assuming Game is a reference ID

    /** A human readable representation of the date. */
    human?: string;

    /** The month as an integer starting at 1 (January). */
    m?: number;

    /** Reference ID for Platform. The platform of the release. */
    platform: number; // Assuming Platform is a reference ID

    /** @deprecated DEPRECATED! Use `release_region` instead. */
    region?: string; // Assuming Region Enum can be represented as a string

    /** Reference ID for Release Date Region. The region of the release. */
    release_region: number; // Assuming Release Date Region is a reference ID

    /** Reference ID for Release Date Status. The status of the release. */
    status?: number; // Assuming Release Date Status is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The year in full (2018). */
    y?: number;
};