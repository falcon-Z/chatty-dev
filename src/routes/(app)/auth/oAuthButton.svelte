<script lang="ts">
	import Icon from '@iconify/svelte';

	export let provider: 'github' | 'gitlab';
</script>

<button type="button" class="btn btn-block btn-circle">
	Login with <span class="first-letter:uppercase">
		{provider}
	</span>
</button>
