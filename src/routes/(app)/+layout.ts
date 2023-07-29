import type { UserInfoFromProviders } from '$lib/types';
import { account, avatars } from '$lib/utils/appwrite';
import type { LayoutLoad } from './$types';

export const load = (async ({ parent, fetch }) => {
	const { user } = await parent();

	const authProvider = (await account.getSession('current')).provider;

	const accessToken = await (await account.getSession('current')).providerAccessToken;

	if (user) {
		if (Object.keys(user.prefs).length == 0) {
			if (authProvider == 'github') {
				const githubProfileData = await fetch('https://api.github.com/user', {
					headers: {
						Authorization: `token ${accessToken}`
					}
				}).then((res) => res.json());

				const {
					bio,
					avatar_url,
					login,
					html_url
				}: { bio: string; avatar_url: string; login: string; html_url: string } = githubProfileData;

				const avatar =
					avatar_url != '' ? avatars.getImage(avatar_url) : avatars.getInitials(user.name);

				const profileData: UserInfoFromProviders = {
					avatar: avatar,
					provider: authProvider,
					providerId: login,
					providerProfile: html_url,
					bio: bio
				};

				return {
					firstSetup: true,
					profileData: profileData
				};
			}
		} else {
			return {
				firstSetup: false
			};
		}
	}
}) satisfies LayoutLoad;
