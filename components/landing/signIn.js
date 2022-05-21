import { Grid, Paper } from "@mui/material";
import { style } from "@mui/system";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/landing/landingComp/Button";
import UsernameInput from "./components/landing/landingComp/UsernameInput";
import PasswordInput from "./components/landing/landingComp/PasswordInput";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.onUserNamechange = this.onUserNamechange.bind(this);
    this.onPasswordchange = this.onPasswordchange.bind(this);
    
  }
  onUserNamechange(e){
    this.setState({username: e.target.value});
  }
  onPasswordchange(e){
    this.setState({password: e.target.value});
  }



  render() {
    const paperStyle = {
      padding: 20,
      height: "50vh",
      width: "40vh",
      margin: "60px auto",
      background: "#EAF5F8",
    };
    return (
      <Paper elevation={3} style={paperStyle}>
        <Grid container spacing={12} alignItems="center" direction="column">
          <Grid item>
            <Text style={styles.title}>SnackScan</Text>
          </Grid>

          <Grid item>
            <Text style={styles.title}>Login</Text>
          </Grid>
          <Grid item>
            <Text>Username:</Text>
            <UsernameInput
              onChange={this.onUserNamechange}
              username={this.state.username}
            />
            <Text>Password:</Text>
            <PasswordInput
              onChange={this.onPasswordchange}
              password={this.state.password}
            />
            <Buttons name="Sign In" />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default SignIn;
const styles = StyleSheet.create({
  title: {
    fontSize: "50px",
    color: "black",
  },
});
