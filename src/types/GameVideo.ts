/**
 * Represents game video information.
 *
 * Request Path: https://api.igdb.com/v4/game_videos
 * Description: A video associated with a game.
 */
export type GameVideo = {
    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The game this video is associated with. */
    game: number; // Assuming Game is a reference ID

    /** The name of the video. */
    name: string;

    /** The external ID of the video (YouTube Links). */
    video_id: string;
};