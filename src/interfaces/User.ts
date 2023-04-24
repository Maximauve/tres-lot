import { ApiResource } from "../utils/types";

export interface User extends ApiResource {
	email?: string;
	roles?: any;
	password?: string;
	username?: string;
	cards?: string[];
	workspaces?: string[];
	profilePicture?: string;
	profile_picture?: string;
	userIdentifier?: string;
}
