import { useState } from "react";

interface Item {
  title: string;
  id: number;
}

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu({ defaultProp }: { defaultProp: string }) {
  // TODO: Ask for define type of items
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id} style={{ margin: "5px" }}>
            {item.title + " "}
            <button
              onClick={() => {
                setSelectedItem(item);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>
        You picked{" "}
        <span style={{ color: "lightsalmon" }}>{selectedItem.title}</span>.
      </p>
      <p> Default prop: {defaultProp}</p>
    </>
  );
}

Menu.defaultProps = {
  defaultProp: 'OK'
};
