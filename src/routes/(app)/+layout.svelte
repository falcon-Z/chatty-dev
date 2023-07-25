<script lang="ts">
	import type { LayoutData } from './$types';
	import { goto } from '$app/navigation';

	export let data: LayoutData;

	if (data.user?.$id) {
		goto('app');
	}
</script>

<main class="relative grid h-screen w-full place-items-center">
	<slot />
</main>

{@debug data}
