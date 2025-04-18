/**
 * Represents the category of a website associated with a game or company in the IGDB database.
 * 
 * This enum is used to categorize different types of websites related to games, such as
 * official websites, social media profiles, storefronts, and community sites.
 * It's commonly used with the `Website` type to indicate what kind of website is being referenced.
 * 
 * @example
 * ```typescript
 * import { Website, WebsiteCategoryEnum } from 'igdb-types';
 * 
 * // Filter websites to find the official site
 * const officialSite = game.websites?.find(website => 
 *   typeof website !== 'number' && website.category === WebsiteCategoryEnum.OFFICIAL
 * );
 * 
 * // Get all social media links
 * const socialMediaSites = game.websites?.filter(website => 
 *   typeof website !== 'number' && 
 *   [
 *     WebsiteCategoryEnum.FACEBOOK, 
 *     WebsiteCategoryEnum.TWITTER, 
 *     WebsiteCategoryEnum.INSTAGRAM,
 *     WebsiteCategoryEnum.DISCORD,
 *     WebsiteCategoryEnum.BLUESKY
 *   ].includes(website.category)
 * );
 * ```
 * 
 * @see https://api-docs.igdb.com/#website For more information about websites in the IGDB API
 */
export enum WebsiteCategoryEnum {
    /**
     * The official website for the game or company.
     * This is typically the main website created and maintained by the developer or publisher.
     */
    OFFICIAL = 1,

    /**
     * A Wikia/Fandom community wiki page for the game.
     * These are fan-maintained encyclopedias with detailed information about game content.
     */
    WIKIA = 2,

    /**
     * The Wikipedia page for the game or company.
     */
    WIKIPEDIA = 3,

    /**
     * The official Facebook page for the game or company.
     */
    FACEBOOK = 4,

    /**
     * The official Twitter/X account for the game or company.
     */
    TWITTER = 5,

    /**
     * The official Twitch channel for the game or company.
     * Often used for streaming gameplay, developer updates, or esports events.
     */
    TWITCH = 6,

    /**
     * The official Instagram account for the game or company.
     */
    INSTAGRAM = 8,

    /**
     * The official YouTube channel for the game or company.
     * Typically contains trailers, gameplay videos, and developer updates.
     */
    YOUTUBE = 9,

    /**
     * The App Store (iOS) page for the iPhone version of the game.
     */
    IPHONE = 10,

    /**
     * The App Store (iOS) page for the iPad version of the game.
     */
    IPAD = 11,

    /**
     * The Google Play Store page for the Android version of the game.
     */
    ANDROID = 12,

    /**
     * The Steam store page for the game.
     */
    STEAM = 13,

    /**
     * The official subreddit for the game or company.
     * A community-driven discussion forum on Reddit.
     */
    REDDIT = 14,

    /**
     * The itch.io store page for the game.
     * A platform primarily for independent game developers.
     */
    ITCH = 15,

    /**
     * The Epic Games Store page for the game.
     */
    EPICGAMES = 16,

    /**
     * The GOG (Good Old Games) store page for the game.
     */
    GOG = 17,

    /**
     * The official Discord server for the game or company.
     * A community chat and voice communication platform.
     */
    DISCORD = 18,

    /**
     * The official Bluesky account for the game or company.
     * A decentralized social media platform.
     */
    BLUESKY = 19,
}
