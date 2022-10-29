import * as React from 'react';
import {useState, useRef} from 'react';
import {Animated, PanResponder, View} from 'react-native';
import Card from '../card/card';
import Footer from '../footer/footer';
import {pets as petsArray} from './data';
import {styles} from './styles';

const Main = () => {
  const [pets, setPets] = useState(petsArray);
  const swipe = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipe.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, gesture) => {
      Animated.spring(swipe, {
        toValue: {x: 0, y: 0},
        friction: 5,
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      {pets
        .map(({name, source}, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={name}
              name={name}
              source={source}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHandlers}
            />
          );
        })
        .reverse()}

      <Footer />
    </View>
  );
};

export default Main;
