import { account } from '$lib/utils/appwrite';

export const getUser = async () => {
	try {
		const user = await account.get();
		return user;
	} catch {
		return null;
	}
};
