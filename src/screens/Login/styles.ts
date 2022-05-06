import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

  justify-content: space-between;
`;

export const Header = styled(ImageBackground)`
  width: 100%;
  height: ${RFPercentage(40)}px;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(143)}px;
  height: ${RFValue(143)}px;
`;

export const Form = styled.View`
  padding: 0 36px;
`;

export const Fields = styled.View`
  margin-bottom: ${RFValue(45)}px;
`;

export const RegisterLink = styled.Text`
  color: #FFFFFF;

  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-decoration: underline;

  align-self: center;

  margin-bottom: ${RFValue(30)}px;
`;