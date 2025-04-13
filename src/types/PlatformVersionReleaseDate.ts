import {DateCategoryEnum} from "../enums/DateCategoryEnum";
import {DateFormat} from "./DateFormat";
import {PlatformVersion} from "./PlatformVersion";
import {RegionEnum} from "../enums/RegionEnum";
import {ReleaseDateRegion} from "./ReleaseDateRegion";

/**
 * Represents platform version release date information.
 *
 * Request Path: https://api.igdb.com/v4/platform_version_release_dates
 * Description: A handy endpoint that extends platform release dates. Used to dig deeper into release dates, platforms and versions.
 */
export type PlatformVersionReleaseDate = {
    /** @deprecated DEPRECATED! Use `date_format` instead. */
    category?: number | DateCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Unix Time Stamp. The release date. */
    date?: number;

    /** Reference ID for Date Format. The format of the change date. */
    date_format?: number | DateFormat;

    /** A human readable version of the release date. */
    human?: string;

    /** The month as an integer starting at 1 (January). */
    m?: number;

    /** Reference ID for Platform Version. The platform this release date is for. */
    platform_version: number | PlatformVersion;

    /** @deprecated DEPRECATED! Use `release_region` instead. */
    region?: number | RegionEnum;

    /** Reference ID for Release Date Region. The region of the release. */
    release_region: number | ReleaseDateRegion;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The year in full (2018). */
    y?: number;
};