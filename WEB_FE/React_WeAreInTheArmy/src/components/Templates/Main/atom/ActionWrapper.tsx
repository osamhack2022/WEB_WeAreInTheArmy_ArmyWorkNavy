import { Children } from 'react';
import FlexContainer from '../../../UI/FlexContantainer';

interface ActionWrapperProps {
  src: string;
  messages: React.ReactNode;
}

export default function ActionWrapper({ src, messages }: ActionWrapperProps) {
  return (
    <FlexContainer className="flex-col items-center w-[200px] text-center font-semibold">
      <img src={src} className="mb-5" />
      {messages}
    </FlexContainer>
  );
}
