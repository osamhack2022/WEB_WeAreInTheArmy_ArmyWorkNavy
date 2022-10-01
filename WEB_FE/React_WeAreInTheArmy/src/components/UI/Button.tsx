import classNames from 'classnames';
import React from 'react';

type ButtonSize = 'sm' | 'base' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  children: React.ReactNode;
}

export default function Button({ size, children, ...props }: ButtonProps) {
  //className="bg-primary p-3 rounded-lg text-white mb-1"
  return (
    <button
      className={classNames(
        {
          'text-xs': size === 'sm',
          'text-base': size === 'base',
          'text-xl': size === 'lg',
        },
        'bg-orrange',
        'text-white',
        'mb-1',
        'rounded-lg',
        'p-3',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
