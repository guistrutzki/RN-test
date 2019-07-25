import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: "#fff",
  }
});

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  color: #fff;
  font-size: 30;
  margin-bottom: 10%;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60;
  background-color: black;
  border-radius: 10;
`
