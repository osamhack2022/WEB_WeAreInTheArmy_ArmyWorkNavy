import FlexContainer from 'src/components/UI/FlexContantainer';
import Text from 'src/components/UI/Text';
import EssentialMark from '../../Apply/atom/EssentialMark';

interface CombiInfoProps {
  label: string;
  isEssential?: boolean;
  children: React.ReactNode;
}
export default function CombiInfo({
  label,
  isEssential,
  children,
}: CombiInfoProps) {
  return (
    <FlexContainer className="w-full justify-evenly items-center mb-4">
      <Text size="text-xl" className="w-1/4 font-center font-semibold">
        {label}
        {isEssential && <EssentialMark />}
      </Text>
      {children}
    </FlexContainer>
  );
}
