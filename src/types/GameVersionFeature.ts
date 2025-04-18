import {GameVersionFeatureCategoryEnum} from "../enums";
import {GameVersionFeatureValue} from "./GameVersionFeatureValue";

/**
 * Represents game version feature information.
 *
 * Request Path: https://api.igdb.com/v4/game_version_features
 * Description: Features and descriptions of what makes each version/edition different from the main game.
 */
export type GameVersionFeature = {
    /** The category of the feature description. */
    category?: number | GameVersionFeatureCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** The description of the feature. */
    description?: string;

    /** Position of this feature in the list of features. */
    position?: number;

    /** The title of the feature. */
    title?: string;

    /** Array of Game Version Feature Value IDs. The bool/text value of the feature. */
    values?: number[] | GameVersionFeatureValue;
};