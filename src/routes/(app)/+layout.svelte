<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	if (!data.user?.$id) {
		goto('auth');
	}

	if (data.firstSetup) {
		goto('setup');
	}
</script>

<div
	class="container h-full max-h-screen overflow-hidden w-full border border-base-200 p-4 m-1 @container rounded-3xl"
>
	<slot />
</div>
