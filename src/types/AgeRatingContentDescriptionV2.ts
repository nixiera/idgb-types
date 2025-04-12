/**
 * Represents age rating content description V2 information.
 *
 * Request Path: https://api.igdb.com/v4/age_rating_content_descriptions_v2
 * Description: Age Rating Content Descriptors.
 */
export type AgeRatingContentDescriptionV2 = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** Description of the age rating content. */
    description: string;

    /** Reference ID for Age Rating Organization. The rating organization. */
    organization: number; // Based on the context, organization is a reference ID, so it should be a number.

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};