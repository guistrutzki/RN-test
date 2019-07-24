import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
