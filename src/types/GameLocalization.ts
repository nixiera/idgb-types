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
    cover?: number; // Assuming Cover is a reference ID

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for Game. The Game the localization belongs to. */
    game: number; // Assuming Game is a reference ID

    /** The name of the localization. */
    name: string;

    /** Reference ID for Region. The Region of the localization. */
    region: number; // Assuming Region is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};