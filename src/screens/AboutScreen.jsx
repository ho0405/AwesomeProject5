// AboutScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ }) {
  return (
    <MainLayout>
      <View>
        <Text>About Screen</Text>
        {/* Add your app name, your name, and the current date */}
        <Text>My ToDo App</Text>
        <Text>Your Name</Text>
        <MainLayout>
          {/* Your screen content */}
        </MainLayout>
        <Text>{new Date().toLocaleDateString()}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

export default AboutScreen;