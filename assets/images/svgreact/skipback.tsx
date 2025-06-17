import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SkipBack(props: SvgProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 12l8.5-6.25v12.5L9.75 12zM5.75 5.75v12.5"
      />
    </Svg>
  );
}

export default SkipBack;
