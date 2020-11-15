import React from 'react';
import * as style from './style';

type Props = {
  primary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  children?: string;
  className?: string;
  id?: string;
  restAttributes?: React.HTMLAttributes<HTMLElement>;
  onClick: () => void;
};

const Button: React.FC<Props> = ({
  primary = true,
  outline = false,
  children,
  disabled = false,
  onClick,
  id,
  ...restAttributes
}) => {
  return (
    <button
      id={id}
      {...restAttributes}
      disabled={disabled}
      css={[
        style.buttonBaseStyle,
        primary && style.primaryStyle,
        outline && style.outlineStyle,
        disabled && style.disabledStyle,
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
