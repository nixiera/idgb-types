/**
 * Represents popularity primitive information.
 *
 * Request Path: https://api.igdb.com/v4/popularity_primitives
 * Description: Popularity Primitives, this endpoint lists available primitives with their source and popularity type.
 */
export type PopularityPrimitive = {
    /** The calculated at timestamp. */
    calculated_at?: string; // Assuming datetime can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for External Game Source. */
    external_popularity_source: number; // Assuming External Game Source is a reference ID

    /** The game ID. */
    game_id?: number;

    /** @deprecated DEPRECATED! Use `external_popularity_source` instead. */
    popularity_source?: string; // Assuming Popularity Source Enum can be represented as a string

    /** Reference ID for Popularity Type. */
    popularity_type: number; // Assuming Popularity Type is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The popularity value. */
    value?: number; // Assuming bigdecimal can be represented as a number
};