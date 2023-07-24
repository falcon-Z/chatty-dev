<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getUser } from '$lib/helpers';

	const user = createQuery({
		queryKey: ['user'],
		queryFn: () => getUser(),
		retry: false
	});
</script>

<slot />
