import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';
import styled from 'styled-components';

const BookListWrapper = styled.div`
	margin: 20px;
	height: 100%;
`;

const List = styled.ul`
	padding: 0;
	list-style-type: none;
`;

const Empty = styled.div`
	margin: 0px;
	text-align: center;
`;

export default function BookList() {
	const { books } = useContext(BookContext);

	return books?.length ? (
		<BookListWrapper>
			<List>
				{books.map((book: any) => {
					return <BookDetails key={book.id} book={book} />;
				})}
			</List>
		</BookListWrapper>
	) : (
		<Empty>No books to read. Hello free time</Empty>
	);
}
