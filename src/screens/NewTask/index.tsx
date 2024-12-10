import React, { useState } from 'react';
import { Container, Form, Header, HeaderTextContainer, Title } from './styles';
import { IconButton } from '../../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { getRealm } from '../../database/realm';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';


export function NewTask() {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    async function handleAddTask() {
        const realm = await getRealm();

        try {
            setIsLoading(true);

            realm.write(() => {
                const created = realm.create('Task', {
                    _id: uuid.v4(),
                    title: title,
                    status: 'pending',
                    createdAt: new Date(),
                });
                console.log('CADASTRADO ======>', created);
            });
            handleBack();
        }
        catch {
            Alert.alert('Erro', 'Não foi possível adicionar a tarefa.');
        }
        finally {
            realm.close();
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <IconButton iconName="ArrowLeft" onPress={handleBack} />
                <HeaderTextContainer>
                    <Title>Adicionar tarefa</Title>
                </HeaderTextContainer>
            </Header>

            <Form>
                <Input
                    placeholder="Digite o titulo da sua tarefa."
                    onChangeText={(text) => setTitle(text)}
                />
            </Form>

            <Button
                title="Adicionar uma nova tarefa"
                isLoading={isLoading}
                onPress={handleAddTask}
            />
        </Container>
    );
}
