import {ExternalGameSource} from "./ExternalGameSource";
import {PopularitySourceEnum} from "../enums/PopularitySourceEnum";

/**
 * Represents popularity type information.
 *
 * Request Path: https://api.igdb.com/v4/popularity_types
 * Description: This describes what type of popularity primitive or popularity indicator the popularity value is.
 */
export type PopularityType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for External Game Source. */
    external_popularity_source: number | ExternalGameSource;

    /** The name of the popularity type. */
    name: string;

    /** @deprecated DEPRECATED! Use `external_popularity_source` instead. */
    popularity_source?: number | PopularitySourceEnum;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};