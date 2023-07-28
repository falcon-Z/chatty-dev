<script lang="ts">
	import { page } from '$app/stores';
	import Logout from '$lib/components/logout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: user = data.user;
</script>

<div class="flex items-center justify-center h-full w-full">
	<div class="card card-bordered rounded-2xl p-4 shadow-2xl shadow-gray-600">
		<div class="card-body flex items-center justify-center gap-8">
			<img src={user?.prefs.avatar} alt="avatar" class="avatar rounded-full w-48 h-auto" />
			<div>
				<h3 class="text-3xl font-semibold tracking-tighter first-letter:uppercase">{user?.name}</h3>
				<p class="text-sm text-gray-400">{user?.email}</p>
			</div>
		</div>
		<div class="card-actions">
			<Logout />
		</div>
	</div>
</div>
