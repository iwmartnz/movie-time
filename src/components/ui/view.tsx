import { ScrollView, View as NativeView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@src/constants/theme';

type Props = {
  transparent?: boolean;
};
type ViewVariant = 'safeArea' | 'default' | 'scroll';

type ViewProps<T extends ViewVariant> = T extends 'safeArea'
  ? { variant?: 'safeArea' } & Props &
      React.ComponentPropsWithoutRef<typeof SafeAreaView>
  : T extends 'scroll'
  ? { variant?: 'scroll' } & Props &
      React.ComponentPropsWithoutRef<typeof ScrollView>
  : { variant?: 'default' } & Props &
      React.ComponentPropsWithoutRef<typeof NativeView>;

export default function View<T extends ViewVariant>({
  variant = 'default',
  transparent = false,
  style,
  ...props
}: ViewProps<T>) {
  const backgroundColor = transparent ? '#00000000' : theme.background;

  // Render different components based on the `type` prop
  switch (variant) {
    case 'default':
      return (
        <NativeView
          style={[{ backgroundColor }, style]}
          {...(props as React.ComponentPropsWithoutRef<typeof NativeView>)}
        />
      );
    case 'scroll':
      return (
        <ScrollView
          style={[{ backgroundColor }, style]}
          {...(props as React.ComponentPropsWithoutRef<typeof ScrollView>)}
        />
      );
    case 'safeArea':
      return (
        <SafeAreaView
          style={[{ backgroundColor }, styles.container, style]}
          {...(props as React.ComponentPropsWithoutRef<typeof SafeAreaView>)}
        />
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
