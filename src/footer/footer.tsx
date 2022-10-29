import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/constants';
import RoundedButton from '../utils/rounded-button/rounded-button';
import {styles} from './styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <RoundedButton name="times" size={40} color={COLORS.nope} />
      <RoundedButton name="heart" size={36} color={COLORS.like} />
    </View>
  );
};

export default Footer;
