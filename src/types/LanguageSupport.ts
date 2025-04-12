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
    created_at: string; // Assuming datetime can be represented as a string

    /** Reference ID for Game. */
    game: number; // Assuming Game is a reference ID

    /** Reference ID for Language. */
    language: number; // Assuming Language is a reference ID

    /** Reference ID for Language Support Type. */
    language_support_type: number; // Assuming Language Support Type is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};