<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import type { AfterNavigate } from '@sveltejs/kit';

	let navigation: AfterNavigate;
	afterNavigate((_navigation) => {
		navigation = _navigation;
	});
</script>

<h1>Get redirected here:</h1>
<form method="POST">
	<input type="submit" />Submit the form and get redirected
</form>

<h1>Navigation</h1>
{#if navigation}
	<b>Type: {navigation.type}</b>
	<pre><code>
		{JSON.stringify(navigation, null, 2)}
	</code></pre>
{/if}
