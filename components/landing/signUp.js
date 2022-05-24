import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Name from "./landingComp/Name";
import Email from "./landingComp/Email";
import Number from "./landingComp/phoneNumber";
import Buttons from "./landingComp/Button";
import PasswordInput from "./landingComp/PasswordInput";
// import * as firebase from "firebase/app";
import { auth } from "../../firebase"
import { Grid, Paper, Avatar, Typography, Link, Button } from "@mui/material";
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import * as Realm from 'realm-web';
//const Realm = require('realm');
// const app = new Realm.App({id: "connect-1-aqfdf"});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      phoneNumber: "",
      password: "",
      rePassword: "",
      passwordMatch: true,
      passwordMatchError: "",
      isEmail: true,
      isEmailError: "",
      isPassword: true,
      isPasswordError: "",
    };
    this.onFirstNamechange = this.onFirstNamechange.bind(this);
    this.onLastNamechange = this.onLastNamechange.bind(this);
    this.onEmailchange = this.onEmailchange.bind(this);
    this.onphoneNumberchange = this.onphoneNumberchange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.save = this.save.bind(this);
  }

  onFirstNamechange(e) {
    this.setState({ FirstName: e.target.value });
    console.log(e.target.value);
  }

  onLastNamechange(e) {
    this.setState({ LastName: e.target.value });
    console.log(e.target.value);
  }
  onEmailchange(e) {
    this.setState({ Email: e.target.value });
    console.log(e.target.value);
  }

  onphoneNumberchange(e) {
    this.setState({ phoneNumber: e.target.value });
    console.log(e.target.value);
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    console.log(e.target.value);
  }
  passwordCheck(e) {
    this.setState({ rePassword: e.target.value }, () => {
      if (this.state.password == e.target.value) {
        this.setState({ passwordMatch: true, passwordMatchError: "" });
      } else {
        this.setState({
          passwordMatch: false,
          passwordMatchError: "Passwords Do Not Match",
        });
      }
    });
  }

  save() {
    console.log("work");
    const email = this.state.Email;
    const password = this.state.password;
    let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let passRegex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
    
    this.setState(
      {
        // isEmail: emailRegex.test(email),
        // isPassword: passRegex.test(password),
        isEmail: true,
        isPassword: true,
        passwordMatch:true


      },
      () => {
        if (
          this.state.isEmail === true &&
          this.state.isPassword === true &&
          this.state.passwordMatch == true
        ) {
          this.setState({
            isEmailError: "",
            isPasswordError: "",
          });
          try {
              auth
              .createUserWithEmailAndPassword(this.state.Email, this.state.password)
              .then(() => {
                this.props.navigation.navigate('Dashboard')
              
              })
              
            } catch (error) {
              console.warn('Failed to SignUp: ', error.message);
            }
        }
        if (this.state.isEmail === false) {
          console.log("working??");
          this.setState({
            isEmailError: "Email is Invalid",
          });
        } else if (this.state.isPassword === false) {
          this.setState({
            isEmailError: "",
            isPasswordError:
              "Password must be 8 characters, must have at least one letter and number",
          });
        }
      }
    );
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
      <Grid container>
        <Grid item sm={12} md={12} lg={12}>
          <Paper elevation={10} style={paperStyle}>
            <Grid container>
              <Grid item xs={12} align="center">
                <Text style={styles.title}>SnackScan</Text>
              </Grid>
              <Grid item sm={12} md={12} lg={12} align="center">
                {/* <Avatar style={avatarStyle}><LockOpenIcon/></Avatar> */}
                <h2>Sign Up</h2>
                <Name
                  onChange={this.onFirstNamechange}
                  label="First Name"
                  value={this.state.FirstName}
                  title="First Name"
                />
                <Name
                  onChange={this.onLastNamechange}
                  label="Last Name"
                  value={this.state.LastName}
                  title="Last Name"
                />
                <Email
                  onChange={this.onEmailchange}
                  value={this.state.Email}
                  title="Email "
                  helperText={this.state.isEmailError}
                  error={!this.state.isEmail}
                />
                <Number
                  onChange={this.onphoneNumberchange}
                  value={this.state.phoneNumber}
                  title="Phone Number"
                />
                <PasswordInput
                  onChange={this.onPasswordChange}
                  label="Password"
                  value={this.state.password}
                  error={!this.state.isPassword}
                  helperText={this.state.isPasswordError}
                  title="Password"
                />
                <PasswordInput
                  onChange={this.passwordCheck}
                  label="Re-enter Password"
                  value={this.state.rePassword}
                  error={!this.state.passwordMatch}
                  helperText={this.state.passwordMatchError}
                  title="Re-enter Password"
                />

                <Button onClick= {this.save}> Sign Up</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: "50px",
    color: "black",
  },
});
