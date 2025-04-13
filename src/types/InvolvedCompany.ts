import {Company} from "./Company";
import {Game} from "./Game";

/**
 * Represents involved company information.
 *
 * Request Path: https://api.igdb.com/v4/involved_companies
 * Description: Companies involved in the development or publishing of a game.
 */
export type InvolvedCompany = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Company. */
    company: number | Company;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Indicates if the company was a developer. */
    developer?: boolean;

    /** Reference ID for Game. */
    game: number | Game;

    /** Indicates if the company was involved in porting. */
    porting?: boolean;

    /** Indicates if the company was a publisher. */
    publisher?: boolean;

    /** Indicates if the company provided supporting work. */
    supporting?: boolean;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};