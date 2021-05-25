import { useState } from "react";

function ToDoList() {
    const [list, setList] = useState(['JavaScript', 'Python', 'ReactJS', "NodeJS"]);

    function removeItem(index) {
        const newList = [...list];

        newList.splice(index, 1);
        console.log(newList);
        setList(newList);
    }

    return (
        <ul>
            {list.map((item, index) =>
                <li
                    key={index}
                >
                    <button onClick={() => removeItem(index)}>
                        {item}
                    </button>
                </li>
            )}
        </ul>
    );
};

export default ToDoList;