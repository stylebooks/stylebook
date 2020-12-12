import React, { useState } from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 40px;
`;

const Base = styled.div`
  display: flex;

  padding: 4px;
  width: 34px;

  border-radius: 10px;
  background-color: #525252;

  cursor: pointer;
`;

const LightSwitch = styled.div`
  ${({ lightsOn }) => lightsOn && `transform: translate(14px);`}

  height: 12px;
  width: 12px;

  border-radius: 50%;
  background-color: #adb0b1;

  transition: all 0.2s ease-out;

  &:before {
    display: block;
    transform: ${({ lightsOn }) =>
      lightsOn ? 'translate(-4px, -2px)' : 'translate(3px, 3px)'};
    content: '';

    height: ${({ lightsOn }) => (lightsOn ? '12px' : '6px')};
    width: ${({ lightsOn }) => (lightsOn ? '12px' : '6px')};

    border-radius: 50%;
    background-color: ${({ lightsOn }) => (lightsOn ? '#525252' : '#fff')};

    transition: all 0.2s ease-out;
  }
`;

const Switch = () => {
  const [lightsOn, toggleOn] = useState(false);

  return (
    <Wrapper>
      <Base onClick={() => toggleOn(!lightsOn)}>
        <LightSwitch lightsOn={lightsOn} />
      </Base>
    </Wrapper>
  );
};

export default Switch;
