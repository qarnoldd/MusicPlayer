import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Headphones(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.25 16v-3.75A7.25 7.25 0 0012 5v0a7.25 7.25 0 00-7.25 7.25V16"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.75 15.45a2.7 2.7 0 012.7-2.7v0a1.8 1.8 0 011.8 1.8v2.9a1.8 1.8 0 01-1.8 1.8v0a2.7 2.7 0 01-2.7-2.7v-1.1zM14.75 14.55a1.8 1.8 0 011.8-1.8v0a2.7 2.7 0 012.7 2.7v1.1a2.7 2.7 0 01-2.7 2.7v0a1.8 1.8 0 01-1.8-1.8v-2.9z"
      />
    </Svg>
  );
}

export default Headphones;
