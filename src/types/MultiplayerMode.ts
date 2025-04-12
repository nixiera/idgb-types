/**
 * Represents multiplayer mode information.
 *
 * Request Path: https://api.igdb.com/v4/multiplayer_modes
 * Description: Data about the supported multiplayer types.
 */
export type MultiplayerMode = {
    /** True if the game supports campaign coop. */
    campaigncoop?: boolean;

    /** UUID hash of the object. */
    checksum: string;

    /** True if the game supports drop in/out multiplayer. */
    dropin?: boolean;

    /** Reference ID for Game. The game this multiplayer mode is associated with. */
    game: number; // Assuming Game is a reference ID

    /** True if the game supports LAN coop. */
    lancoop?: boolean;

    /** True if the game supports offline coop. */
    offlinecoop?: boolean;

    /** Maximum number of offline players in offline coop. */
    offlinecoopmax?: number;

    /** Maximum number of players in offline multiplayer. */
    offlinemax?: number;

    /** True if the game supports online coop. */
    onlinecoop?: boolean;

    /** Maximum number of online players in online coop. */
    onlinecoopmax?: number;

    /** Maximum number of players in online multiplayer. */
    onlinemax?: number;

    /** Reference ID for Platform. The platform this multiplayer mode refers to. */
    platform?: number; // Assuming Platform is a reference ID

    /** True if the game supports split screen, offline multiplayer. */
    splitscreen?: boolean;

    /** True if the game supports split screen, online multiplayer. */
    splitscreenonline?: boolean;
};