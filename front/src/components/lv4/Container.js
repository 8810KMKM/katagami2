import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { indigo, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: grey[50],
    color: grey[800],
    padding: '24px 40px 64px 40px'
  }
}));

export default function (props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {props.children}
    </Container>
  );
}
