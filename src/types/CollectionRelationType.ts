/**
 * Represents collection relation type information.
 *
 * Request Path: https://api.igdb.com/v4/collection_relation_types
 * Description: Collection Relation Types.
 */
export type CollectionRelationType = {
    /** Reference ID for Collection Type. The allowed child collection type. */
    allowed_child_type: number; // Assuming Collection Type is a reference ID

    /** Reference ID for Collection Type. The allowed parent collection type. */
    allowed_parent_type: number; // Assuming Collection Type is a reference ID

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The relationship type description. */
    description?: string;

    /** The relationship type name. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};