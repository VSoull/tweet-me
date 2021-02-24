import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screens/settings/SettingsScreen';
import LogoTitle from '../components/Logo/Logo';

import { SettingsParams } from './types';
import colors from '../theme/colors';

const SettingsStack = createStackNavigator<SettingsParams>();

const SettingsTabStack: React.FC = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center',
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsTabStack;
