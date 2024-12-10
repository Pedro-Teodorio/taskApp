import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Tasks } from '../../components/Tasks';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



export function Home() {
    const navigation = useNavigation();

    function handleAddTask() {
        navigation.navigate('NewTask');
    }

    return (
        <Container>
            <Header title="Minhas tarefas" subTitle="Gerencie suas tarefas de forma eficiente." />
            <Tasks />
            <Button
                title="Adicionar tarefa"
                onPress={handleAddTask}
            />
        </Container>
    );
}
