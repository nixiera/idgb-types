/**
 * Represents language support type information.
 *
 * Request Path: https://api.igdb.com/v4/language_support_types
 * Description: Language Support Types contains the identifiers for the support types that Language Support uses.
 */
export type LanguageSupportType = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The name of the language support type. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};