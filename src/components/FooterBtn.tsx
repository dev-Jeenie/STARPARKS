import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import theme from '../commons/theme';
import StyledText from './StyledText';

type footerBtnProps = {
  text?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const FooterBtn = ({text, buttonStyle, onPress}: footerBtnProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <StyledText color="defaultBackground">{text}</StyledText>
    </TouchableOpacity>
  );
};

export default FooterBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.MAIN_PRIMARY,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 30,
  },
});
