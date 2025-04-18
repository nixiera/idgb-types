import {CharacterGenderEnum} from "../enums";
import {CharacterSpeciesEnum} from "../enums";
import {Game} from "./Game";
import {CharacterMugShot} from "./CharacterMugShot";

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
    character_gender?: number | CharacterGenderEnum;

    /** Reference ID for Character Specie. */
    character_species?: number | CharacterSpeciesEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** A character's country of origin. */
    country_name?: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** A text describing a character. */
    description?: string;

    /** Array of Game IDs. */
    games?: number[] | Game[];

    /** @deprecated DEPRECATED! Use `character_gender` instead. */
    gender?: number | CharacterGenderEnum;

    /** Reference ID for Character Mug Shot. An image depicting a character. */
    mug_shot?: number | CharacterMugShot;

    /** Character's name. */
    name: string;

    /** A url-safe, unique, lower-case version of the name. */
    slug?: string;

    /** @deprecated DEPRECATED! Use `character_species` instead. */
    species?: number | CharacterSpeciesEnum;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;

    /** The website address (URL) of the item. */
    url?: string;
};