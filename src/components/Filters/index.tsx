import React from 'react';
import { Container, Options, Title } from './styles';
import { Filter } from '../Filter';

type FiltersProps = {
    onFilter: (status: string) => void;
}
export function Filters({onFilter}: FiltersProps) {
    return (
        <Container>
            <Title>Filtro pelo status da tarefa</Title>
            <Options>
                <Filter backgroundColor="#f87171" title="Pendentes" onPress={() => onFilter('pending')} />
                <Filter backgroundColor="#60a5fa" title="Concluídas" onPress={() => onFilter('completed')} />
            </Options>
        </Container>
    );
}
