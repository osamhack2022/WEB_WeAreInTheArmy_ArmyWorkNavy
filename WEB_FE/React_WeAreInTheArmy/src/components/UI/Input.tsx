import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}
export default function Input({ type, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className={classNames(
        props.className,
        'border-[3px] p-2 rounded-md focus:border-indigo-700 focus:outline-0',
      )}
    />
  );
}
