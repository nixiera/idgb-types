import {AgeRatingContentDescriptionCategoryEnum} from "../enums/AgeRatingContentDescriptionCategoryEnum";

/**
 * Represents age rating content description information.
 *
 * Request Path: https://api.igdb.com/v4/age_rating_content_descriptions
 * @deprecated
 * Description: Use age_rating_content_descriptions_v2 instead.
 */
export type AgeRatingContentDescription = {
    /** @deprecated DEPRECATED! Use age_rating_content_descriptions_v2 instead. */
    category?: number | AgeRatingContentDescriptionCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Description of the age rating content. */
    description: string;
};