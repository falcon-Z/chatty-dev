<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUser } from '$lib/helpers/getUser';
	import { createQuery } from '@tanstack/svelte-query';

	const user = createQuery({
		queryKey: ['user'],
		queryFn: () => getUser(),
		retry: false
	});

	if ($user.data?.$id) {
		goto('app');
	}
</script>

<slot />
