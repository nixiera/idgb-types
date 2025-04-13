import {Collection} from "./Collection";
import {CollectionRelationType} from "./CollectionRelationType";

/**
 * Represents collection relation information.
 *
 * Request Path: https://api.igdb.com/v4/collection_relations
 * Description: Describes Relationship between Collections.
 */
export type CollectionRelation = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Collection. The child collection of this collection. */
    child_collection: number | Collection;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for Collection. The parent collection of this collection. */
    parent_collection: number | Collection;

    /** Reference ID for Collection Relation Type. The collection relationship type. */
    type: number | CollectionRelationType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};