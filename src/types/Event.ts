import {EventLogo} from "./EventLogo";
import {EventNetwork} from "./EventNetwork";
import {Game} from "./Game";
import {GameVideo} from "./GameVideo";

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
    created_at: number | Date;

    /** The description of the event. */
    description?: string;

    /** End time of the event in UTC. */
    end_time?: string;

    /** Reference ID for Event Logo. Logo of the event. */
    event_logo?: number | EventLogo;

    /** Array of Event Network IDs. Urls associated with the event. */
    event_networks?: number[] | EventNetwork[];

    /** Array of Game IDs. Games featured in the event. */
    games?: number[] | Game[];

    /** URL to the livestream of the event. */
    live_stream_url?: string;

    /** The name of the event. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Start time of the event in UTC. */
    start_time?: string;

    /** Timezone the event is in. */
    time_zone?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** Array of Game Video IDs. Trailers featured in the event. */
    videos?: number[] | GameVideo[];
};