import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { NewTask } from '../screens/NewTask';

export type RootStackParamList = {
    Home: undefined;
    NewTask: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="NewTask" component={NewTask} />
        </Navigator>
    );
}
