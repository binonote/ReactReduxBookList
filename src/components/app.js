import React from 'react';
import { Component } from 'react';
import BookList from '../container/book-list';
import BookDetail from '../container/book-detail';
import SearchBar from '../container/search-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
