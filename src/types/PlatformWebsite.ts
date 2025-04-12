/**
 * Represents platform website information.
 *
 * Request Path: https://api.igdb.com/v4/platform_websites
 * Description: The main website for the platform.
 */
export type PlatformWebsite = {
    /** The service this website links to. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Indicates if the website is trusted. */
    trusted?: boolean;

    /** The website address (URL) of the item. */
    url?: string;
};