import {DateCategoryEnum} from "../enums/DateCategoryEnum";
import {DateFormat} from "./DateFormat";
import {Platform} from "./Platform";
import {RegionEnum} from "../enums/RegionEnum";
import {ReleaseDateRegion} from "./ReleaseDateRegion";
import {ReleaseDateStatus} from "./ReleaseDateStatus";

/**
 * Represents release date information.
 *
 * Request Path: https://api.igdb.com/v4/release_dates
 * Description: A handy endpoint that extends game release dates. Used to dig deeper into release dates, platforms and versions.
 */
export type ReleaseDate = {
    /** @deprecated DEPRECATED! Use `date_format` instead. */
    category?: number | DateCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The date of the release. */
    date?: string;

    /** Reference ID for Date Format. The format of the change date. */
    date_format?: number | DateFormat;

    /** Reference ID for Game. */
    game: number;

    /** A human readable representation of the date. */
    human?: string;

    /** The month as an integer starting at 1 (January). */
    m?: number;

    /** Reference ID for Platform. The platform of the release. */
    platform: number | Platform;

    /** @deprecated DEPRECATED! Use `release_region` instead. */
    region?: number | RegionEnum;

    /** Reference ID for Release Date Region. The region of the release. */
    release_region: number | ReleaseDateRegion;

    /** Reference ID for Release Date Status. The status of the release. */
    status?: number | ReleaseDateStatus;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The year in full (2018). */
    y?: number;
};