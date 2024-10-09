import { StyleSheet } from 'react-native';
import { Text, View } from '@src/components/ui';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

export default function AboutPage() {
  return (
    <>
      <StatusBar style='light' />
      <Stack.Screen
        options={{
          title: 'Movies',
          headerLargeTitle: true,
        }}
      />
      <View
        variant='scroll'
        contentInsetAdjustmentBehavior='automatic'
        style={styles.pageContainer}
      >
        <Text>About</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
});
