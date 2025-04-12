/**
 * Represents collection information.
 *
 * Request Path: https://api.igdb.com/v4/collections
 * Description: Collection, AKA Series.
 */
export type Collection = {
    /** Array of Collection Relation IDs. */
    as_child_relations?: number[]; // Assuming Collection Relation ID is a number

    /** Array of Collection Relation IDs. */
    as_parent_relations?: number[]; // Assuming Collection Relation ID is a number

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Array of Game IDs. The games that are associated with this collection. */
    games?: number[];

    /** Umbrella term for a collection of games. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Reference ID for Collection Type. The type of collection. */
    type?: number; // Assuming Collection Type is a reference ID, so it should be a number.

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;
};