import { Grid, Paper, Button } from "@mui/material";
import { style } from "@mui/system";
import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";
import Buttons from "./landingComp/Button";
import UsernameInput from "./landingComp/UsernameInput";
import PasswordInput from "./landingComp/PasswordInput";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.onUserNamechange = this.onUserNamechange.bind(this);
    this.onPasswordchange = this.onPasswordchange.bind(this);
    this.save = this.save.bind(this);
  }
  onUserNamechange(e) {
    this.setState({ username: e.target.value });
  }
  onPasswordchange(e) {
    this.setState({ password: e.target.value });
  }
  async save() {
    console.log("working");
    const auth = getAuth();
    try {
      console.log("working");
      return signInWithEmailAndPassword(auth, this.state.Email, this.state.password)
        .then(() => {
          this.props.navigation.navigate("Allergens");
        });
    } catch (error) {
      console.warn("Failed to SignIn: ", error.message);
    }
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
            <Button onClick={this.save}> Sign In</Button>
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
