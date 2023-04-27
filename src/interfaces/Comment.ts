import { Card } from "./Card";
import { User } from "./User";

export interface Comment {
	author: User;
	content: string;
	date: Date;
	card: Card;
}
