import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleCreateAccount = () => {
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedName || !trimmedPassword) {
      Alert.alert('Missing details', 'Please fill email, name, and password.');
      return;
    }

    if (!agreed) {
      Alert.alert(
        'Agreement required',
        'Please accept the agreement checkbox before continuing.',
      );
      return;
    }

    Alert.alert('Account created', `Welcome, ${trimmedName}!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.title}>Create Account</Text>

          <View style={styles.socialRow}>
            <Pressable style={styles.socialButton}>
              <View style={styles.githubIcon}>
                <Text style={styles.githubIconText}>GH</Text>
              </View>
              <Text style={styles.socialText}>GitHub</Text>
            </Pressable>

            <Pressable style={styles.socialButton}>
              <Text style={styles.socialText}>Google</Text>
            </Pressable>
          </View>

          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholderTextColor="#d9e7ff"
          />

          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            autoCapitalize="words"
            autoCorrect={false}
            style={styles.input}
            placeholderTextColor="#d9e7ff"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholderTextColor="#d9e7ff"
          />

          <Pressable
            style={styles.agreementRow}
            onPress={() => setAgreed(prev => !prev)}>
            <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
              <Text style={styles.checkMark}>{agreed ? 'x' : ''}</Text>
            </View>
            <Text style={styles.agreementText}>I agree to the terms</Text>
          </Pressable>

          <Pressable style={styles.createButton} onPress={handleCreateAccount}>
            <Text style={styles.createButtonText}>Create Account</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b2d53',
    overflow: 'hidden',
  },
  glowOne: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(160, 200, 255, 0.25)',
    top: -40,
    left: -50,
  },
  glowTwo: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(78, 129, 207, 0.32)',
    bottom: -90,
    right: -70,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 18,
    paddingVertical: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#f8fbff',
    marginBottom: 20,
    textAlign: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  socialButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  githubIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  githubIconText: {
    color: '#f5f5f5',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  socialText: {
    color: '#f4f9ff',
    fontSize: 14,
    fontWeight: '700',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f0f6ff',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#f8fbff',
    marginBottom: 14,
  },
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  checkboxChecked: {
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  checkMark: {
    color: '#f8fbff',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16,
  },
  agreementText: {
    color: '#eaf3ff',
    fontSize: 14,
    flex: 1,
  },
  createButton: {
    backgroundColor: '#e9f3ff',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 13,
  },
  createButtonText: {
    color: '#19315b',
    fontSize: 16,
    fontWeight: '800',
  },
});
