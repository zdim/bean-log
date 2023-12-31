'use server'

import { post, purgeCacheTag } from "../lib/api";

export const addRoast = async (data: FormData) => {
	'use server'

	purgeCacheTag('roasts');
	const rawFormData = {
		name: data.get('name'),
		roaster: data.get('roaster'),
		origin: data.get('origin'),
	};

	try {
		const res = await post('/roasts', rawFormData);
		const form = document.getElementById('add-new-roast-form');
		console.log(form);
		(form as HTMLFormElement).reset();
	} catch (e) {
		console.error(e);
	}


};
