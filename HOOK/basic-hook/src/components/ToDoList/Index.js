import React, { useState, useEffect } from "react";
import queryString from "query-string";

import Pagination from "../Pagination/Pagination";
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
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});

	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
	})

	useEffect(() => {
		async function fetchPostList() {
			try {
				// convert object to query string: _limit=10&_page=1
				const paramsString = queryString.stringify(filters)
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				console.log({ responseJSON });

				const { data, pagination } = responseJSON;
				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.log("Failed to fetch data:", error.message);
			}
		}

		fetchPostList();
	}, [filters]);
	// const [id, setId] = useState()

	// function handleTodoClick(todo) {
	//     if (id && id !== todo.id) document.getElementById(id).style.color = '';

	//     document.getElementById(todo.id).style.color = 'blue';
	//     setId(todo.id);
	// }

	function handlePageChange(newPage) {
		console.log("New papge: ", newPage);
		setFilters({
			...filters,
			_page: newPage,
		})
	}

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
			<Pagination
				pagination={pagination}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default TodoList;
