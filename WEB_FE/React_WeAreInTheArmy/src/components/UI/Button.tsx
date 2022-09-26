import classNames from 'classnames';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  children: React.ReactNode;
}

export default function Button({ size, children, ...props }: ButtonProps) {
  return (
    <button
      className={classNames({
        'text-xs': size === 'sm',
        'text-xl': size === 'lg',
      })}
      {...props}
    >
      {children}
    </button>
  );
}
