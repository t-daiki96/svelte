<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	let uid = 1;
	let todos = [
		{
			id: uid++,
			done: false,
			description: 'やること1'
		},
		{
			id: uid++,
			done: false,
			description: 'やること2'
		}
	];
	const add = (target: EventTarget) => {
		if (!(target instanceof HTMLInputElement)) {
			return;
		}
		todos = [...todos, { id: uid++, done: false, description: target.value }];
		target.value = '';
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h2>input</h2>
<input on:keydown={(e) => e.key === 'Enter' && add(e.target)} />

<h2>todo</h2>
{#each todos.filter((todo) => !todo.done) as todo (todo.id)}
	<label>
		<input type="checkbox" on:change={() => (todo.done = true)} />
		{todo.description}
	</label>
{/each}

<h2>done</h2>
{#each todos.filter((todo) => todo.done) as todo (todo.id)}
	<label>
		<input type="checkbox" checked on:change={() => (todo.done = false)} />
		{todo.description}
	</label>
{/each}
