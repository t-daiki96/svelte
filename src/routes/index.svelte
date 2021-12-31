<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { todos, Todo } from '../store/todoStore';
	let uid = 1;
	const add = (target: EventTarget) => {
		if (!(target instanceof HTMLInputElement)) {
			return;
		}
		if (!target.value) {
			return;
		}
		todos.set([...$todos, { id: uid++, done: false, description: target.value }]);
		target.value = '';
	};

	const remove = (todo: Todo) => {
		todos.set($todos.filter((t) => t !== todo));
	};

	const update = (todo: Todo, done: boolean) => {
		todo.done = done;
		remove(todo);
		todos.set([...$todos, todo]);
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h2>input</h2>
<input on:keydown={(e) => e.key === 'Enter' && add(e.target)} />

<h2>todo</h2>
{#each $todos.filter((todo) => !todo.done) as todo (todo.id)}
	<label>
		<input type="checkbox" on:change={() => update(todo, true)} />
		{todo.description}
		<button on:click={() => remove(todo)}>remove</button>
	</label>
{/each}

<h2>done</h2>
{#each $todos.filter((todo) => todo.done) as todo (todo.id)}
	<label>
		<input type="checkbox" checked on:change={() => update(todo, false)} />
		{todo.description}
		<button on:click={() => remove(todo)}>remove</button>
	</label>
{/each}
