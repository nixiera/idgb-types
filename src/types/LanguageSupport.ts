import {Game} from "./Game";
import {Language} from "./Language";
import {LanguageSupportType} from "./LanguageSupportType";

/**
 * Represents language support information.
 *
 * Request Path: https://api.igdb.com/v4/language_supports
 * Description: Games can be played with different languages for voice acting, subtitles, or the interface language.
 */
export type LanguageSupport = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for Game. */
    game: number | Game;

    /** Reference ID for Language. */
    language: number | Language;

    /** Reference ID for Language Support Type. */
    language_support_type: number | LanguageSupportType;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};