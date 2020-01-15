import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #FF0000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: 'default';
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  <Wrapper
  />
);




export default Marker;