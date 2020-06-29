import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return [
				...state,
				{
					title: action.book.title,
					author: action.book.author,
					id: uuidv4(),
				},
			];
		case 'REMOVE_BOOK':
			return state.filter((book: any) => book.id !== action.id);
		default:
			return state;
	}
};
