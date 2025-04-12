/**
 * Represents company status information.
 *
 * Request Path: https://api.igdb.com/v4/company_statuses
 * Description: Company Status.
 */
export type CompanyStatus = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The name of the company status. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};