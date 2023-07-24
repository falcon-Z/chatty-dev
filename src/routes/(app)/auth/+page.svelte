<script>
	import Login from './login.svelte';
	import BackgroundGradient from '$lib/components/backgroundGradient.svelte';
</script>

<div class="absolute inset-0"><BackgroundGradient /></div>
<div class="relative w-full p-2 grid place-items-center">
	<Login />
</div>
