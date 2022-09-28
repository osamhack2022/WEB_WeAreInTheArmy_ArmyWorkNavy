import classNames from 'classnames';

type TextSizeTypes =
  | 'text-sm'
  | 'text-base'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size: TextSizeTypes;
}

export default function Text({ size, children, ...props }: TextProps) {
  return <p className={classNames(size, props.className)}>{children}</p>;
}
