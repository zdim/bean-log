'use client'

import { Roast } from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
	roasts?: Roast[]
}
export default function Table({ roasts }: Props) {
	const router = useRouter();

	const onRowClick = (id: number) => {
		router.push('/roast/' + id);
	}

	return (
		<table className="w-full mt-4 text-gray-500 dark:text-gray-400 text-sm text-left">
			<thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase">
				<tr>
					<th scope="col" className="px-6 py-3">Name</th>
					<th scope="col" className="px-6 py-3">Roaster</th>
					<th scope="col" className="px-6 py-3">Origin</th>
				</tr>
			</thead>
			<tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
				{roasts?.map(r => (
					<tr className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700" key={`${r.roaster}-${r.name}`} onClick={() => onRowClick(r.id)}>
						<td className="px-6 py-4 whitespace-nowrap">{r.name}</td>
						<td className="px-6 py-4 whitespace-nowrap">{r.roaster}</td>
						<td className="px-6 py-4 whitespace-nowrap">{r.origin}</td>
					</tr>
				))
				}
			</tbody>
		</table>
	)
}
