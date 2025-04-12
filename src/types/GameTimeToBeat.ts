/**
 * Represents game time to beat information.
 *
 * Request Path: https://api.igdb.com/v4/game_time_to_beats
 * Description: Average time to beat times for a game.
 */
export type GameTimeToBeat = {
    /** UUID hash of the object. */
    checksum: string;

    /** Average time (in seconds) to finish the game to 100% completion. */
    completely?: number;

    /** Total number of time to beat submissions for this game. */
    count?: number;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The ID of the game associated with the time to beat data. */
    game_id: number;

    /** Average time (in seconds) to finish the game to its credits without spending notable time on extras such as side quests. */
    hastily?: number;

    /** Average time (in seconds) to finish the game while mixing in some extras such as side quests without being overly thorough. */
    normally?: number;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};