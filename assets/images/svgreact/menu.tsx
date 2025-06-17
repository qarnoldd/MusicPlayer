import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Menu(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.75 5.75h14.5M4.75 18.25h14.5M4.75 12h14.5"
      />
    </Svg>
  );
}

export default Menu;
