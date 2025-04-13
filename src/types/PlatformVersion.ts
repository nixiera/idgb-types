import {Company} from "./Company";
import {PlatformVersionCompany} from "./PlatformVersionCompany";
import {PlatformLogo} from "./PlatformLogo";
import {PlatformVersionReleaseDate} from "./PlatformVersionReleaseDate";

/**
 * Represents platform version information.
 *
 * Request Path: https://api.igdb.com/v4/platform_versions
 * Description: Details about specific platform versions.
 */
export type PlatformVersion = {
    /** UUID hash of the object. */
    checksum: string;

    /** Array of Platform Version Company IDs. Who developed this platform version. */
    companies?: number[] | Company[];

    /** The network capabilities. */
    connectivity?: string;

    /** The integrated control processing unit. */
    cpu?: string;

    /** The graphics chipset. */
    graphics?: string;

    /** Reference ID for Platform Version Company. Who manufactured this version of the platform. */
    main_manufacturer?: number | PlatformVersionCompany;

    /** The type of media this version accepted. */
    media?: string;

    /** How much memory there is. */
    memory?: string;

    /** The name of the platform version. */
    name: string;

    /** The operating system installed on the platform version. */
    os?: string;

    /** The output video rate. */
    output?: string;

    /** Reference ID for Platform Logo. The logo of this platform version. */
    platform_logo?: number | PlatformLogo;

    /** Array of Platform Version Release Date IDs. When this platform was released. */
    platform_version_release_dates?: number[] | PlatformVersionReleaseDate[];

    /** The maximum resolution. */
    resolutions?: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The sound chipset. */
    sound?: string;

    /** How much storage there is. */
    storage?: string;

    /** A short summary. */
    summary?: string;

    /** The website address (URL) of the item. */
    url?: string;
};