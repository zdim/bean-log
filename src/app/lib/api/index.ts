import { revalidateTag } from "next/cache";

const API_URL = 'http://localhost:8080';

type CacheTags = 'roasts';
export const purgeCacheTag = (cacheTag: CacheTags) => revalidateTag(cacheTag);

type Roast = {
	id: number;
	name: string;
	roaster: string;
	origin: string;
}

const get = async <T,>(url: string, cacheTag?: CacheTags) => {
	const res = await fetch(
		`${API_URL}${url}`,
		cacheTag ? { next: { tags: [cacheTag] } } : undefined);

	if (!res.ok) {
		throw new Error('Failed to fetch');
	}

	return res.json() as Promise<T>;
}

export const post = async (url: string, data: any) => {
	const res = await fetch(`${API_URL}${url}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });

	if (!res.ok) {
		throw new Error('Failed to post');
	}

	return res.json();
}

export const getRoasts = async () => {
	const res = await get<Roast[]>('/roasts', 'roasts');
	return res;
}
