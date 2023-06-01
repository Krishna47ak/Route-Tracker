import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BellSvg = (props) => (
  <Svg width={20} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M13 17v.75a3 3 0 1 1-6 0V17m11.047-1.527C16.843 14 15.994 13.25 15.994 9.188c0-3.72-1.9-5.044-3.463-5.688a.835.835 0 0 1-.466-.495C11.79 2.072 11.022 1.25 10 1.25s-1.791.823-2.063 1.756a.827.827 0 0 1-.466.494c-1.565.645-3.463 1.965-3.463 5.688-.002 4.062-.852 4.812-2.056 6.285-.499.61-.062 1.527.81 1.527h14.48c.867 0 1.301-.92.805-1.527Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BellSvg
