import { css } from '@emotion/react'

export const disabledStyle = css`
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  color: #ccc;
  cursor: not-allowed;
  &:hover {
    box-shadow: #00000029 0px 2px 2px 0px;
  }
`;

export const buttonBaseStyle = css`
  cursor: pointer;
  min-width: 160px;
  max-height: 48px;
  font-size: 16px;
  color: #333;
  box-shadow: #00000029 0px 2px 2px 0px;
  border-radius: 24px;
  border: none;
  padding: 15px;
  font-weight: 600;
  &:hover {
    box-shadow: #00000033 0 3px 8px 0;
  }
  text-transform: uppercase;
  :disabled {
    ${disabledStyle}
  }
`;

export const outlineStyle = css`
  border: 1px solid;
  border-color: #333;
  background-color: #fff;
  &:hover {
    background-color: #333;
    color: #fff;
  }
  :disabled {
    ${disabledStyle}
  }
`;

export const primaryStyle = css`
  background-color: #ffcc00;
`;