import {Character} from "./Character";
import {Collection} from "./Collection";
import {Game} from "./Game";
import {Platform} from "./Platform";
import {Theme} from "./Theme";

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
    character?: number | Character;

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Collection. */
    collection?: number | Collection;

    /** Reference ID for Company. */
    company?: number;

    /** A description. */
    description?: string;

    /** Reference ID for Game. */
    game?: number | Game;

    /** The name of the search result. */
    name: string;

    /** Reference ID for Platform. */
    platform?: number | Platform;

    /** Unix Time Stamp. The date this item was initially published by the third party. */
    published_at?: number;

    /** Reference ID for Test Dummy. */
    test_dummy?: number;

    /** Reference ID for Theme. */
    theme?: number | Theme;
};