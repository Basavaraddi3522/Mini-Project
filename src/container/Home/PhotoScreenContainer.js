import React, { Component } from 'react';
import PhotoScreenComponent from '../../components/Home/PhotoScreenComponent';

export default class PhotoScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <PhotoScreenComponent
        goBack={this.goBack}
      />
    );
  }
}
