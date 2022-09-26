import classNames from 'classnames';

interface FlexContainer {
  className?: string;
  children: React.ReactNode;
}
export default function FlexContainer({ className, children }: FlexContainer) {
  return <div className={classNames('flex', className)}>{children}</div>;
}
