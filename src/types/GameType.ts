/**
 * Represents game type information in the IGDB database.
 *
 * Game types categorize games based on their fundamental nature, such as "Main Game", 
 * "DLC", "Expansion", etc. This is different from genres (like "Action", "RPG") and 
 * helps distinguish between different kinds of game releases.
 * 
 * In the IGDB API, this type corresponds to entries in the game_types endpoint.
 * The Game type references GameType through the `game_type` property.
 *
 * @example
 * ```typescript
 * import { Game, GameType } from 'igdb-types';
 * 
 * // Accessing a game's type
 * async function getGameTypeInfo(game: Game) {
 *   if (game.game_type && typeof game.game_type !== 'number') {
 *     // This is an expanded GameType object
 *     const gameType: GameType = game.game_type;
 *     console.log(`Game type: ${gameType.type}`);
 *     return gameType;
 *   }
 *   
 *   // If it's just an ID, you might need to fetch the full object
 *   if (game.game_type) {
 *     const gameTypeId = game.game_type;
 *     // Fetch the game type using your API client
 *     // const gameType = await apiClient.getGameType(gameTypeId);
 *     return gameTypeId;
 *   }
 *   
 *   return null;
 * }
 * ```
 *
 * @see https://api-docs.igdb.com/#game-type For more information about game types in the IGDB API
 * 
 * Request Path: https://api.igdb.com/v4/game_types
 */
export type GameType = {
    /**
     * UUID hash of the object.
     * This is a unique identifier used by IGDB for internal tracking.
     */
    checksum: string;

    /**
     * Date this was initially added to the IGDB database.
     * Can be either a Unix timestamp (number) or a Date object.
     */
    created_at: number | Date;

    /**
     * The type of the game.
     * This is a string describing the game type, such as "Main Game", "DLC", "Expansion", etc.
     */
    type: string;

    /**
     * The last date this entry was updated in the IGDB database.
     * Can be either a Unix timestamp (number) or a Date object.
     */
    updated_at: number | Date;
};
