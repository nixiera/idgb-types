/**
 * Represents age rating information.
 *
 * Request Path: https://api.igdb.com/v4/age_ratings
 * Description: Age Rating according to various rating organisations.
 */
export type AgeRating = {
    /** @deprecated DEPRECATED! Use `organization` instead. */
    category?: string; // Assuming the EnumDEPRECATED can be represented as a string

    /** UUID hash of the object. */
    checksum: string;

    /** Array of Age Rating Content Description IDs. */
    content_descriptions?: string[]; // Assuming Age Rating Content Description ID is a string

    /** Reference ID for Age Rating Organization. The organization that has issued a specific rating. */
    organization: number; // Based on the context, organization is a reference ID, so it should be a number.

    /** @deprecated DEPRECATED! Use `rating_category` instead. */
    rating?: string; // Assuming the EnumDEPRECATED can be represented as a string

    /** Reference ID for Age Rating Category. The category of a rating. */
    rating_category: number; // Based on the context, rating_category is a reference ID, so it should be a number.

    /** Array of Age Rating Content Description V2 IDs. The rating content descriptions. */
    rating_content_descriptions?: string[]; // Assuming Age Rating Content Description V2 ID is a string

    /** The URL for the image of an age rating. */
    rating_cover_url?: string;

    /** A free text motivating a rating. */
    synopsis?: string;
};