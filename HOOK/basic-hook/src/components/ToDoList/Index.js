import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import List from './TodoList'
// import TodoForm from './TodoForm'
import PostList from "../PostList/PostList";

TodoList.propTypes = {};

function TodoList(props) {
	const [todoList, setTodoList] = useState([
		{ id: 0, title: "Hello React Hook✨" },
		{ id: 1, title: "This is basic React Hook🎇" },
		{ id: 2, title: "Hope this one can help me improve my React skill ⌨" },
	]);

	const [postList, setPostList] = useState([]);

	useEffect(() => {
		async function fetchPostList() {
			try {
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=5&_page=1`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				console.log({ responseJSON });

				const { data } = responseJSON;
				setPostList(data);
			} catch (error) {
				console.log("Failed to fetch data:", error.message);
			}
		}

		fetchPostList();
	}, []);
	// const [id, setId] = useState()

	// function handleTodoClick(todo) {
	//     if (id && id !== todo.id) document.getElementById(id).style.color = '';

	//     document.getElementById(todo.id).style.color = 'blue';
	//     setId(todo.id);
	// }

	function handleTodoClick(todo) {
		console.log(todo);
		const index = todoList.findIndex((x) => x.id === todo.id);

		if (index < 0) return;

		let newTodoList = [...todoList];
		newTodoList.splice(index, 1);

		setTodoList(newTodoList);
	}

	function handleTodoFormSubmit(formValue) {
		console.log("Form values:", formValue);
		// add new todo to list
		const newTodo = {
			id: todoList.length,
			...formValue,
		};
		const newTodoList = [...todoList];

		newTodoList.push(newTodo);
		setTodoList(newTodoList);
	}

	return (
		<div>
			{/* <List
                todos={todoList}
                onTodoClick={handleTodoClick}
            />
            <TodoForm onSubmit={handleTodoFormSubmit}/> */}
			<PostList posts={postList} />
		</div>
	);
}

export default TodoList;
