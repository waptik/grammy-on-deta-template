import { type User } from "grammy/types";

export function getFullName(from: User) {
	return from.last_name
		? `${from.first_name} ${from.last_name}`
		: from.first_name;
}
