/**
 * Represents event logo information.
 *
 * Request Path: https://api.igdb.com/v4/event_logos
 * Description: Logo for the event.
 */
export type EventLogo = {
    /** Indicates if the image has an alpha channel (transparency). */
    alpha_channel?: boolean;

    /** Indicates if the image is animated. */
    animated?: boolean;

    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for Event. The event associated with this logo. */
    event: number; // Assuming Event is a reference ID

    /** The height of the image in pixels. */
    height?: number;

    /** The ID of the image used to construct an IGDB image link. */
    image_id?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;

    /** The width of the image in pixels. */
    width?: number;
};