import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import { List, ListItem } from "../Components/List/List";
import DeleteBtn from "../Components/DeleteBtn/DeleteBtn";
import API from "../Utils/API";


function Save() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
  
  
      return (
          <div>
              <Jumbotron>
                <h1>Saved Books</h1>
              </Jumbotron>
              {books.length ? (
                <List>
                  {books.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
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
            </div>
        
      );
    }
  
  
  export default Save;