/**
 * Represents collection membership information.
 *
 * Request Path: https://api.igdb.com/v4/collection_memberships
 * Description: The Collection Memberships.
 */
export type CollectionMembership = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Collection. The collection that is associated with this membership. */
    collection: number; // Assuming Collection is a reference ID, so it should be a number.

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for Game. The game that is associated with this membership. */
    game: number; // Assuming Game is a reference ID, so it should be a number.

    /** Reference ID for Collection Membership Type. The Collection Membership Type. */
    type: number; // Assuming Collection Membership Type is a reference ID, so it should be a number.

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};