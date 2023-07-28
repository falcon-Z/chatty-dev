<script>
	import Icon from '@iconify/svelte';
	import OAuthButton from './oAuthButton.svelte';
</script>

<div
	class="relative card card-bordered p-2 rounded-3xl w-full max-w-md backdrop-blur bg-base-100 shadow-2xl bg-opacity-50"
>
	<div class="card-body">
		<div class="flex justify-between items-center flex-col gap-16">
			<h1 class=" text-5xl text-center flex justify-center items-center gap-4 flex-col">
				<Icon icon="carbon:login" />
				<span class="loading-spinner loading-lg" />
				<span> Login </span>
			</h1>
			<OAuthButton provider="github" />
		</div>
	</div>
</div>
