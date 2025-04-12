/**
 * Represents company website information.
 *
 * Request Path: https://api.igdb.com/v4/company_websites
 * Description: Company Website.
 */
export type CompanyWebsite = {
    /** @deprecated DEPRECATED! Use `type` instead. */
    category?: string; // Assuming Category Enum can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Indicates if the website is trusted. */
    trusted?: boolean;

    /** Reference ID for Website Type. The website type associated with the website. */
    type?: number; // Assuming Website Type is a reference ID

    /** The website address (URL) of the item. */
    url?: string;
};