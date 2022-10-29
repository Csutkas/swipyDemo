import * as React from 'react';
import {useCallback} from 'react';
import {Animated, Image, ImageSourcePropType, Text, View} from 'react-native';
import Choice from '../choice/choice';
import {ACTION_OFFSET} from '../utils/constants';
import {styles} from './styles';

const Card = ({
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}: {
  name: string;
  source: ImageSourcePropType;
  isFirst: boolean;
  swipe: any;
  tiltSign: any;
}) => {
  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), {rotate}],
  };

  const likeOpacity = swipe.x.interpolate({
    inputRange: [30, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -30],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            {opacity: likeOpacity},
          ]}>
          <Choice type={'like'} />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            {opacity: nopeOpacity},
          ]}>
          <Choice type={'nope'} />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}>
      <Image style={styles.image} source={source} />
      <Text style={styles.name}>{name}</Text>

      {isFirst && renderChoice()}
    </Animated.View>
  );
};

export default Card;
