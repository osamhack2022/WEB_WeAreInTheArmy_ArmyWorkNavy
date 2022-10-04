import React, { useState } from 'react';
import FlexContainer from '../../../UI/FlexContantainer';
import Input from '../../../UI/Input';
import Text from '../../../UI/Text';
import EssentialMark from './EssentialMark';

interface DefaultInformationInputProps {
  label: string;
  dispatch: any;
  placeholder: string;
  isEssential?: boolean;
}

export default function DefaultInformationInput({
  label,
  dispatch,
  placeholder,
  isEssential,
}: DefaultInformationInputProps) {
  return (
    <FlexContainer className="w-full justify-evenly items-center">
      <Text size="text-xl" className="w-1/5 font-center font-semibold">
        {label}
        {isEssential && <EssentialMark />}
      </Text>
      <Input
        type="text"
        className="w-3/4"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(event.target.value)
        }
        placeholder={placeholder}
      />
    </FlexContainer>
  );
}
