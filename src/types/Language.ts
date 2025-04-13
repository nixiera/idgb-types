/**
 * Represents language information.
 *
 * Request Path: https://api.igdb.com/v4/languages
 * Description: Languages that are used in the Language Support endpoint.
 */
export type Language = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** The combination of Language code and Country code. */
    locale?: string;

    /** The English name of the Language. */
    name: string;

    /** The Native Name of the Language. */
    native_name?: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};