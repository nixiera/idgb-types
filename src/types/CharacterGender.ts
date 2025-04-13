/**
 * Represents character gender information.
 *
 * Request Path: https://api.igdb.com/v4/character_genders
 * Description: Character Genders.
 */
export type CharacterGender = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The name of the character gender. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};