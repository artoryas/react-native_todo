// Yerniyaz Dossanov 20MD0155

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { AddItem } from './src/AddItem';
import { Navbar } from './src/Navbar';
import { TodoItem } from './src/TodoItem';

export default function App() {
  const [ todos, setTodos ] = useState([
    {
      id: '1',
      title: 'Drink coffee',
      done: true,
      important: false
    },
    {
      id: '2',
      title: 'Make Awesome App',
      done: false,
      important: true
    },
    {
      id: '3',
      title: 'Have a lunch',
      done: false,
      important: false
    }
  ]);

  const addItem = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        important: false,
        done: false
      }
    ])
  }

  const removeItem = (id) => {
    setTodos(prev => prev.filter(item => item.id != id))
  }

  const toggleItem = (id) => {
    setTodos(prev => prev.map(item => {
      if (item.id == id) item.done = !item.done;
      return item
    })
    )
  }

  const highlightItem = (id) => {
    setTodos(prev => prev.map(item => {
      if (item.id == id) item.important = !item.important;
      return item;
    }))
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="ToDo App" />
      <View style={styles.container}>
        <AddItem onSubmit={addItem} />
        <Text style={{color: 'grey', paddingTop: 10}}>Press on the task to mark it as done</Text>
        <Text style={{color: 'grey', paddingBottom: 10}}>Press longer to highlight the task</Text>
        <FlatList 
        contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={item => item.id} 
            data={todos} 
            renderItem={({item}) => <TodoItem item={item} 
                                  onRemoveItem={removeItem} 
                                  onToggleItem={toggleItem}
                                  onHighlightItem={highlightItem}
                                  />} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10
  }
});
