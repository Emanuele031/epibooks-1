import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,  
    };
  }

  handleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,  
    }));
  };

  render() {
    const { book } = this.props;  
    const { selected } = this.state;  

    return (
      <Card
        style={{
          width: '18rem',
          margin: '10px',
          border: selected ? '2px solid red' : 'none', 
        }}
        onClick={this.handleSelect} 
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Price: ${book.price.toFixed(2)}</Card.Text> {}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;


