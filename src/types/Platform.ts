import {PlatformCategoryEnum} from "../enums";
import {PlatformFamily} from "./PlatformFamily";
import {PlatformLogo} from "./PlatformLogo";
import {PlatformType} from "./PlatformType";
import {PlatformVersion} from "./PlatformVersion";
import {PlatformWebsite} from "./PlatformWebsite";

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
    category?: number | PlatformCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The generation of the platform. */
    generation?: number;

    /** The name of the platform. */
    name: string;

    /** Reference ID for Platform Family. The family of platforms this one belongs to. */
    platform_family?: number | PlatformFamily;

    /** Reference ID for Platform Logo. The logo of the first Version of this platform. */
    platform_logo?: number | PlatformLogo;

    /** Reference ID for Platform Type. The type of the platform. */
    platform_type?: number | PlatformType;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The summary of the first Version of this platform. */
    summary?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;

    /** Array of Platform Version IDs. Associated versions of this platform. */
    versions?: number[] | PlatformVersion[];

    /** Array of Platform Website IDs. The main website. */
    websites?: number[] | PlatformWebsite[];
};