import * as React from 'react';
import {memo} from 'react';
import {useRef, useCallback} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

const RoundedButton = memo(
  ({
    name,
    size,
    color,
    onPress,
  }: {
    name: any;
    size: number;
    color: string;
    onPress: () => void;
  }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animatedScale = useCallback(
      newValue => {
        Animated.spring(scale, {
          toValue: newValue,
          friction: 4,
          useNativeDriver: true,
        }).start();
      },
      [scale],
    );

    return (
      <TouchableWithoutFeedback
        onPressIn={() => animatedScale(0.8)}
        delayPressIn={0}
        onPressOut={() => {
          animatedScale(1);
          onPress();
        }}
        delayPressOut={100}>
        <Animated.View style={[styles.container, {transform: [{scale}]}]}>
          <Icon name={name} size={size} color={color} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  },
);

export default RoundedButton;
