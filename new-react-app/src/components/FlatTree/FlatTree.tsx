import { useState } from 'react';
import { initialTravelPlan, Place } from './place';

function PlaceTree({
	id,
	placesById,
}: Readonly<{ id: number; placesById: any }>) {
	const place = placesById[id];
	const childIds = place.childIds;
	return (
		<li>
			{place.title}
			{childIds.length > 0 && (
				<ol>
					{childIds.map((childId: number) => (
						<PlaceTree key={childId} id={childId} placesById={placesById} />
					))}
				</ol>
			)}
		</li>
	);
}

export default function FlatTree() {
	const [plan, setPlan] = useState(initialTravelPlan);
	const roots: Place = plan[0];
	const planetIds: number[] = roots.childIds;

	return (
		<>
			Place to visit
			<ol>
				{planetIds.map((id) => (
					<PlaceTree key={id} id={id} placesById={plan} />
				))}
			</ol>
		</>
	);
}
