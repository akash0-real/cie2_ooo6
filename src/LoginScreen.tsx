import { useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [firstName, setFirstName] = useState('');

  const handleLogin = () => {
    const trimmedName = firstName.trim();

    if (!trimmedName) {
      Alert.alert('Missing first name', 'Please enter your first name.');
      return;
    }

    Alert.alert('Welcome', `Hi ${trimmedName}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f4f7fb',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#102a43',
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334e68',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bcccdc',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#102a43',
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#0f62fe',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 13,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});