<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	let text = 'world';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>hello {text}</h1>
</section>
