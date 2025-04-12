/**
 * Represents character information.
 *
 * Request Path: https://api.igdb.com/v4/characters
 * Description: Video game characters.
 */
export type Character = {
    /** Alternative names for a character. */
    akas?: string[];

    /** Reference ID for Character Gender. */
    character_gender?: number; // Assuming Character Gender is a reference ID

    /** Reference ID for Character Specie. */
    character_species?: number; // Assuming Character Specie is a reference ID

    /** UUID hash of the object. */
    checksum: string;

    /** A character's country of origin. */
    country_name?: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** A text describing a character. */
    description?: string;

    /** Array of Game IDs. */
    games?: number[];

    /** @deprecated DEPRECATED! Use `character_gender` instead. */
    gender?: string; // Assuming Gender Enum can be represented as a string

    /** Reference ID for Character Mug Shot. An image depicting a character. */
    mug_shot?: number; // Assuming Character Mug Shot is a reference ID

    /** Character's name. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug?: string;

    /** @deprecated DEPRECATED! Use `character_species` instead. */
    species?: string; // Assuming Species Enum can be represented as a string

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;
};