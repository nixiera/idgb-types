/**
 * Represents event network information.
 *
 * Request Path: https://api.igdb.com/v4/event_networks
 * Description: Urls related to the event like twitter, facebook and youtube.
 */
export type EventNetwork = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for Event. The event associated with this URL. */
    event: number; // Assuming Event is a reference ID

    /** Reference ID for Network Type. Network type. */
    network_type: number; // Assuming Network Type is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;
};