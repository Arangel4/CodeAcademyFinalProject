import React, { Component } from 'react';
import { AppBar, Button, Toolbar, Typography, Container, Box, Link, Grid, CssBaseline, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          CareAmarillo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <p>Hello from UserDashboard</p>
    )
  }
  

}
export default UserDashboard;
