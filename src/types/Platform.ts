/**
 * Represents platform information.
 *
 * Request Path: https://api.igdb.com/v4/platforms
 * Description: The hardware used to run the game or game delivery network.
 */
export type Platform = {
    /** An abbreviation of the platform name. */
    abbreviation?: string;

    /** An alternative name for the platform. */
    alternative_name?: string;

    /** @deprecated DEPRECATED! Use `platform_type` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The generation of the platform. */
    generation?: number;

    /** The name of the platform. */
    name: string;

    /** Reference ID for Platform Family. The family of platforms this one belongs to. */
    platform_family?: number; // Assuming Platform Family is a reference ID

    /** Reference ID for Platform Logo. The logo of the first Version of this platform. */
    platform_logo?: number; // Assuming Platform Logo is a reference ID

    /** Reference ID for Platform Type. The type of the platform. */
    platform_type?: number; // Assuming Platform Type is a reference ID

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The summary of the first Version of this platform. */
    summary?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;

    /** Array of Platform Version IDs. Associated versions of this platform. */
    versions?: number[]; // Assuming Platform Version ID is a number

    /** Array of Platform Website IDs. The main website. */
    websites?: number[]; // Assuming Platform Website ID is a number
};