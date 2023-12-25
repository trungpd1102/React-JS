import { useState } from "react";
import { initialTravelPlan, Place } from "./place";

function renderChild({ plan, childIds }: { plan: object; childIds: number[] }) {
  const length = childIds.length;

  if (length <= 0 || !childIds) return;
  return (
    <ol>
      {childIds.map((id) => (
        <li>
          {plan[id].title}
          {renderChild({ plan: plan, childIds: plan[id].childIds })}
        </li>
      ))}
    </ol>
  );
}

export default function FlatTreeRegression() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const roots: Place = plan["0"];
  const planetIds: number[] = roots.childIds;

  return (
    <>
      Place to visit
      {renderChild({ plan: plan, childIds: planetIds })}
    </>
  );
}
