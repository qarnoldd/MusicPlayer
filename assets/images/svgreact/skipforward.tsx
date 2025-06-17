import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SkipForward(props: SvgProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.25 12l-8.5-6.25v12.5l8.5-6.25zM18.25 5.75v12.5"
      />
    </Svg>
  );
}

export default SkipForward;
