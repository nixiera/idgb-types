/**
 * Represents character mug shot information.
 *
 * Request Path: https://api.igdb.com/v4/character_mug_shots
 * Description: Images depicting game characters.
 */
export type CharacterMugShot = {
    /** Indicates if the image has an alpha channel (transparency). */
    alpha_channel?: boolean;

    /** Indicates if the image is animated. */
    animated?: boolean;

    /** UUID hash of the object. */
    checksum: string;

    /** The height of the image in pixels. */
    height?: number;

    /** The ID of the image used to construct an IGDB image link. */
    image_id?: string;

    /** The website address (URL) of the item. */
    url?: string;

    /** The width of the image in pixels. */
    width?: number;
};