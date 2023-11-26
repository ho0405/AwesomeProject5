// HomeScreen.jsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';


function HomeScreen({ navigation, route }) {
  const { tasks, addTask, newTask, setNewTask, handleAddTask } = route.params;


  return (
    <View>
      <Text>Home Screen</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default HomeScreen;