import classNames from 'classnames';
import React from 'react';

export default function TextArea({
  ...props
}: React.HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={classNames(
        props.className,
        'w-full',
        'px-3',
        'py-1.5',
        'text-base',
        'font-normal',
        'text-gray-700',
        'bg-white',
        'bg-clip-padding',
        'border',
        'border-solid',
        'border-gray-300',
        'rounded',
        'transition',
        'ease-in-out',
        'm-0',
        'focus:text-gray-700',
        'focus:bg-white',
        'focus:border-blue-600',
        'focus:outline-none',
      )}
      id="exampleFormControlTextarea1"
      rows={3}
      placeholder="Your message"
    ></textarea>
  );
}
