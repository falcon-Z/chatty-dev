<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import '../app.postcss';
	import { browser } from '$app/environment';
	import type { LayoutData } from './$types';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<main class="relative grid h-screen w-full place-items-center">
		<slot />
	</main>
</QueryClientProvider>
