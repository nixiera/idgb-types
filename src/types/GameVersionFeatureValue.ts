import {Game} from "./Game";
import {GameVersionFeature} from "./GameVersionFeature";
import {GameVersionFeatureValueEnum} from "../enums";

/**
 * Represents game version features value information.
 *
 * Request Path: https://api.igdb.com/v4/game_version_feature_values
 * Description: The bool/text value of the feature.
 */
export type GameVersionFeatureValue = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The version/edition this value refers to. */
    game: number | Game;

    /** Reference ID for Game Version Feature. The id of the game feature. */
    game_feature: number | GameVersionFeature;

    /** The boolean value of this feature. */
    included_feature?: number | GameVersionFeatureValueEnum;

    /** The text value of this feature. */
    note?: string;
};