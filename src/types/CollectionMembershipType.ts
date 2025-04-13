import {CollectionType} from "./CollectionType";

/**
 * Represents collection membership type information.
 *
 * Request Path: https://api.igdb.com/v4/collection_membership_types
 * Description: Enums for collection membership types.
 */
export type CollectionMembershipType = {
    /** Reference ID for Collection Type. The allowed collection type. */
    allowed_collection_type: number | CollectionType;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Description of the membership type. */
    description?: string;

    /** The membership type name. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};