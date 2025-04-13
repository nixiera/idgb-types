import {ExternalGameSource} from "./ExternalGameSource";
import {PopularitySourceEnum} from "../enums/PopularitySourceEnum";
import {PopularityType} from "./PopularityType";

/**
 * Represents popularity primitive information.
 *
 * Request Path: https://api.igdb.com/v4/popularity_primitives
 * Description: Popularity Primitives, this endpoint lists available primitives with their source and popularity type.
 */
export type PopularityPrimitive = {
    /** The calculated at timestamp. */
    calculated_at?: string;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for External Game Source. */
    external_popularity_source: number | ExternalGameSource;

    /** The game ID. */
    game_id?: number;

    /** @deprecated DEPRECATED! Use `external_popularity_source` instead. */
    popularity_source?: number | PopularitySourceEnum;

    /** Reference ID for Popularity Type. */
    popularity_type: number | PopularityType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The popularity value. */
    value?: number;
};