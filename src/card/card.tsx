import * as React from 'react';
import {useCallback} from 'react';
import {Animated, Image, ImageSourcePropType, Text, View} from 'react-native';
import Choice from '../choice/choice';
import {styles} from './styles';

const Card = ({
  name,
  source,
  isFirst,
  swipe,
  ...rest
}: {
  name: string;
  source: ImageSourcePropType;
  isFirst: boolean;
  swipe: any;
}) => {
  const renderChoice = useCallback(() => {
    return (
      <>
        <View style={[styles.choiceContainer, styles.likeContainer]}>
          <Choice type={'like'} />
        </View>
        <View style={[styles.choiceContainer, styles.nopeContainer]}>
          <Choice type={'nope'} />
        </View>
      </>
    );
  }, []);

  const animatedCardStyle = {transform: [...swipe.getTranslateTransform()]};

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
