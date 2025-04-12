/**
 * Represents external game source information.
 *
 * Request Path: https://api.igdb.com/v4/external_game_sources
 * Description: Sources for the external games.
 */
export type ExternalGameSource = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The name of the external game source. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};