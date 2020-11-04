import React from 'react';
import {StyleSheet, TextStyle, FlexStyle, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '../text/Text';
import {appColors} from '../Theme/colors';
import {AppIndicator} from '../indicator/Indeicator';
import {styles as cStyles} from '../styles/styles';

interface Props {
  title: string;
  processing?: boolean;
  style?: FlexStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export const AppButton = (props: Props) => {
  const {style, textStyle, title, onPress, processing} = props;

  return (
    <RectButton
      onPress={processing ? () => {} : onPress}
      style={[styles.container, style]}>
      <View
        style={{
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.primary,
          flex: 1,
          alignSelf: 'stretch',
          padding: 5,
        }}>
        {processing ? (
          <AppIndicator color="white" />
        ) : (
          <AppText style={{...styles.text, ...textStyle}}>{title}</AppText>
        )}
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...cStyles.shadow,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
