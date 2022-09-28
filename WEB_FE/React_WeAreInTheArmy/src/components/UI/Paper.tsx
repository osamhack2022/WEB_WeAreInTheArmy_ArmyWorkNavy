import classNames from 'classnames';
import FlexContainer from './FlexContantainer';

interface PaperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Paper({ children, ...props }: PaperProps) {
  const classStr = classNames(props.className);
  return (
    <FlexContainer
      className={classNames(
        'flex-col',
        'bg-paper-main',
        'shadow-md',
        'shadow-slate-300',
        'items-center',
        classStr,
      )}
    >
      {children}
    </FlexContainer>
  );
}
