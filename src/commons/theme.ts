import {StyleSheet} from 'react-native';

const colors = {
  /** 정식 컬러 1번, primaryMain: 'rgb(122 35 223)', */
  primaryMain: '#7a23df',
  /** 정식 컬러 2번, BasicBlack: 'rgb(0 0 0)', */
  BasicBlack: '#000000',
  /** 정식 컬러 3번, BasicBlack: 'rgb(111 111 111)', */
  grayScale700: '#6f6f6f',
  /** 정식 컬러 4번, BasicBlack: 'rgb(142, 142, 142)', */
  grayScale600: '#8e8e8e',
  /** 정식 컬러 5번, GRAYSCALE_500: "rgb(174, 173, 176)", */
  grayScale500: '#aeadb0',
  /** 정식 컬러 6번, GRAYSCALE_400: "rgb(198, 196, 200)", */
  grayScale400: '#c6c4c8',
  /** 정식 컬러 7번, GRAYSCALE_900: "rgb(45, 43, 47)" */
  grayScale900: '#2d2b2f',
  /** 정식 컬러 8번, BASIC_SUBBLACK: "rgb(16, 15, 16)" */
  basicSubBasicBlack: '#100f10',
  /** 정식 컬러 9번, GRAYSCALE_800: "rgb(78, 77, 80)" */
  grayScale800: '#4e4d50',
  /** 정식 컬러 10번, GRAYSCALE_1000: "rgb(22, 21, 23)" */
  grayScale1000: '#161517',
  /** 정식 컬러 11번, GRAYSCALE_300: "rgb(220, 217, 222)", */
  grayScale300: '#dcd9de',
  /** 정식 컬러 12번, GRAYSCALE_200: "rgb(239, 237, 240)", */
  grayScale200: '#efedf0',
  /** 정식 컬러 13번, GRAYSCALE_100: "rgb(249, 248, 250)", */
  grayScale100: '#f9f8fa',

  /** 메인 컬러 1번 rgb(0,128,0) */
  MAIN_PRIMARY: '#008000',

  /** defaultBackground: 'rgb(255 255 255)', */
  defaultBackground: '#ffffff',
} as const;

const fonts = StyleSheet.create({
  /** 일반 기준 텍스트, 제플린참조 */
  // DISPLAY_BLACK: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 64,
  //   fontWeight: '900',
  //   fontStyle: 'normal',
  //   lineHeight: 82,
  //   letterSpacing: 0,
  // } as const,
  // H_1_EXTRABOLD: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 56,
  //   fontWeight: '800',
  //   fontStyle: 'normal',
  //   lineHeight: 68,
  //   letterSpacing: 0,
  // } as const,
  // H_1_SEMIBOLD: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 56,
  //   fontWeight: '600',
  //   fontStyle: 'normal',
  //   lineHeight: 68,
  //   letterSpacing: 0,
  // } as const,
  // H_2_EXTRABOLD: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 48,
  //   fontWeight: '800',
  //   fontStyle: 'normal',
  //   lineHeight: 60,
  //   letterSpacing: 0,
  // } as const,
  // H_2_SEMIBOLD: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 48,
  //   fontWeight: '600',
  //   fontStyle: 'normal',
  //   lineHeight: 60,
  //   letterSpacing: 0,
  // } as const,
  // H_2_REGULAR: {
  //   // fontFamily: 'Pretendard',
  //   fontSize: 48,
  //   fontWeight: 'normal',
  //   fontStyle: 'normal',
  //   lineHeight: 60,
  //   letterSpacing: 0,
  // } as const,
  H_3_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 40,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 52,
    letterSpacing: 0,
  } as const,
  H_3_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 40,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 52,
    letterSpacing: 0,
  } as const,
  H_3_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 40,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 52,
    letterSpacing: 0,
  } as const,
  H_4_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 32,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 42,
    letterSpacing: 0,
  } as const,
  H_4_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 32,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 42,
    letterSpacing: 0,
  } as const,
  H_4_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 32,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 0,
  } as const,
  H_5_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 28,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 38,
    letterSpacing: 0,
  } as const,
  H_5_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 28,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 36,
    letterSpacing: 0,
  } as const,
  H_5_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 28,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 36,
    letterSpacing: 0,
  } as const,
  H_6_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 34,
    letterSpacing: 0,
  } as const,
  H_6_MEDIUM: {
    // fontFamily: 'NotoSansKR',
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
  } as const,
  H_6_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 32,
    letterSpacing: 0,
  } as const,
  SUBTITLE_1_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 20,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 28,
    letterSpacing: 0,
  } as const,
  SUBTITLE_1_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 28,
    letterSpacing: 0,
  } as const,
  SUBTITLE_1_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 28,
    letterSpacing: 0,
  } as const,
  BODY_1_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
  } as const,
  BODY_1_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
  } as const,
  BODY_1_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
  } as const,
  BODY_2_EXTRABOLD: {
    // fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
  } as const,
  BODY_2_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
  } as const,
  BODY_2_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
  } as const,
  BODY_3_MEDIUM: {
    // fontFamily: 'Pretendard',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
  } as const,
  BODY_3_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
  } as const,
  BODY_4_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
  } as const,
  BODY_5_REGULAR: {
    // fontFamily: 'Pretendard',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
  } as const,
});

const styles = StyleSheet.create({
  globalMarginHorizontal: {
    marginHorizontal: 20,
  } as const,
  globalMarginVertical: {
    marginVertical: 20,
  } as const,
  globalMarginVertical15: {
    marginVertical: 15,
  } as const,
  globalPaddingHorizontal: {
    paddingHorizontal: 20,
  } as const,
  globalPaddingVertical: {
    paddingVertical: 20,
  } as const,
  globalMarginLeft: {
    marginLeft: 20,
  } as const,
  globalMarginLeft15: {
    marginLeft: 15,
  } as const,
  globalMarginLeft10: {
    marginLeft: 10,
  } as const,
  globalMarginRight: {
    marginRight: 20,
  } as const,
  globalMarginRight15: {
    marginRight: 15,
  } as const,
  globalMarginRight10: {
    marginRight: 10,
  } as const,
  globalMarginBottom: {
    marginBottom: 20,
  } as const,
  globalMarginBottom15: {
    marginBottom: 15,
  } as const,
  globalMarginBottom10: {
    marginBottom: 10,
  } as const,
  globalPaddingLeft: {
    paddingLeft: 20,
  } as const,
  globalPaddingLeft15: {
    paddingLeft: 15,
  } as const,
  globalPaddingLeft10: {
    paddingLeft: 10,
  } as const,
  globalPaddingRight: {
    paddingRight: 20,
  } as const,
  globalPaddingRight15: {
    paddingRight: 15,
  } as const,
  globalPaddingRight10: {
    marginRight: 10,
  } as const,
  globalPaddingTop: {
    paddingTop: 20,
  } as const,
  globalPaddingTop15: {
    paddingTop: 15,
  } as const,
  globalPaddingTop10: {
    paddingTop: 10,
  } as const,
});

const theme = {
  colors,
  fonts,
  styles,
} as const;

export default theme;
