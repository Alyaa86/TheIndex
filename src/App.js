import React, { Component } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';
import BookDetail from './BookDetail';

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true,
      currentAuthor:{},
    }

    this.onSelectAuthor = this.onSelectAuthor.bind(this);
    this.deSelectAuthor = this.deSelectAuthor.bind(this);
  }
  
   onSelectAuthor(author_id){
    instance.get('/api/authors/'+ author_id)
      .then(res => res.data)
      .then(author => this.setState({currentAuthor: author}))
      .catch(err => console.error(err));
      
  }

  deSelectAuthor(){
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(author => this.setState({currentAuthor: this.state.authors}))
      .catch(err => console.error(err));
  }


  componentDidMount() {
    instance.get('/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({authors, loading: false})) 
      .catch(err => console.error(err));

  }



  getView() {

    if (this.state.loading) {
      return <Loading />

    } else if (this.state.currentAuthor.id){
      return <AuthorDetail author = {this.state.currentAuthor}/>

    } else {
      return <AuthorsList authors={this.state.authors} onSelect={this.onSelectAuthor}/>
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar deSelect = {this.deSelectAuthor}/>
          </div>
          <div className="content col-10">
            {this.getView()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
