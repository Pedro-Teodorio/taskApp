
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Load, Title } from './styles';


type Props = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <Container disabled={isLoading} {...rest}>
            {
                isLoading ? <Load /> : <Title>{title}</Title>
            }
        </Container>
    );
}
