import {GameVersionFeature} from "./GameVersionFeature";
import {Game} from "./Game";

/**
 * Represents game version information.
 *
 * Request Path: https://api.igdb.com/v4/game_versions
 * Description: Details about game editions and versions.
 */
export type GameVersion = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Array of Game Version Feature IDs. Features and descriptions of what makes each version/edition different from the main game. */
    features?: number[] | GameVersionFeature[];

    /** Reference ID for Game. The game these versions/editions are of. */
    game: number | Game;

    /** Array of Game IDs. Game Versions and Editions. */
    games?: number[] | Game[];

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};