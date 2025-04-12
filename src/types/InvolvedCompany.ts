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
    company: number; // Assuming Company is a reference ID

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Indicates if the company was a developer. */
    developer?: boolean;

    /** Reference ID for Game. */
    game: number; // Assuming Game is a reference ID

    /** Indicates if the company was involved in porting. */
    porting?: boolean;

    /** Indicates if the company was a publisher. */
    publisher?: boolean;

    /** Indicates if the company provided supporting work. */
    supporting?: boolean;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};