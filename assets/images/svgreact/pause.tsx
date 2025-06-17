import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Pause(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.25 6.75v10.5M8.75 6.75v10.5"
      />
    </Svg>
  );
}

export default Pause;
