import React from 'react';
import Link from 'next/link';
import { getRoasts } from '@/lib/api';
import AddRoastModal from '@/components/add_roast_modal';
import Table from './table';

type Props = {
	searchParams?: Record<string, string>;
}

// this prevents all caching.
// there has to be a better way to do this.
// we should be caching and invalidating when data changes
export const dynamic = 'force-dynamic';

export default async function Home() {
	const roasts = await getRoasts();

	return (
		<>
			<div className="w-full m-4 p-2 md:p-8">
				<div className="flex justify-end">
					<Link className="bg-yellow-500 mt-8 p-2 rounded-sm" href="/?add=true">Add Bean</Link>
				</div>
				<div className="w-full relative overflow-x-auto">
					<Table roasts={roasts} />	
				</div>
			</div>
			<AddRoastModal />
		</>
	)
}
