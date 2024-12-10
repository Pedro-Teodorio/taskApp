import React from 'react';
import { Container } from './styles';
import { Icon } from '../Icon';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    iconName: string;
}
export function IconButton({ iconName, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon name={iconName} size={24} color="#60a5fa" />
        </Container>
    );
}
