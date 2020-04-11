/**
 * Copyright 2020 will.whitty.arbeit@gmail.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
 * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **/

import React from 'react';
import styled from 'styled-components';

import { path } from 'ramda';
import { compose, withProps, withState } from 'recompose';

import { Col } from 'components/flex';
import { withRenderIf, withPropsStripped } from 'components/generic-hoc';

const CloseButton = styled(props => (
  <span role="img" aria-label="Close button" {...props}>
    ✚
  </span>
))`
  color: black;
  user-select: none;
  cursor: pointer;
  user-select: none;
  font-size: 1.5em;
  background: none;
  transform: rotate(45deg);

  padding: 2px;
  padding-top: 5px;

  z-index: 199;

  /* Show the close button inside the modal */
  position: absolute;
  top: 10px;
  right: 20px;
`;

const ModalWrapper = styled(Col)`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #000;
  opacity: 0.5;

  z-index: 99;
`;

const ModalInternal = styled.div`
  z-index: 100;
  position: relative;
  border-radius: 8px;

  @media (max-width: 480px) {
    width: calc(100% - 80px);
  }
`;

function Modal({ className, children, modal }) {
  return (
    <ModalWrapper expand justifyContent="center" alignItems="center">
      <ModalBackground
        onClick={() => modal.clickOutsideToClose && modal.close()}
      />
      <ModalInternal className={className}>
        {modal.showClose && <CloseButton onClick={modal.close} />}
        {children}
      </ModalInternal>
    </ModalWrapper>
  );
}

export const withModal = ({
  named = 'modal',
  showClose = true,
  clickOutsideToClose = true,
  shouldModalStartOpen = false,
} = {}) =>
  compose(
    withState('isModalOpen', 'setIsModalOpen', shouldModalStartOpen),

    // Wrap our modal operations into one small prop
    // which can be passed around a lot more easily
    withProps(({ isModalOpen, setIsModalOpen }) => ({
      [named]: {
        showClose,
        isOpen: isModalOpen,
        clickOutsideToClose,
        open: () => setIsModalOpen(true),
        close: () => setIsModalOpen(false),
      },
    })),

    // We don't need these props any more
    // nicer to remove them so we don't clutter the child
    withPropsStripped('isModalOpen', 'setIsModalOpen'),
  );

export default withRenderIf(path(['modal', 'isOpen']))(Modal);
