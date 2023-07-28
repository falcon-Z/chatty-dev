<script lang="ts">
	import '../app.postcss';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	if (data.user?.$id) {
		goto('profile');
	}
</script>

<main class="relative grid h-screen w-full place-items-center">
	<slot />
</main>
