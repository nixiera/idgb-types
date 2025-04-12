/**
 * Represents screenshot information.
 *
 * Request Path: https://api.igdb.com/v4/screenshots
 * Description: Screenshots of games.
 */
export type Screenshot = {
    /** Indicates if the image has an alpha channel (transparency). */
    alpha_channel?: boolean;

    /** Indicates if the image is animated. */
    animated?: boolean;

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The game this video is associated with. */
    game: number; // Assuming Game is a reference ID

    /** The height of the image in pixels. */
    height?: number;

    /** The ID of the image used to construct an IGDB image link. */
    image_id?: string;

    /** The website address (URL) of the item. */
    url?: string;

    /** The width of the image in pixels. */
    width?: number;
};