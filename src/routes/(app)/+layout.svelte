<script lang="ts">
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;


	
	if (!data.user?.$id) {
		goto('auth');
	}

</script>

<div class="container h-full w-full border border-base-200 p-4 m-1 rounded-3xl">
	{#if }
		
	{/if}
</div>
