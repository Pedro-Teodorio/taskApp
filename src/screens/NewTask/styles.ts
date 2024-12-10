import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #f4f4f5;
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
export const HeaderTextContainer = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #18181b;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #a1a1aa;
`;

export const ButtonIcon = styled.TouchableOpacity`
  padding: 8px;
`;

export const Form = styled.View`
  flex: 1;
`;
