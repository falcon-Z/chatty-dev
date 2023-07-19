<script>
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import '../app.postcss';
	import { client } from '$lib/utils/appwrite';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<main class="grid h-screen w-full place-items-center">
		<slot />
	</main>
</QueryClientProvider>
