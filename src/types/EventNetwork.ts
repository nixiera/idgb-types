import {Event} from "./Event";
import {NetworkType} from "./NetworkType";

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
    created_at: number | Date;

    /** Reference ID for Event. The event associated with this URL. */
    event: number | Event;

    /** Reference ID for Network Type. Network type. */
    network_type: number | NetworkType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};