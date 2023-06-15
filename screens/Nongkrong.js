import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const NongkrongScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Ini nongkrong screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default NongkrongScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
