import { Account, Avatars, Client } from 'appwrite';
import { PUBLIC_APPWRITE_PROJECT_ID, PUBLIC_APPWRITE_ENDPOINT } from '$env/static/public';

export const client = new Client()
	.setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
	.setProject(PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const avatars = new Avatars(client);
