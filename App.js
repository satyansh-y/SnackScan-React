import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./components/landing/signIn";
import SignUp from "./components/landing/signUp";
import Allergens from "./components/landing/Allergens";
import Calories from "./components/landing/calorieGoals";
import HeightWeight from "./components/landing/heightWeight";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Sign"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={({ title: "Login" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Allergens"
        component={Allergens}
        options={({ title: "Allergens" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
