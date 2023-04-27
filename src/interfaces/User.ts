import { Card } from "./Card";
import { Workspace } from "./Workspace";

export enum Role {
	ADMIN = 'admin',
	USER = 'user',
}

export interface User {
	id?: string;
	email: string;
	roles: Role;
	password: string;
	username: string;
	cards?: Card[];
	workspaces?: Workspace[];
	profilePicture?: string;
}
