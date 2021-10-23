import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class RatingsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stars = [];

    for (let i = 0; i < this.props.numStars; i++) {
      stars.push({id: i.toString()});
    }

    return (
      <View style={{...styles.elementsInRow, ...this.props.style}}>
        {stars.map((item, index) => {
          return (
            <FontAwesome
              name="star"
              size={14}
              color="#10A410"
              style={{marginRight: 3}}
              key={index}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  elementsInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon16: {
    width: 16,
    height: 16,
  },
});
