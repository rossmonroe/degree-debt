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

class About extends Component {
  render() {
    return (
      <div class='page-content'>
        <Typography variant="h6" color="inherit">
        About
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);