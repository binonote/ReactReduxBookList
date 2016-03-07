import React from 'react';
import BookList from '../container/book-list';
import BookDetail from '../container/book-detail';

export default() => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
}
