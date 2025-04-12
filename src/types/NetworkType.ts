/**
 * Represents network type information.
 *
 * Request Path: https://api.igdb.com/v4/network_types
 * Description: Social networks related to the event like twitter, facebook and youtube.
 */
export type NetworkType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Array of Event Network IDs. Urls associated with the event. */
    event_networks?: number[]; // Assuming Event Network ID is a number

    /** The name of the network type. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};