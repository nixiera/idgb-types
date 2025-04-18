import {ExternalGameCategoryEnum} from "../enums";
import {ExternalGameSource} from "./ExternalGameSource";
import {Game} from "./Game";
import {GameReleaseFormat} from "./GameReleaseFormat";
import {ExternalGameMediaEnum} from "../enums";
import {Platform} from "./Platform";

/**
 * Represents external game information.
 *
 * Request Path: https://api.igdb.com/v4/external_games
 * Description: Game IDs on other services.
 */
export type ExternalGame = {
    /** @deprecated DEPRECATED! Use `external_game_source` instead. */
    category?: number | ExternalGameCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Array of Integers. The ISO country code of the external game product. */
    countries?: number[];

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for External Game Source. The source of the external game. */
    external_game_source: number | ExternalGameSource;

    /** Reference ID for Game. The IGDB ID of the game. */
    game: number | Game;

    /** Reference ID for Game Release Format. The release format of the external game. */
    game_release_format: number | GameReleaseFormat;

    /** @deprecated DEPRECATED! Use `game_release_format` instead. */
    media?: number | ExternalGameMediaEnum;

    /** The name of the game according to the other service. */
    name: string;

    /** Reference ID for Platform. The platform of the external game product. */
    platform: number | Platform;

    /** The other service's ID for this game. */
    uid?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;

    /** The year in full (2018). */
    year?: number;
};