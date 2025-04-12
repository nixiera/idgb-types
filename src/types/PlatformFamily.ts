/**
 * Represents platform family information.
 *
 * Request Path: https://api.igdb.com/v4/platform_families
 * Description: A collection of closely related platforms.
 */
export type PlatformFamily = {
    /** UUID hash of the object. */
    checksum: string;

    /** The name of the platform family. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;
};