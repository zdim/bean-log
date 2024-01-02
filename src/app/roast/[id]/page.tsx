import { getRoast } from "@/lib/api";
import RoastView from "./roast_view";

export default async function RoastPage({ params }: { params: { id: string } }) {
	const id = params.id;
	const roast = await getRoast(+id);

	return (
		<div className="mt-8">
			{roast && <RoastView roast={roast} />}
		</div>
	);
}
