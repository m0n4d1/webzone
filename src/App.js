import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0091EA",
      light: "#D81B60"
    },
    secondary: {
      main: "#00BCD4",
      light: "#E53935"
    }
  }  
});

function SimpleAppBar(props) {

  return (
    <div className="TopBar">
      <AppBar position="static" theme="primary">
        <Toolbar>
          <Typography variant="h6" color="secondary">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleAppBar;