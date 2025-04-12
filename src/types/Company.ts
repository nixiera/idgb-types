/**
 * Represents company information.
 *
 * Request Path: https://api.igdb.com/v4/companies
 * Description: Video game companies. Both publishers & developers.
 */
export type Company = {
    /** Unix Time Stamp. The data when a company got a new ID. */
    change_date?: number;

    /** @deprecated DEPRECATED! Use `change_date_format` instead. */
    change_date_category?: string; // Assuming Change Date Category Enum can be represented as a string

    /** Reference ID for Date Format. The format of the change date. */
    change_date_format?: number; // Assuming Date Format is a reference ID

    /** Reference ID for Company. The new ID for a company that has gone through a merger or restructuring. */
    changed_company_id?: number; // Assuming Company is a reference ID

    /** UUID hash of the object. */
    checksum: string;

    /** ISO 3166-1 country code. */
    country?: number;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** A free text description of a company. */
    description?: string;

    /** Array of Game IDs. An array of games that a company has developed. */
    developed?: number[];

    /** Reference ID for Company Logo. The company’s logo. */
    logo?: number; // Assuming Company Logo is a reference ID

    /** Company name. */
    name: string;

    /** Reference ID for Company. A company with a controlling interest in a specific company. */
    parent?: number; // Assuming Company is a reference ID

    /** Array of Game IDs. An array of games that a company has published. */
    published?: number[];

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Unix Time Stamp. The date a company was founded. */
    start_date?: number;

    /** @deprecated DEPRECATED! Use `start_date_format` instead. */
    start_date_category?: string; // Assuming Start Date Category Enum can be represented as a string

    /** Reference ID for Date Format. The format of the start date. */
    start_date_format?: number; // Assuming Date Format is a reference ID

    /** Reference ID for Company Status. The status of the company. */
    status?: number; // Assuming Company Status is a reference ID

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string

    /** The website address (URL) of the item. */
    url?: string;

    /** Array of Company Website IDs. The company's official websites. */
    websites?: number[]; // Assuming Company Website is a reference ID
};