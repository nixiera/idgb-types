import {Cover} from "./Cover";
import {Game} from "./Game";
import {Region} from "./Region";

/**
 * Represents game localization information.
 *
 * Request Path: https://api.igdb.com/v4/game_localizations
 * Description: Game localization for a game.
 */
export type GameLocalization = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Cover. The cover of this game localization. */
    cover?: number | Cover;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for Game. The Game the localization belongs to. */
    game: number | Game;

    /** The name of the localization. */
    name: string;

    /** Reference ID for Region. The Region of the localization. */
    region: number | Region;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};