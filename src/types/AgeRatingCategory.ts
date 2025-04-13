import {AgeRatingOrganization} from "./AgeRatingOrganization";

/**
 * Represents age rating category information.
 *
 * Request Path: https://api.igdb.com/v4/age_rating_categories
 * Description: The rating category from the organization.
 */
export type AgeRatingCategory = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: number | Date;

    /** Reference ID for Age Rating Organization. The rating organization. */
    organization: number | AgeRatingOrganization;

    /** The rating name. */
    rating: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: number | Date;
};