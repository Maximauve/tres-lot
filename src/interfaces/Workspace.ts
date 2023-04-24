import { ApiResource } from "../utils/types";

export interface Workspace extends ApiResource {
	members?: any;
	tables?: string[];
	picture?: string;
}
