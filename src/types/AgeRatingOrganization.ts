/**
 * Represents age rating organization information.
 *
 * Request Path: https://api.igdb.com/v4/age_rating_organizations
 * Description: Age Rating according to various rating organisations.
 */
export type AgeRatingOrganization = {
    /** UUID hash of the object. */
    checksum: string;

    /** Date this was initially added to the IGDB database. */
    created_at: string; // Assuming datetime can be represented as a string

    /** The title of an age rating organization. */
    name: string;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: string; // Assuming datetime can be represented as a string
};