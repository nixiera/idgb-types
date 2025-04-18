/**
 * Represents the release status of a game in the IGDB database.
 * 
 * This enum is used to indicate the current development or release state of a game.
 * It's commonly used with the `status` property in the Game type or the `game_status` 
 * property which references the GameStatus type.
 * 
 * @example
 * ```typescript
 * import { Game, GameStatusEnum } from 'igdb-types';
 * 
 * // Check if a game is released
 * if (game.status === GameStatusEnum.RELEASED) {
 *   console.log('This game has been released!');
 * }
 * 
 * // Filter games by status
 * const earlyAccessGames = games.filter(game => 
 *   game.status === GameStatusEnum.EARLY_ACCESS
 * );
 * ```
 * 
 * @see https://api-docs.igdb.com/#game-status For more information about game statuses in the IGDB API
 */
export enum GameStatusEnum {
    /**
     * The game has been released to the general public.
     * This is the final, complete version of the game.
     */
    RELEASED = 0,

    /**
     * The game is in alpha testing phase.
     * This is an early development stage where the game is still incomplete and likely has many bugs.
     */
    ALPHA = 2,

    /**
     * The game is in beta testing phase.
     * This is a later development stage where the game is more complete but still being tested.
     */
    BETA = 3,

    /**
     * The game is available in early access.
     * Players can purchase and play the game before its official release, often to provide feedback.
     */
    EARLY_ACCESS = 4,

    /**
     * The game is no longer available or playable online.
     * Typically applies to online-only games whose servers have been shut down.
     */
    OFFLINE = 5,

    /**
     * The game's development has been officially cancelled.
     * The game will not be released.
     */
    CANCELLED = 6,

    /**
     * The game has been announced or leaked but not officially confirmed.
     * Information about the game may be speculative.
     */
    RUMORED = 7,

    /**
     * The game was previously available but has been removed from sale.
     * The game may still be playable for those who purchased it before delisting.
     */
    DELISTED = 8,
}
