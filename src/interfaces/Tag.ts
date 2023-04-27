import { Card } from "./Card";

export interface Tag {
	name?: string;
	color: string;
	cards?: Card[];
}
