/**
 * Represents game version feature value information.
 *
 * Request Path: https://api.igdb.com/v4/game_version_feature_values
 * Description: The bool/text value of the feature.
 */
export type GameVersionFeatureValue = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The version/edition this value refers to. */
    game: number; // Assuming Game is a reference ID

    /** Reference ID for Game Version Feature. The id of the game feature. */
    game_feature: number; // Assuming Game Version Feature is a reference ID

    /** The boolean value of this feature. */
    included_feature?: string; // Assuming Included Feature Enum can be represented as a string

    /** The text value of this feature. */
    note?: string;
};