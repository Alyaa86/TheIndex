import React from 'react';

function BookRow(props) {
  const book = props.book
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors && "LOL"}</td>
      <td>
        <button className="btn" style={{backgroundColor: book.color}}/>
      </td>
    </tr>
  );
}

export default BookRow;
