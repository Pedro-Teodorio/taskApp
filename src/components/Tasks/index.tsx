import React, { useCallback, useState } from 'react';
import { Container, Counter, Header, Title } from './styles';
import { Filters } from '../Filters';
import { Task, TaskProps } from '../Task';
import { Alert, FlatList } from 'react-native';
import { Load } from '../Load';
import { getRealm } from '../../database/realm';
import { useFocusEffect } from '@react-navigation/native';


export function Tasks() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('pending');
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    async function fetchTasks() {
        setIsLoading(true);
        const realm = await getRealm();
        try {

            const response = realm.objects<TaskProps[]>('Task').filtered(`status = '${status}'`).sorted('createdAt').toJSON();
            setTasks(response as TaskProps[]);

        } catch {
            Alert.alert('Tarefas', 'Erro ao carregar tarefas');
        } finally {
            setIsLoading(false);
            realm.close();
        }
    }

    async function TaskUpdate(id: string) {
        const realm = await getRealm();
        try {
            const taskSelected = realm.objects<TaskProps>('Task').filtered(`_id = '${id}'`)[0]

            realm.write(() => {
                taskSelected.status = taskSelected.status === 'pending' ? 'completed' : 'pending';
            })


            fetchTasks()
        } catch (erro) {
            console.log('Erro:', erro)
            Alert.alert('Tarefas', 'Erro ao atualizar tarefa');
        }
    }

    function handleTaskUpdate(id: string) {
        Alert.alert(
            'Tarefa',
            'Tarefa concluida?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => TaskUpdate(id)
                }
            ]
        )
    }

    useFocusEffect(useCallback(() => {
        fetchTasks();
    }, [status]));
    return (
        <Container>
            <Filters onFilter={setStatus} />
            <Header>
                <Title>Tarefas {status === 'pending' ? 'pendentes' : 'concluídas'}</Title>
                <Counter>{tasks.length}</Counter>
            </Header>

            {
                isLoading ?
                    <Load />
                    : <FlatList
                        data={tasks}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => <Task task={item} onPress={() => handleTaskUpdate(item._id)} />}
                        contentContainerStyle={{ paddingBottom: 32 }}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    />
            }
        </Container>
    );
}
