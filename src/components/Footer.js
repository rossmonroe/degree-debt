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

class Footer extends Component {
  render() {
    return (
      <div class='footer'>
        <Typography variant="h6" color="inherit">
        Footer
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);