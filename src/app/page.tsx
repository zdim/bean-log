import React from 'react';
import Link from 'next/link';
import { getRoasts } from './lib/api';
import AddRoastModal from './components/add_roast_modal';

type Props = {
	searchParams?: Record<string, string>;
}

export default async function Home({ searchParams }: Props) {
	const showAddModal = searchParams?.add;
	const roasts = await getRoasts();

	return (
		<main className="w-full flex min-h-screen flex-col items-center p-1">
			<header className="bg-gray-200 p-4 w-full">
				<h1>bean log</h1>
			</header>
			<div className="w-4/5 m-4">
				<div className="flex justify-end">
					<Link className="bg-yellow-500 mt-8 p-2 rounded-sm" href="/?add=true">Add Bean</Link>
				</div>
				<table className="min-w-full mt-4 border divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
							<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Roaster</th>
							<th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Origin</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{roasts.map(r => (
							<tr className="" key={`${r.roaster}-${r.name}`}>
								<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{r.name}</td>
								<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{r.roaster}</td>
								<td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{r.origin}</td>
							</tr>
						))
						}
					</tbody>
				</table>
			</div>
			{showAddModal && <AddRoastModal />}
		</main>
	)
}
