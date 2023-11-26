/**
 * My To Do List App
 *
 * @format
 */


import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

// import ToDoForm from './components/ToDoForm';
// import ToDoList from './components/ToDoList';



function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const addTask = (taskText: string) => {
    setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  const Stack = createStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{
            tasks: tasks,
            addTask: addTask,
            newTask: newTask,
            setNewTask: setNewTask,
            handleAddTask: handleAddTask,
          }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



// function App() {
//   // const [tasks, setTasks] = useState<string[]>([]);
//   const [tasks, setTasks] = useState([
//     'Do laundry',
//     'Go to gym',
//     'Walk dog'
//   ]);


//   const [newTask, setNewTask] = useState('');

//   const handleAddTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, newTask]);
//       setNewTask(''); 
//     }
//   };

//   const addTask = (taskText: string) => {
//     setTasks(prevTasks => [...prevTasks, taskText]);
//   };





//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <ToDoList tasks={tasks} />
//       </ScrollView>
//       <ToDoForm onAddTask={addTask} />
//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Add a new task..."
//           value={newTask}
//           onChangeText={(text) => setNewTask(text)}
//         />
//         <Button title="Add" onPress={handleAddTask} />
//       </View>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="About" component={AboutScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>

//   );
// }


//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Do laundry</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task]}>
//             <Text style={styles.taskText}>Go to gym</Text>
//           </View>
//         </Pressable>
//         <Pressable>
//           <View style={[styles.task, styles.completed]}>
//             <Text style={styles.taskText}>Walk dog</Text>
//           </View>
//         </Pressable>
//       </ScrollView>
//       <View style={styles.form}>
//       <TextInput
//           style={styles.input}
//           placeholder="Add a new task..."
//         />
//         <Button title="Add" />
//       </View>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;