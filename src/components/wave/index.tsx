import React from "react";
interface IProps {
  color?: string,
  bgColor?: string
}

const Wave: React.FC<IProps> = (props) => {
  const { color , bgColor} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        marginTop: -300,
        backgroundColor: `#${bgColor ? bgColor : "f7f7f7"}`,
        marginBottom:-10,
        borderColor:"red"
      }}
    >
      <path
        fill={`#${color ? color : "000"}`}
        fill-opacity="1"
        d="M0,256L120,261.3C240,267,480,277,720,245.3C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
  );
};

export default Wave;