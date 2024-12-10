import React from 'react';
import { Container, FilterProps, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = FilterProps & TouchableOpacityProps & {
    title: string;
}


export function Filter({ backgroundColor, title, ...rest }: Props) {
    return (
        <Container backgroundColor={backgroundColor} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
