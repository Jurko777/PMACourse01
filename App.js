
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  FlatList,
} from 'react-native';

import Item from './src/components/items';

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasklist] = useState([]);

  function handleAddTask() {
    if (text.trim() === '') return;

    setTasklist([...tasks, text.trim()]);
    setText('');
  }

  function handleInputText(text) {
    setText(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={handleInputText}
            style={styles.input}
            placeholder="Zadaj úlohu"
          />

          <Button title="ADD" onPress={handleAddTask} />
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <View style={styles.taskContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Zatiaľ nemáš žiadne úlohy.
              </Text>
            }
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6f6',
    paddingTop: 60,
  },

  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#90caf9',
    width: '100%',
  },

  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#cb0000',
    backgroundColor: '#ffffff',
  },

  divider: {
    height: 2,
    backgroundColor: '#000000',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },

  bottomSection: {
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  taskContainer: {
    backgroundColor: '#e8f5e9',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    flex: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#a5d6a7',
  },

  list: {
    width: '100%',
  },

  emptyText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
  },
});
