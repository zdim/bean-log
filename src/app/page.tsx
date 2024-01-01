import React from 'react';
import Link from 'next/link';
import { getRoasts } from './lib/api';
import AddRoastModal from './components/add_roast_modal';

type Props = {
	searchParams?: Record<string, string>;
}

// there has to be a better way to do this.
// we should be caching and invalidating when data changes
export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: Props) {
	const roasts = await getRoasts();

	return (
		<main className="w-full flex min-h-screen flex-col items-center p-1">
			<header className="bg-gray-200 dark:bg-slate-800 p-4 w-full">
				<h1>bean log</h1>
			</header>
			<div className="w-full m-4 p-2 md:p-8">
				<div className="flex justify-end">
					<Link className="bg-yellow-500 mt-8 p-2 rounded-sm" href="/?add=true">Add Bean</Link>
				</div>
				<div className="w-full relative overflow-x-auto">
					<table className="w-full mt-4 text-gray-500 dark:text-gray-400 text-sm text-left">
						<thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase">
							<tr>
								<th scope="col" className="px-6 py-3">Name</th>
								<th scope="col" className="px-6 py-3">Roaster</th>
								<th scope="col" className="px-6 py-3">Origin</th>
							</tr>
						</thead>
						<tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							{roasts?.map(r => (
								<tr className="" key={`${r.roaster}-${r.name}`}>
									<td className="px-6 py-4 whitespace-nowrap">{r.name}</td>
									<td className="px-6 py-4 whitespace-nowrap">{r.roaster}</td>
									<td className="px-6 py-4 whitespace-nowrap">{r.origin}</td>
								</tr>
							))
							}
						</tbody>
					</table>
				</div>
			</div>
			<AddRoastModal />
		</main>
	)
}
