import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Back(props: SvgProps & { color?: string }) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="2 2 20 20" {...props}>
      <Path
        stroke={props.color ?? "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M13.25 8.75L9.75 12l3.5 3.25"
      />
    </Svg>
  );
}

export default Back;
