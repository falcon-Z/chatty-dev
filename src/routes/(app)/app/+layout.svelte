<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	if (!data.user?.$id) {
		goto('auth');
	}
</script>

<slot />
