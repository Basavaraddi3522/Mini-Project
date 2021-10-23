import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PaginationCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dots = [];

    for (let i = 0; i < this.props.dotsLength; i++) {
      dots.push({id: i.toString()});
    }

    return (
      <View style={styles.elementsInRow}>
        {dots.map((item, index) => {
          return (
            <View
              style={
                this.props.activeDot == index ? styles.activeDot : styles.dot
              }
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
    alignSelf: 'center',
    marginVertical: 12,
  },

  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 3,
  },
});
