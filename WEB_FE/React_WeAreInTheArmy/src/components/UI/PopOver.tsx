import React, { useState } from 'react';
import Button from './Button';
import FlexContainer from './FlexContantainer';

interface PopOverProps {
  title: string;
  children: React.ReactNode;
}

export default function PopOver({ title, children }: PopOverProps) {
  const [isOver, setIsOver] = useState<boolean>(false);
  return (
    <div>
      <Button size="sm" onMouseOver={() => setIsOver(true)}>
        {title}
      </Button>
      <FlexContainer>{children}</FlexContainer>
    </div>
  );
}
