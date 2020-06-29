import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import styled from 'styled-components';

const Navbar = styled.nav`
	padding: 10px 20px;
	text-align: center;
	background-color: #6d3d6d;
`;

const H1 = styled.h1`
	margin: 10px 0;
`;

export default function NavBar() {
	const { books } = useContext(BookContext);

	return (
		<Navbar>
			<H1>Reading List</H1>
			<p>Currently you have {books?.length} books to get through...</p>
		</Navbar>
	);
}
