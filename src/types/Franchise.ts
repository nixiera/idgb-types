import {Game} from "./Game";

/**
 * Represents franchise information.
 *
 * Request Path: https://api.igdb.com/v4/franchises
 * Description: A list of video game franchises such as Star Wars.
 */
export type Franchise = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Array of Game IDs. The games that are associated with this franchise. */
    games?: number[] | Game[];

    /** The name of the franchise. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};