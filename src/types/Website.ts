import {WebsiteCategoryEnum} from "../enums/WebsiteCategoryEnum";
import {Game} from "./Game";
import {WebsiteType} from "./WebsiteType";

/**
 * Represents website information.
 *
 * Request Path: https://api.igdb.com/v4/websites
 * Description: A website url, usually associated with a game.
 */
export type Website = {
    /** @deprecated DEPRECATED! Use `type` instead. */
    category?: number | WebsiteCategoryEnum;

    /** UUID hash of the object. */
    checksum: string;

    /** Reference ID for Game. The game this website is associated with. */
    game: number | Game;

    /** Indicates if the website is trusted. */
    trusted?: boolean;

    /** Reference ID for Website Type. The website type associated with the website. */
    type?: number | WebsiteType;

    /** The website address (URL) of the item. */
    url?: string;
};