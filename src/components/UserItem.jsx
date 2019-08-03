import React, { Component } from 'react';
import { inject } from 'mobx-react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

@inject("userStore")
class UserItem extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  render() {
    const { user, userStore } = this.props
    const { name, companyName, phone, id } = user
    return (
      <TableRow>
        <TableCell component="th" scope="row">{name}</TableCell>
        <TableCell align="right">{companyName}</TableCell>
        <TableCell align="right">{phone}</TableCell>
        <TableCell align="right">
          <Button
            onClick={() => userStore.deleteUser(id)}
            variant="contained"
            color="primary">
            Clear
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default UserItem;