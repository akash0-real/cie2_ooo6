import { Pressable, StyleSheet, Text, View } from 'react-native';

type PreLoginScreenProps = {
  onGetStarted: () => void;
};

export default function PreLoginScreen({ onGetStarted }: PreLoginScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bubbleOne} />
      <View style={styles.bubbleTwo} />
      <View style={styles.bubbleThree} />

      <Text style={styles.brand}>argon</Text>

      <View style={styles.middleBlock}>
        <View style={styles.contentBlock}>
          <Text style={styles.headline}>Design{'\n'}system</Text>
          <Text style={styles.description}>
            Fully coded React Native component.
          </Text>
        </View>
      </View>

      <View style={styles.bottomBlock}>
        <Pressable style={styles.button} onPress={onGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081a2b',
    paddingHorizontal: 26,
    paddingTop: 34,
    paddingBottom: 34,
    overflow: 'hidden',
  },
  bubbleOne: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(126, 184, 245, 0.18)',
    top: -70,
    right: -40,
  },
  bubbleTwo: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(54, 126, 207, 0.2)',
    top: '44%',
    left: -70,
  },
  bubbleThree: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(190, 222, 255, 0.14)',
    bottom: 90,
    right: 22,
  },
  middleBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: -28,
  },
  contentBlock: {
    gap: 8,
    alignItems: 'flex-start',
  },
  bottomBlock: {
    marginTop: 10,
  },
  brand: {
    fontSize: 52,
    lineHeight: 56,
    fontWeight: '800',
    color: '#f7fbff',
    marginTop: '60%',
    textTransform: 'lowercase',
    letterSpacing: 0.8,
    textAlign: 'left',
  },
  headline: {
    fontSize: 54,
    lineHeight: 56,
    fontWeight: '700',
    color: '#b4d5f3',
    textTransform: 'none',
    textAlign: 'left',
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
    color: '#dbeaf8',
    maxWidth: 330,
    marginTop: 8,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#f7fbff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0b1f33',
  },
});
