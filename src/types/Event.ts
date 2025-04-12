/**
 * Represents event information.
 *
 * Request Path: https://api.igdb.com/v4/events
 * Description: Gaming event like GamesCom, Tokyo Game Show, PAX or GSL.
 */
export type Event = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The description of the event. */
    description?: string;

    /** End time of the event in UTC. */
    end_time?: string; // Assuming datetime can be represented as a string

    /** Reference ID for Event Logo. Logo of the event. */
    event_logo?: number; // Assuming Event Logo is a reference ID

    /** Array of Event Network IDs. Urls associated with the event. */
    event_networks?: number[]; // Assuming Event Network ID is a number

    /** Array of Game IDs. Games featured in the event. */
    games?: number[];

    /** URL to the livestream of the event. */
    live_stream_url?: string;

    /** The name of the event. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Start time of the event in UTC. */
    start_time?: string; // Assuming datetime can be represented as a string

    /** Timezone the event is in. */
    time_zone?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** Array of Game Video IDs. Trailers featured in the event. */
    videos?: number[]; // Assuming Game Video ID is a number
};