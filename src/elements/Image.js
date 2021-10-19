import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { _onClick, ...rest } = props;
  return (
    <AspectOutter>
      <AspectInner {...rest} onClick={_onClick}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  src: "",
  size: "40px",
  cursor: "",
  margin: false,
  _onclick: () => {},
};

const AspectOutter = styled.div`
  width: 100%;
  object-fit: cover;
`;

const AspectInner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: center;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  /* margin: auto; */
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

export default Image;
