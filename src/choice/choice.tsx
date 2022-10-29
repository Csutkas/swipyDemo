import * as React from 'react';
import {memo} from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../utils/constants';
import {styles} from './styles';

const Choice = memo(({type}: {type: string}) => {
  const color = COLORS[type as 'like' | 'nope'];
  return (
    <View style={[styles.container, {borderColor: color}]}>
      <Text style={[styles.text, {color}]}>{type}</Text>
    </View>
  );
});

export default Choice;
