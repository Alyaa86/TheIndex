import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

// Components
import Sidebar from './Sidebar';
import Loading from './Loading';
import AuthorsList from './AuthorsList';
import AuthorDetail from './AuthorDetail';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authors: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('https://the-index-api.herokuapp.com/api/authors/')
      .then(res => res.data)
      .then(authors => this.setState({
        authors,
        filteredAuthors: authors,
        loading: false,
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor}/>
          </div>
          <div className="content col-10">
            {this.state.loading ?
              <Loading /> :
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/authors'/>}/>
                <Route path='/authors/:authorID' component={AuthorDetail}/>
                <Route path='/authors/'
                       render={() => <AuthorsList authors={this.state.authors}/>}/>
              </Switch>}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
