/**
 * Represents collection type information.
 *
 * Request Path: https://api.igdb.com/v4/collection_types
 * Description: Enums for collection types.
 */
export type CollectionType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Description of the collection type. */
    description?: string;

    /** The name of the collection type. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};