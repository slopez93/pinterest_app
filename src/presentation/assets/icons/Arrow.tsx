import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color: string;
  width: number;
  height: number;
};

function Arrow({color, width, height}: Props) {
  return (
    <Svg width={width} height={height} fill={color} viewBox="0 0 8 12">
      <Path d="M1.41 0L0 1.41 4.58 6 0 10.59 1.41 12l6-6-6-6z" />
    </Svg>
  );
}

Arrow.defaultProps = {
  color: '#242B36',
  width: 18,
  height: 22,
};

export default Arrow;
