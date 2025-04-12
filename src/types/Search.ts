/**
 * Represents search result information.
 *
 * Request Path: https://api.igdb.com/v4/search
 * Description: Search results from the IGDB database.
 */
export type Search = {
    /** An alternative name. */
    alternative_name?: string;

    /** Reference ID for Character. */
    character?: number; // Assuming Character is a reference ID

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Collection. */
    collection?: number; // Assuming Collection is a reference ID

    /** Reference ID for Company. */
    company?: number; // Assuming Company is a reference ID

    /** A description. */
    description?: string;

    /** Reference ID for Game. */
    game?: number; // Assuming Game is a reference ID

    /** The name of the search result. */
    name: string;

    /** Reference ID for Platform. */
    platform?: number; // Assuming Platform is a reference ID

    /** Unix Time Stamp. The date this item was initially published by the third party. */
    published_at?: number;

    /** Reference ID for Test Dummy. */
    test_dummy?: number; // Assuming Test Dummy is a reference ID

    /** Reference ID for Theme. */
    theme?: number; // Assuming Theme is a reference ID
};