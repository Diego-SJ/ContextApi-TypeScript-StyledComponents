import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import styled from 'styled-components';

const Item = styled.li`
	background: #6d3d6d;
	border-radius: 4px;
	padding: 5px 20px;
	cursor: pointer;
	margin: 5px 0;

	&:hover {
		opacity: 0.7;
		text-decoration: line-through;
	}
`;

const Title = styled.h1`
	font-weight: bold;
	color: #fff;
	font-size: 1.2em;
`;

const Author = styled.p`
	font-weight: lighter;
`;

export default function BookDetails(props: any): JSX.Element {
	const { dispatch } = useContext(BookContext);

	const { id, title, author } = props.book;

	return (
		<Item onClick={() => dispatch({ type: 'REMOVE_BOOK', id: id })}>
			<Title>{title}</Title>
			<Author>{author}</Author>
		</Item>
	);
}
