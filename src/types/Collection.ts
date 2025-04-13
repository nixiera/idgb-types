import {CollectionRelation} from "./CollectionRelation";
import {Game} from "./Game";
import {CollectionType} from "./CollectionType";

/**
 * Represents collection information.
 *
 * Request Path: https://api.igdb.com/v4/collections
 * Description: Collection, AKA Series.
 */
export type Collection = {
    /** Array of Collection Relation IDs. */
    as_child_relations?: number[] | CollectionRelation[];

    /** Array of Collection Relation IDs. */
    as_parent_relations?: number[] | CollectionRelation[];

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Array of Game IDs. The games that are associated with this collection. */
    games?: number[] | Game[];

    /** Umbrella term for a collection of games. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Reference ID for Collection Type. The type of collection. */
    type?: number | CollectionType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};