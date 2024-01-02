'use client'

import { Roast } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
	roasts?: Roast[]
}
export default function Table({ roasts }: Props) {

	return (
		<>
			<div className="table w-full mt-4 text-gray-500 dark:text-gray-400 text-sm text-left">
				<div className="table-row bg-gray-50 dark:bg-gray-700 dark:text-gray-400 uppercase">
					<div className="table-cell px-6 py-3">Name</div>
					<div className="table-cell px-6 py-3">Roaster</div>
					<div className="table-cell px-6 py-3">Origin</div>
				</div>
				<div className="table-row-group bg-white dark:bg-gray-900">
					{roasts?.map(r => (
						<Link
							className="table-row cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
							key={`${r.roaster}-${r.name}`}
							href={`/roast/${r.id}`}>
							<div className="table-cell px-6 py-4 whitespace-nowrap">{r.name}</div>
							<div className="table-cell px-6 py-4 whitespace-nowrap">{r.roaster}</div>
							<div className="table-cell px-6 py-4 whitespace-nowrap">{r.origin}</div>
						</Link>
					))
					}
				</div>

			</div>
		</>
	)
}
