import Text from './Text';

interface SemiHeaderProps {
  title: string;
  subTitle: string;
}
export default function SemiHeader({ title, subTitle }: SemiHeaderProps) {
  return (
    <div className="w-full p-5 font-bold text-center">
      <Text size="text-4xl">{title}</Text>
      <Text size="text-base" className="mt-5 text-orrange">
        {subTitle}
      </Text>
    </div>
  );
}
