import React from 'react';
import AuthorDetail from './AuthorDetail';


function BookDetail (props) {
 const books = props.books && props.books.map(book => (
      <tr key={book.id} book={book}>
          <td>{book.title}</td>
          <td>{book.authors.map(author => author.name + ',')}</td>
          <td>
              <button className="btn" style={{backgroundColor:book.color}}/>
          </td>
      </tr>
  ));

  return (
    <table className='mt-3 table'>
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Authors</th>
                    <th>Color</th>
                  </tr>
              </thead>
    <tbody>
        {books}        
      
    </tbody>
    </table>
    )
}

export default BookDetail;