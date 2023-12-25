import { ChangeEvent, useState } from "react";

interface Item {
  title: string;
  id: number;
}

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectedItem = items.find((item: Item) => {
    return item.id === selectedId;
  });

  function handleItemChange(id: number, e: ChangeEvent<HTMLInputElement>) {
    const temItems : Item[] = items.map((item: Item) => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    });

    // TODO: How to update state without pass whole state
    setItems(temItems);
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id} style={{ margin: "5px" }}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>
        You picked{" "}
        <span style={{ color: "lightsalmon" }}>{selectedItem?.title}</span>.
      </p>
    </>
  );
}
