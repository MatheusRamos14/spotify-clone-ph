import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  align-items: center;

  padding: 12px;
`;

export const Title = styled.Text`
  color: #FFFFFF;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;