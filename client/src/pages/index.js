import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import DeleteBtn from "../Components/DeleteBtn/DeleteBtn";
import API from "../Utils/API";
import { Col, Row, Container } from "../Components/Grid/Grid";
import { List, ListItem } from "../Components/List/List";
import { Input, FormBtn } from "../Components/Form/Form";

function BooksSaved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.items)
      )
      .catch(err => console.log(err));
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Book Search</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Submit Book
              </FormBtn>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/googlebooks/" + book._id}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3 style={{marginLeft: 120}}>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default BooksSaved;