import {TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput).attrs<TextInputProps>({
  placeholderTextColor: '#a1a1aa',
})`
    width: 100%;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    font-size: 16px;
    color: #18181b;
    margin-bottom: 16px;
    border: 1px solid #e1e1e8;
`;
