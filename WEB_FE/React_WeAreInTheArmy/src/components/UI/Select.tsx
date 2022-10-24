import classNames from 'classnames';
import { HasChild } from '../../type';

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {}

export default function Select({ children, ...props }: HasChild & SelectProps) {
  return (
    <select
      {...props}
      className={classNames(
        props.className,
        'px-3',
        'h-[50px]',
        'py-1.5',
        'text-gray-700',
        'bg-white',
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
    >
      {children}
    </select>
  );
}
