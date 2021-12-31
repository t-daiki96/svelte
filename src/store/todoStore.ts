import { writable } from 'svelte/store';

export type Todo = {
	id: number;
	done: boolean;
	description: string;
};

export const todos = writable<Todo[]>([]);
