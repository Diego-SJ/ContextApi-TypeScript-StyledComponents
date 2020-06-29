import React from 'react';
import BookContextProvider from './context/BookContext';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const AppStyle = styled.div`
	background: #4c2a4c;
	margin: 20px auto;
	width: 90%;
	max-width: 700px;
	color: #eee;
	padding-bottom: 20px;
`;

function App() {
	return (
		<AppStyle>
			<BookContextProvider>
				<NavBar />
				<BookForm />
				<BookList />
			</BookContextProvider>
		</AppStyle>
	);
}

export default App;
