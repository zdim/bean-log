"use client"

import { Roast } from "@/lib/api"
import { deleteRoast } from '@/actions/delete_roast';
import { useRouter } from "next/navigation";

type Props = {
	roast: Roast
};

export default function RoastView({ roast }: Props) {
	const router = useRouter();

	const onDelete = async () => {
		const res = await deleteRoast(roast.id);
		if (res) {
			router.push('/');		
		}
	}

	return (
		<>
			<div className="uppercase text-xs mt-2">Name</div>
			<div>{roast?.name}</div>
			<div className="uppercase text-xs mt-2">Roaster</div>
			<div>{roast?.roaster}</div>
			<div className="uppercase text-xs mt-2">Origin</div>
			<div>{roast?.origin}</div>
			<button className="bg-red-200 mt-8 p-2 px-6 rounded-sm" onClick={onDelete}>Delete</button>
		</>
	)
}
