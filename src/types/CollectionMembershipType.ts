/**
 * Represents collection membership type information.
 *
 * Request Path: https://api.igdb.com/v4/collection_membership_types
 * Description: Enums for collection membership types.
 */
export type CollectionMembershipType = {
    /** Reference ID for Collection Type. The allowed collection type. */
    allowed_collection_type: number; // Assuming Collection Type is a reference ID

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Description of the membership type. */
    description?: string;

    /** The membership type name. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};