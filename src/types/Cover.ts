/**
 * Represents cover information.
 *
 * Request Path: https://api.igdb.com/v4/covers
 * Description: The cover art of games.
 */
export type Cover = {
    /** Indicates if the image has an alpha channel (transparency). */
    alpha_channel?: boolean;

    /** Indicates if the image is animated. */
    animated?: boolean;

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The game this cover is associated with. If it is empty then this cover belongs to a game_localization, which can be found under game_localization field. */
    game?: number; // Assuming Game is a reference ID

    /** Reference ID for Game Localization. The game localization this cover might be associated with. */
    game_localization?: number; // Assuming Game Localization is a reference ID

    /** The height of the image in pixels. */
    height?: number;

    /** The ID of the image used to construct an IGDB image link. */
    image_id?: string;

    /** The website address (URL) of the item. */
    url?: string;

    /** The width of the image in pixels. */
    width?: number;
};