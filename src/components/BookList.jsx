
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleBook from "./SingleBooks"

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',  
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,  
    });
  };

  render() {
    const { books } = this.props;  
    const { search } = this.state;  

    
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Cerca per titolo"
          value={search}
          onChange={this.handleSearchChange}  
          style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
        />
        <Row>
          {filteredBooks.map((book) => (
            <Col key={book.asin} md={4}>
              <SingleBook book={book} />  {}
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default BookList;



