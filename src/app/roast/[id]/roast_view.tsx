"use client"

import { Roast } from "@/lib/api"
import { deleteRoast } from '@/actions/delete_roast';
import { useRouter } from "next/navigation";

type Props = {
	roast: Roast
};

function Label({ children }: React.PropsWithChildren) {
	return <div className="uppercase text-xs mt-2">{children}</div>
}

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
			<Label>Name</Label>
			<div>{roast?.name}</div>
			<Label>Roaster</Label>
			<div>{roast?.roaster}</div>
			<Label>Origin</Label>
			<div>{roast?.origin}</div>
			<button className="bg-red-200 dark:bg-red-600 mt-8 p-2 px-6 rounded-sm" onClick={onDelete}>Delete</button>
		</>
	)
}
