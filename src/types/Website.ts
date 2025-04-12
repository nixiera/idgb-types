/**
 * Represents website information.
 *
 * Request Path: https://api.igdb.com/v4/websites
 * Description: A website url, usually associated with a game.
 */
export type Website = {
    /** @deprecated DEPRECATED! Use `type` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The game this website is associated with. */
    game: number; // Assuming Game is a reference ID

    /** Indicates if the website is trusted. */
    trusted?: boolean;

    /** Reference ID for Website Type. The website type associated with the website. */
    type?: number; // Assuming Website Type is a reference ID

    /** The website address (URL) of the item. */
    url?: string;
};