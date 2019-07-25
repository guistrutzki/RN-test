import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.View`
  background-color: #4ca042;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  width: 160;
  height: 160;
  border-radius: 80;
  margin-bottom: 50px;
  border-width: 1;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #fff;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 1;
  shadow-radius: 80;
  elevation: 1;
`;

export const LogoText = styled.Text`
  color: #fff;
  font-size: 40;
`;

export const Button = styled.TouchableOpacity`
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60;
  background-color: black;
  border-radius: 10;
`;
