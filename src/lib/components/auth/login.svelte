<script>
	import Icon from '@iconify/svelte';
	import OAuthButton from './oAuthButton.svelte';
</script>

<div class=" card card-bordered p-2 rounded-3xl w-full max-w-md">
	<div class="card-body">
		<div class="flex justify-between items-center flex-col gap-16">
			<h1 class=" text-5xl text-center flex justify-center items-center gap-4 flex-col">
				<Icon icon="carbon:login" />
				Login
			</h1>
			<OAuthButton provider="github" />
		</div>
	</div>
</div>
