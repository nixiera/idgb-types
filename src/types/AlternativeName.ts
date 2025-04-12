/**
 * Represents alternative name information.
 *
 * Request Path: https://api.igdb.com/v4/alternative_names
 * Description: Alternative and international game titles.
 */
export type AlternativeName = {
    /** UUID hash of the object. */
    checksum: string;

    /** A description of what kind of alternative name it is (Acronym, Working title, Japanese title etc). */
    comment?: string;

    /** Reference ID for Game. The game this alternative name is associated with. */
    game: number; // Based on the context, game is a reference ID, so it should be a number.

    /** An alternative name. */
    name: string;
};