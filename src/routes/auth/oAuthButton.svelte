<script lang="ts">
	import { PUBLIC_AUTH_REDIRECT } from '$env/static/public';
	import { account } from '$lib/utils/appwrite';

	export let provider: 'github' | 'gitlab';

	const login = (provider: 'github' | 'gitlab') => {
		account.createOAuth2Session(
			provider,
			`${PUBLIC_AUTH_REDIRECT}/auth`,
			`${PUBLIC_AUTH_REDIRECT}/auth?failed`
		);
	};
</script>

<button type="button" class="btn btn-block btn-circle" on:click={() => login(provider)}>
	Login with <span class="first-letter:uppercase">
		{provider}
	</span>
</button>
