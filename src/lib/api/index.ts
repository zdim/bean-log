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

export const getRoasts = async () => {
	try {
		const { rows } = await sql`SELECT * FROM roasts`;

		return rows as Roast[];
	} catch (e) {
		console.error(e);
	}
}

export const getRoast = async (id: number) => {
	try {
		const { rows } = await sql`SELECT * FROM roasts WHERE id = ${id}`;
		return rows[0] as Roast;
	} catch (e) {
		console.error(e);
	}
}

export const addRoast = async (data: Omit<Roast, 'id'>) => {
	const res = await sql`INSERT INTO roasts (name, roaster, origin) VALUES (${data.name}, ${data.roaster}, ${data.origin});`;
	return res.rowCount > 0;
}

export const deleteRoast = async (id: number) => {
	try {
		console.log('DELETING ', id);
		const { rowCount } = await sql`DELETE FROM roasts WHERE id = ${id}`;
		return rowCount > 0;
	} catch (e) {
		console.error(e);
		return false;
	}
}
