<script lang="ts">
	import { goto } from '$app/navigation';
	import { account } from '$lib/utils/appwrite';

	const logout = () => {
		account.deleteSession('current').then(() => goto('auth'));
	};
</script>

<button type="button" class="btn btn-circle btn-wide" on:click={() => logout()}> Logout </button>
