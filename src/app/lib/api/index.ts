import { revalidateTag } from "next/cache";
import { sql } from "@vercel/postgres";

const API_URL = process.env.API_URL;

type CacheTags = 'roasts';
export const purgeCacheTag = (cacheTag: CacheTags) => revalidateTag(cacheTag);

export type Roast = {
	id: number;
	name: string;
	roaster: string;
	origin: string;
}

// const get = async <T,>(url: string, cacheTag?: CacheTags) => {
// 	const res = await fetch(
// 		`${API_URL}${url}`,
// 		cacheTag ? { next: { tags: [cacheTag] } } : undefined);
//
// 	if (!res.ok) {
// 		throw new Error('Failed to fetch');
// 	}
//
// 	return res.json() as Promise<T>;
// }
//
// export const post = async (url: string, data: any) => {
// 	const res = await fetch(`${API_URL}${url}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
//
// 	if (!res.ok) {
// 		throw new Error('Failed to post');
// 	}
//
// 	return res.json();
// }
//
// export const getRoasts = async () => {
// 	const res = await get<Roast[]>('/roasts', 'roasts');
// 	return res;
// }
//

export const getRoasts = async () => {
	try {
		const { rows } = await sql`SELECT * FROM roasts`;

		return rows as Roast[];
	} catch (e) {
		console.error(e);
	}
}

export const addRoast = async (data: Omit<Roast, 'id'>) => {
	const res = await sql`INSERT INTO roasts (name, roaster, origin) VALUES (${data.name}, ${data.roaster}, ${data.origin});`;
	return res.rowCount > 0;
}
