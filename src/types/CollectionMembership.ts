import {Collection} from "./Collection";
import {Game} from "./Game";
import {CollectionMembershipType} from "./CollectionMembershipType";

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
    collection: number | Collection;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for Game. The game that is associated with this membership. */
    game: number | Game;

    /** Reference ID for Collection Membership Type. The Collection Membership Type. */
    type: number | CollectionMembershipType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};