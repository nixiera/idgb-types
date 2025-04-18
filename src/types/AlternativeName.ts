import {Game} from "./Game";

/**
 * Represents alternative name information.
 *
 * Request Path: https://api.igdb.com/v4/alternative_names
 * Description: Alternative and international game titles.
 */
export type AlternativeName = {
    /** UUID hash of the object. */
    checksum: string;

    /** A description of the alternative name it is (an Acronym, Working title, Japanese title etc.). */
    comment?: string;

    /** Reference ID for Game. The game this alternative name is associated with. */
    game: number | Game;

    /** An alternative name. */
    name: string;
};