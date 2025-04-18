import {AgeRating} from "./AgeRating";
import {AlternativeName} from "./AlternativeName";
import {Artwork} from "./Artwork";
import {GameCategoryEnum} from "../enums";
import {Collection} from "./Collection";
import {Cover} from "./Cover";
import {ExternalGame} from "./ExternalGame";
import {Franchise} from "./Franchise";
import {GameEngine} from "./GameEngine";
import {GameLocalization} from "./GameLocalization";
import {GameMode} from "./GameMode";
import {GameStatus} from "./GameStatus";
import {GameType} from "./GameType";
import {Genre} from "./Genre";
import {InvolvedCompany} from "./InvolvedCompany";
import {Keyword} from "./Keyword";
import {LanguageSupport} from "./LanguageSupport";
import {MultiplayerMode} from "./MultiplayerMode";
import {Platform} from "./Platform";
import {PlayerPerspective} from "./PlayerPerspective";
import {ReleaseDate} from "./ReleaseDate";
import {Screenshot} from "./Screenshot";
import {GameStatusEnum} from "../enums";
import {Theme} from "./Theme";
import {GameVideo} from "./GameVideo";
import {Website} from "./Website";
import {UUID, UnixTimestamp, Rating, NonNegativeInteger, URL} from "./utility";

/**
 * Represents game information.
 *
 * Request Path: https://api.igdb.com/v4/games
 * Description: Video Games!
 */
export type Game = {
    /** Array of Age Rating IDs. The PEGI rating. */
    age_ratings?: number[] | AgeRating[];

    /** Rating based on external critic scores. */
    aggregated_rating?: Rating;

    /** Number of external critic scores. */
    aggregated_rating_count?: NonNegativeInteger;

    /** Array of Alternative Name IDs. Alternative names for this game. */
    alternative_names?: number[] | AlternativeName[];

    /** Array of Artwork IDs. Artworks of this game. */
    artworks?: number[] | Artwork[];

    /** Array of Game IDs. The bundles this game is a part of. */
    bundles?: number[] | Game[];

    /** @deprecated DEPRECATED! Use `game_type` instead. */
    category?: number | GameCategoryEnum;

    /** UUID hash of the object. */
    checksum: UUID;

    /** @deprecated DEPRECATED! Use `collections` instead. */
    collection?: number | Collection;

    /** Array of Collection IDs. The collections that this game is in. */
    collections?: number[] | Collection[];

    /** Reference ID for Cover. The cover of this game. */
    cover?: number | Cover;

    /** Date this was initially added to the IGDB database. */
    created_at: UnixTimestamp | Date;

    /** Array of Game IDs. DLCs for this game. */
    dlcs?: number[] | Game[];

    /** Array of Game IDs. Expanded games of this game. */
    expanded_games?: number[] | Game[];

    /** Array of Game IDs. Expansions of this game. */
    expansions?: number[] | Game[];

    /** Array of External Game IDs. External IDs this game has on other services. */
    external_games?: number[] | ExternalGame[];

    /** Unix Time Stamp. The first release date for this game. */
    first_release_date?: UnixTimestamp;

    /** @deprecated DEPRECATED! - To be removed. */
    follows?: NonNegativeInteger;

    /** Array of Game IDs. Forks of this game. */
    forks?: number[] | Game[];

    /** Reference ID for Franchise. The main franchise. */
    franchise?: number | Franchise;

    /** Array of Franchise IDs. Other franchises the game belongs to. */
    franchises?: number[] | Franchise[];

    /** Array of Game Engine IDs. The game engine used in this game. */
    game_engines?: number[] | GameEngine[];

    /** Array of Game Localization IDs. Supported game localizations for this game. A region can have at most one game localization for a given game. */
    game_localizations?: number[] | GameLocalization[];

    /** Array of Game Mode IDs. Modes of gameplay. */
    game_modes?: number[] | GameMode[];

    /** Reference ID for Game Status. The status of the game's release. */
    game_status?: number | GameStatus;

    /** Reference ID for Game Type. The type of game. */
    game_type?: number | GameType;

    /** Array of Genre IDs. Genres of the game. */
    genres?: number[] | Genre[];

    /** Number of follows a game gets before release. */
    hypes?: NonNegativeInteger;

    /** Array of Involved Company IDs. Companies who developed this game. */
    involved_companies?: number[] | InvolvedCompany[];

    /** Array of Keyword IDs. Associated keywords. */
    keywords?: number[] | Keyword[];

    /** Array of Language Support IDs. Supported Languages for this game. */
    language_supports?: number[] | LanguageSupport;

    /** Array of Multiplayer Mode IDs. Multiplayer modes for this game. */
    multiplayer_modes?: number[] | MultiplayerMode[];

    /** Game name. */
    name: string;

    /** Reference ID for Game. If a DLC, expansion or part of a bundle, this is the main game or bundle. */
    parent_game?: number | Game;

    /** Array of Platform IDs. Platforms this game was released on. */
    platforms?: number[] | Platform[];

    /** Array of Player Perspective IDs. The main perspective of the player. */
    player_perspectives?: number[] | PlayerPerspective[];

    /** Array of Game IDs. Ports of this game. */
    ports?: number[] | Game[];

    /** Average IGDB user rating. */
    rating?: Rating;

    /** Total number of IGDB user ratings. */
    rating_count?: NonNegativeInteger;

    /** Array of Release Date IDs. Release dates of this game. */
    release_dates?: number[] | ReleaseDate[]

    /** Array of Game IDs. Remakes of this game. */
    remakes?: number[] | Game[];

    /** Array of Game IDs. Remasters of this game. */
    remasters?: number[] | Game[];

    /** Array of Screenshot IDs. Screenshots of this game. */
    screenshots?: number[] | Screenshot[];

    /** Array of Game IDs. Similar games. */
    similar_games?: number[] | Game[];

    /** A url-safe, unique, lower-case version of the name. */
    slug: string;

    /** Array of Game IDs. Standalone expansions of this game. */
    standalone_expansions?: number[] | Game[];

    /** @deprecated DEPRECATED! Use `game_status` instead. */
    status?: number | GameStatusEnum;

    /** A short description of a game's story. */
    storyline?: string;

    /** A description of the game. */
    summary?: string;

    /** Array of Tag Numbers. Related entities in the IGDB API. */
    tags?: number[];

    /** Array of Theme IDs. Themes of the game. */
    themes?: number[] | Theme[];

    /** Average rating based on both IGDB user and external critic scores. */
    total_rating?: Rating;

    /** Total number of user and external critic scores. */
    total_rating_count?: NonNegativeInteger;

    /** The last date this entry was updated in the IGDB database. */
    updated_at: UnixTimestamp | Date;

    /** The website address (URL) of the item. */
    url?: URL;

    /** Reference ID for Game. If a version, this is the main game. */
    version_parent?: number | Game;

    /** Title of this version (i.e Gold edition). */
    version_title?: string;

    /** Array of Game Video IDs. Videos of this game. */
    videos?: number[] | GameVideo[];

    /** Array of Website IDs. Websites associated with this game. */
    websites?: number[] | Website[];
};
