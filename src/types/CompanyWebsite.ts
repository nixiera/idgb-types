import {WebsiteType} from "./WebsiteType";
import {WebsiteCategoryEnum} from "../enums/WebsiteCategoryEnum";

/**
 * Represents company website information.
 *
 * Request Path: https://api.igdb.com/v4/company_websites
 * Description: Company Website.
 */
export type CompanyWebsite = {
    /** @deprecated DEPRECATED! Use `type` instead. */
    category?: number | WebsiteCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Indicates if the website is trusted. */
    trusted?: boolean;

    /** Reference ID for Website Type. The website type associated with the website. */
    type?: number | WebsiteType;

    /** The website address (URL) of the item. */
    url?: string;
};