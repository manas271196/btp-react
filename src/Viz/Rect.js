import React from 'react';
import {render} from 'react-dom';

class Rect extends React.Component {
  render () {
    const dimensions = this.props.dimensions;
    const { x, y, width, height } = this.props.dimensions;
    console.log(x, y, width, height);

    return (
      <rect x={x} y={y} width={width} height={height}></rect>
    );
  }
}

module.exports = Rect;