import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import '../style/css/Global.css';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

class Header extends Component {
  render() {
    return (
      <div class='header'>
        <Typography variant="h6" color="inherit">
        Header
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Header);