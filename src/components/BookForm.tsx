import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import styled from 'styled-components';

const Form = styled.form`
	padding: 20px;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	margin: 6px 0;
	background: #3c1f3c;
	color: #fff;
	border: 0;
	border-radius: 4px;

	&:placeholder {
		color: #fff;
	}
`;

const Button = styled.button`
	margin: 10px auto;
	background: #eee;
	border: 0;
	padding: 6px 20px;
	display: block;
	border-radius: 4px;
`;

const NewBookForm = () => {
	const { dispatch } = useContext(BookContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch({ type: 'ADD_BOOK', book: { title, author } });
		setTitle('');
		setAuthor('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type='text'
				placeholder='book title'
				value={title}
				onChange={(e: any) => setTitle(e.target.value)}
				required
			/>
			<Input
				type='text'
				placeholder='author name'
				value={author}
				onChange={(e: any) => setAuthor(e.target.value)}
				required
			/>
			<Button type='submit'>Add book</Button>
		</Form>
	);
};

export default NewBookForm;
