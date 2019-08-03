import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import '../App.css';


@observer
@inject("userStore")
class SearchForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterData: ''
    }
  }

  _handleSearch = e => {
    this.props.userStore.filter = e.target.value;
    this.setState({ filterData: e.target.value })
  }

  _clearData = () => {
    this.props.userStore.filter = '';
    this.setState({ filterData: '' })
  }

  render() {
    const { filterData } = this.state
    return (
      <Paper elevation={10} className="container">
          <div className="searchForm">
            <TextField
              fullWidth
              value={filterData}
              onChange={this._handleSearch}
            />
            <Button
              onClick={this._clearData}
              type="reset"
              variant="contained"
              color="primary">
              Clear
            </Button>
          </div>
      </Paper>
    )
  }
}

export default SearchForm