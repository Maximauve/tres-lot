import { Card } from "./Card";
import { Project } from "./Project";

export interface List {
	name: string;
	cards?: Card[];
	project: Project;
	index: number;
}
