import theme from '../commons/theme';
import * as React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: '500',
  },
  defaultContainerStyle: {},
});

type TextColorKey = keyof typeof theme.colors;
type TextTypeKey = keyof typeof theme.fonts;
export type RPTextProps = {
  type?: TextTypeKey;
  color?: TextColorKey;
  isCenter?: boolean;
  style?: StyleProp<TextStyle>;
  isBold?: boolean;
} & TextProps;

const StyledText: React.FC<RPTextProps> = ({...props}) => {
  const textKey = props.type ?? 'BODY_1_EXTRABOLD';

  // 구체적으로 style이 적용되는 부분입니다.
  const textStyle = React.useMemo(() => {
    return theme.fonts?.[textKey] || theme.fonts.BODY_1_EXTRABOLD;
  }, [textKey]);

  // 구체적으로 color가 적용되는 부분입니다
  const colorKey = props.color ?? 'BasicBlack';
  const colorStyle = React.useMemo(
    () => ({
      color: theme.colors?.[colorKey],
    }),
    [colorKey],
  );

  return (
    <Text
      {...props}
      style={[
        styles.defaultContainerStyle,
        textStyle,
        colorStyle,
        props.style,
        props.isCenter && styles.center,
        props.isBold && styles.bold,
      ]}>
      {props.children}
    </Text>
  );
};

export default StyledText;
