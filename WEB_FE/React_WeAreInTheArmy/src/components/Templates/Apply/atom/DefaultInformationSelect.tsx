import FlexContainer from '../../../UI/FlexContantainer';
import Text from '../../../UI/Text';
import EssentialMark from './EssentialMark';

interface DefaultInformationSelectProps {
  label: string;
  isEssential: boolean;
  dispatch: any;
  options: Options[];
}

type Options = {
  label: string;
  value: string;
};

export default function DefaultInformationSelect({
  label,
  isEssential,
  dispatch,
  options,
}: DefaultInformationSelectProps) {
  return (
    <FlexContainer className="w-full justify-evenly items-center">
      <Text size="text-xl" className="w-1/5 font-center font-semibold">
        {label}
        {isEssential && <EssentialMark />}
      </Text>
    </FlexContainer>
  );
}
