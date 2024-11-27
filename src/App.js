
import React, { Component } from 'react';
import BookList from './components/BookList';
import fantasyData from "./fantasyData"

class App extends Component {
  render() {
    const books = fantasyData;  

    return (
      <div className="App" style={{ padding: '20px' }}>
        <h1>Elenco Libri Fantasy</h1>
        <BookList books={books} />  {}
      </div>
    );
  }
}

export default App;
