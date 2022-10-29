import * as React from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/constants';
import RoundedButton from '../utils/rounded-button/rounded-button';
import {styles} from './styles';

const Footer = ({handleChoice}: {handleChoice: any}) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        name="times"
        size={40}
        color={COLORS.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundedButton
        name="heart"
        size={36}
        color={COLORS.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
};

export default Footer;
