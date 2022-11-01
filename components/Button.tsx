import React, { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import styles from '@/styles/Button.module.css';

interface Props {
  ariaLabel: string;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<Props> = ({
  ariaLabel,
  children,
  className,
  disabled,
  onClick,
  type,
}) => {
  className = clsx(styles.button, className);

  return (
    <button
      aria-label={ariaLabel}
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
