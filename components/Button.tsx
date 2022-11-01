import React, { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import styles from '@/styles/Button.module.css';

interface Props {
  ariaLabel: string;
  className?: string;
  clickHandler?: MouseEventHandler;
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<Props> = ({
  ariaLabel,
  children,
  className,
  clickHandler,
  disabled,
  type,
}) => {
  className = clsx(styles.button, className);

  return (
    <button
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
