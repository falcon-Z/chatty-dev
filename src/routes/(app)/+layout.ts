import { account } from '$lib/utils/appwrite';
import { createQuery } from '@tanstack/svelte-query';
import type { LayoutLoad } from './$types';
import { getUser } from '$lib/helpers';

export let ssr = false;

export const load = (async () => {
	const user = await getUser();

	return { user: user };
}) satisfies LayoutLoad;
