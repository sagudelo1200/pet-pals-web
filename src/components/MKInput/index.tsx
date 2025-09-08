/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { forwardRef, Ref } from 'react';
import MKInputRoot from 'components/MKInput/MKInputRoot';

export interface MKInputProps {
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  type?: string;
  label?: string;
  fullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const MKInput = forwardRef<HTMLInputElement, MKInputProps>(
  ({ error = false, success = false, disabled = false, ...rest }, ref: Ref<HTMLInputElement>) => (
    <MKInputRoot {...rest} ref={ref} />
  )
);

export default MKInput;
