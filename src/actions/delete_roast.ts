'use server'

import { deleteRoast as db_deleteRoast, purgeCacheTag } from '@/lib/api';

export const deleteRoast = async (id: number) => {
	"use server"
	
	purgeCacheTag('roasts');
	const success = await db_deleteRoast(id);
	return success;
}
