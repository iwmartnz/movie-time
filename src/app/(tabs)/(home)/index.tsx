import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text } from '@src/components/ui';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

export default function HomePage() {
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
        <Text>Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
});
