import React from "react";

interface IframeProps {
  src: string;
  width?: string;
  height?: string;
}

const Iframe: React.FC<IframeProps> = ({ src, width = "100%", height = "500px" }) => {
  return <iframe src={src} width={width} height={height} style={{ border: "none" }} />;
}

export default Iframe;