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

class Learn extends Component {
  render() {
    return (
      <div class='page-content'>
        <Typography variant="h6" color="inherit">
        Learn
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Learn);