import {Company} from "./Company";
import {GameEngineLogo} from "./GameEngineLogo";
import {Platform} from "./Platform";

/**
 * Represents game engine information.
 *
 * Request Path: https://api.igdb.com/v4/game_engines
 * Description: Video game engines such as unreal engine.
 */
export type GameEngine = {
    /** UUID hash of the object. */
    checksum: string;

    /** Array of Company IDs. Companies who used this game engine. */
    companies?: number[] | Company[];

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Description of the game engine. */
    description?: string;

    /** Reference ID for Game Engine Logo. Logo of the game engine. */
    logo?: number | GameEngineLogo;

    /** Name of the game engine. */
    name: string;

    /** Array of Platform IDs. Platforms this game engine was deployed on. */
    platforms?: number[] | Platform[];

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};