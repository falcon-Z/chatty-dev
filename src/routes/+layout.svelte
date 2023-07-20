<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	import '../app.postcss';
</script>

<main class="relative grid h-screen w-full place-items-center">
	<slot />
</main>
