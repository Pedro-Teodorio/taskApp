import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background-color: #60a5fa;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Load = styled.ActivityIndicator.attrs({
  color: '#60a5fa',
  size: 'small',
})``;
