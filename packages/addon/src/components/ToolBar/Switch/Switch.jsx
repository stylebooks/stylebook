import React from 'react';
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
  ${({ dark }) => dark && `transform: translate(14px);`}

  height: 12px;
  width: 12px;

  border-radius: 50%;
  background-color: #adb0b1;

  transition: all 0.2s ease-out;

  &:before {
    display: block;
    transform: ${({ dark }) =>
      dark ? 'translate(-4px, -2px)' : 'translate(3px, 3px)'};
    content: '';

    height: ${({ dark }) => (dark ? '12px' : '6px')};
    width: ${({ dark }) => (dark ? '12px' : '6px')};

    border-radius: 50%;
    background-color: ${({ dark }) => (dark ? '#525252' : '#fff')};

    transition: all 0.2s ease-out;
  }
`;

const Switch = ({ dark, onClick }) => (
  <Wrapper onClick={onClick}>
    <Base>
      <LightSwitch dark={dark} />
    </Base>
  </Wrapper>
);

export default Switch;
