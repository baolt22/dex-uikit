import React from "react";
import styled from "styled-components";

const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
`;

const Spinner: React.FC<any> = ({ size = 300, component }) => {
  return (
    <Container size={size}>
      {component}
    </Container>
  );
};

export default Spinner;