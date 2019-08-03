import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {  } from 'mobx-react';

import './App.css';
import UsersStore from './store/users.store';
import AddForm from './components/AddForm';
import UserList from './components/UserList';
import SearchForm from './components/SearchForm';

const userStore = new UsersStore();

class App extends Component {

  render() {
    return (
      <Provider userStore = {userStore}>
        <div className="App">
          <AddForm />
          <SearchForm />
          <UserList />
        </div>
      </Provider>
    );
  }
}

export default App;