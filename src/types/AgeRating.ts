import {AgeRatingCategoryEnum} from "../enums";
import {AgeRatingContentDescription} from "./AgeRatingContentDescription";
import {AgeRatingOrganization} from "./AgeRatingOrganization";
import {AgeRatingRatingEnum} from "../enums";
import {AgeRatingCategory} from "./AgeRatingCategory";
import {AgeRatingContentDescriptionV2} from "./AgeRatingContentDescriptionV2";

/**
 * Represents age rating information.
 *
 * Request Path: https://api.igdb.com/v4/age_ratings
 * Description: Age Rating according to various rating organizations.
 */
export type AgeRating = {
    /** @deprecated DEPRECATED! Use `organization` instead. */
    category?: number | AgeRatingCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Array of Age Rating Content Description IDs. */
    content_descriptions?: number[] | AgeRatingContentDescription[];

    /** Reference ID for Age Rating Organization. The organization that has issued a specific rating. */
    organization: number | AgeRatingOrganization;

    /** @deprecated DEPRECATED! Use `rating_category` instead. */
    rating?: number | AgeRatingRatingEnum;

    /** Reference ID for Age Rating Category. The category of a rating. */
    rating_category: number | AgeRatingCategory;

    /** Array of Age Rating Content Description V2 IDs. The rating content descriptions. */
    rating_content_descriptions?: number[] | AgeRatingContentDescriptionV2[];

    /** The URL for the image of an age rating. */
    rating_cover_url?: string;

    /** A free text motivating a rating. */
    synopsis?: string;
};