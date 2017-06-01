import React from 'react';
import '../styles/registration-page.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Registration = () => {
  return (
    <Paper className="container registration-page" zDepth={3}>
      <h1>Создание акаунта</h1>
      <TextField floatingLabelText="Nickname" />
      <RaisedButton label="Primary" primary={true} style={style} />
    </Paper>
  );
};

export default Registration;
