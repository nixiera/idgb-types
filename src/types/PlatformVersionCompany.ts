import {Company} from "./Company";

/**
 * Represents platform version company information.
 *
 * Request Path: https://api.igdb.com/v4/platform_version_companies
 * Description: A platform developer.
 */
export type PlatformVersionCompany = {
    /** UUID hash of the object. */
    checksum: string;

    /** Any notable comments about the developer. */
    comment?: string;

    /** Reference ID for Company. The company responsible for developing this platform version. */
    company: number | Company;

    /** Indicates if the company was a developer. */
    developer?: boolean;

    /** Indicates if the company was a manufacturer. */
    manufacturer?: boolean;
};