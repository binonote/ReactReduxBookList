import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';
import ActiveBook from './reducer-active-book';
import CurrentZip from './reducer-zipcode';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  zip: CurrentZip
});

export default rootReducer;
