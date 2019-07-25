import React, { Component } from "react";
import { Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { styles, Container, Logo, LogoText, Button } from "./styles";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialColor: "#FF0000",
      finalColor: "#000FFF",
      lastChar: null,
      secondToLastChar: null
    };

    this.changeColor = this.changeColor.bind(this);
    this.getTimestamp = this.getTimestamp.bind(this);
  }

  getTimestamp() {
    const timestamp = Date.now().toString();
    const lastChar = `num${timestamp.slice(-1)}`;
    const secondToLastChar = `num${timestamp.slice(-2, -1)}`;

    this.setState({ lastChar, secondToLastChar });
  }

  async changeColor() {
    await this.getTimestamp();
    const { lastChar, secondToLastChar } = {
      lastChar: this.state.lastChar,
      secondToLastChar: this.state.secondToLastChar
    };

    const listOfColours = {
      num0: "#FFFFFF", // White
      num1: "#000000", // Black
      num2: "#000FFF", // Blue
      num3: "#008000", // Green
      num4: "#FF00FF", // Pink
      num5: "#FF0000", // Red
      num6: "#800080", // Purple
      num7: "#FFFF00", // Yellow
      num8: "#808080", // Gray
      num9: "#C8A2C8" // Lilac
    };

    this.setState({
      initialColor: listOfColours[lastChar],
      finalColor: listOfColours[secondToLastChar]
    });
  }

  render() {
    return (
      <LinearGradient
        colors={[this.state.initialColor, this.state.finalColor]}
        style={styles.container}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
      >
        <Container>
          <Logo>
            <LogoText>Go 4all</LogoText>
          </Logo>

          <Button onPress={() => this.changeColor()}>
            <Text style={styles.buttonText}>Trocar cores</Text>
          </Button>
        </Container>
      </LinearGradient>
    );
  }
}
