import React from "react";

function Image({ src, alt, height, width }) {
  return <img src={src} alt={alt} height={height} width={width} style={{marginTop:"-5px"}}/>;
}

export default Image;
