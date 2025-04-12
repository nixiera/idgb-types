/**
 * Represents age rating content description information.
 *
 * Request Path: https://api.igdb.com/v4/age_rating_content_descriptions
 * Description: Deprecated. Use age_rating_content_descriptions_v2 instead.
 */
export type AgeRatingContentDescription = {
    /** @deprecated DEPRECATED! Use age_rating_content_descriptions_v2 instead. */
    category?: string; // Assuming the EnumDEPRECATED can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Description of the age rating content. */
    description: string;
};