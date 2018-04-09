import React, { Component } from 'react';
import BookDetail from './BookDetail';


function AuthorDetail (props) {
    return (
			<div className="author col-xs-10">
			    <div>
			        <h3>{props.author.first_name} {props.author.last_name}</h3>
			        <img src={props.author.imageUrl} className="img-thumbnail"/>
			    </div>
			     <BookDetail books={props.author.books}/>
			</div>
    	);

	}


	export default AuthorDetail;