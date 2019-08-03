import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserItem from './UserItem';

import '../App.css';


@inject("userStore")
@observer
class UserList extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Paper elevation={10}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Clear</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.userStore.findUser.map((user, index) => <UserItem key={index} user={user}/>)}
        </TableBody>
      </Table>
    </Paper>
    );
  }
}

export default UserList;