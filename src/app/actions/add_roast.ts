'use server'

import { type Roast, addRoast as db_addRoast, purgeCacheTag } from "../lib/api";

export const addRoast = async (data: FormData) => {
	'use server'

	const rawFormData = {
		name: data.get('name'),
		roaster: data.get('roaster'),
		origin: data.get('origin'),
	};

	const parsed: Omit<Roast, 'id'> = {
		name: rawFormData.name as string,
		roaster: rawFormData.roaster as string,
		origin: rawFormData.origin as string,
	}

	try {
		const res = await db_addRoast(parsed);
	} catch (e) {
		console.error(e);
	}


};
