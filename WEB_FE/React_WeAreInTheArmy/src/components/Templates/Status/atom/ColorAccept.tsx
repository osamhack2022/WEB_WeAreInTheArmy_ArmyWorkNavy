import Text from 'src/components/UI/Text';
import { Accept } from 'src/type';
import { acceptConverter } from 'src/util/utils';

export default function ColorAccept({ accept }: { accept: Accept }) {
  const text = acceptConverter(accept);
  switch (accept) {
    case Accept.Pending:
      return (
        <Text size="text-base" className="font-semibold">
          {text}
        </Text>
      );
    case Accept.Accept:
      return (
        <Text size="text-base" className="text-cyan-400 font-semibold">
          {text}
        </Text>
      );
    case Accept.Cancel:
      return (
        <Text size="text-base" className="text-red-600 font-semibold">
          {text}
        </Text>
      );
    default:
      return (
        <Text size="text-base" className="text-red-600 font-semibold">
          Error
        </Text>
      );
  }
}
