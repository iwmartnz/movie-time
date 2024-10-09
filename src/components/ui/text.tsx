import { Text as NativeText, StyleSheet, View } from 'react-native';
import { forwardRef } from 'react';

import { theme } from '@src/constants/theme';

type TextProps = React.ComponentPropsWithoutRef<typeof NativeText> & {
  variant?: 'default' | 'heading' | 'subHeading' | 'label';
};

const Text = forwardRef<View | null, TextProps>(
  ({ variant = 'default', style, ...res }, ref) => {
    return (
      <NativeText
        ref={ref}
        style={[
          { color: theme.text, ...styles.default },
          variant === 'heading' && styles.heading,
          variant === 'subHeading' && styles.subHeading,
          variant === 'label' && styles.label,
          style,
        ]}
        {...res}
      />
    );
  }
);

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Satoshi-Medium',
  },
  heading: {
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'Satoshi-Black',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Satoshi-Bold',
  },
});

export default Text;
