import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;

  background-color: #E9E9E9;
  border-radius: 10px;

  color: #000;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  padding: 15px;
  margin-bottom: 24px;
`;