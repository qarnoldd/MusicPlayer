import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function DotsVertical(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="currentColor"
        d="M13 12a1 1 0 11-2 0 1 1 0 012 0zM13 8a1 1 0 11-2 0 1 1 0 012 0zM13 16a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </Svg>
  );
}

export default DotsVertical;
