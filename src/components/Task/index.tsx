import React from 'react';
import { Container, Content, Footer, Header, Info, Label, Status, TaskStyleProps, Title } from './styles';
import { Icon } from '../Icon';
import { PressableProps } from 'react-native';


export type TaskProps =  TaskStyleProps & {
    _id: string;
    title: string;
    createdAt: Date;
};

type Props = PressableProps & {
    task: TaskProps;
}
export function Task({ task, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Status status={task.status} />
            <Content>
                <Header>
                    <Title>{task.title}</Title>
                    <Icon name={
                        task.status === 'pending' ? 'Hourglass' : 'CircleCheckBig'}
                        color={task.status === 'pending' ? '#f87171' : '#60a5fa'}
                        size={24}
                    />
                </Header>
                <Footer>
                    <Info>
                        <Icon name="AlarmClock" size={16} color="#6b7280" />
                        <Label>{
                            task.createdAt.toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                            })
                        }</Label>
                    </Info>
                </Footer>
            </Content>
        </Container>
    );
}
