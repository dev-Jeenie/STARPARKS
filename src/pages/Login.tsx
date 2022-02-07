import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import assets from '../../assets';
import theme from '../commons/theme';
import FooterBtn from '../components/FooterBtn';
import LineInput from '../components/LineInput';
import StyledText from '../components/StyledText';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <StyledText type="H_4_EXTRABOLD">로그인</StyledText>
        <Image style={styles.logo} source={assets.logo_starbucks} />
        <View style={styles.textWrapper}>
          <StyledText type="H_5_EXTRABOLD">안녕하세요.</StyledText>
          <StyledText
            type="H_5_EXTRABOLD"
            style={theme.styles.globalMarginBottom10}>
            스타박스입니다.
          </StyledText>
          <StyledText type="BODY_1_REGULAR">
            회원 서비스 이용을 위해 로그인 해주세요.
          </StyledText>
        </View>
        <View style={{marginTop: 50}}>
          <View style={styles.inputWrapper}>
            <LineInput
              placeholder="아이디"
              style={theme.styles.globalMarginBottom}
            />
            <LineInput placeholder="비밀번호" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => {}}>
              <StyledText type="BODY_2_REGULAR" color="grayScale800">
                아이디 찾기
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <StyledText type="BODY_2_REGULAR" color="grayScale800">
                비밀번호 찾기
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <StyledText type="BODY_2_REGULAR" color="grayScale800">
                회원가입
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[theme.styles.globalMarginHorizontal, {marginBottom: 30}]}>
        <FooterBtn text="로그인하기" />
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.styles.globalPaddingTop.paddingTop,
    paddingHorizontal: theme.styles.globalPaddingHorizontal.paddingHorizontal,
    backgroundColor: theme.colors.defaultBackground,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 70,
    marginBottom: 20,
  },
  textWrapper: {
    marginTop: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
});
