import TextArea from '../../../UI/TextArea';
import DefaultInformation from '../../../UI/DefaultInformation';

interface DescriptionAreaProps {
  label: string;
  dispatch: any;
}

export default function DescriptionArea({
  label,
  dispatch,
}: DescriptionAreaProps) {
  return (
    <DefaultInformation label={label} isEssential>
      <TextArea
        className="w-3/4"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch(event.target.value)
        }
      />
    </DefaultInformation>
  );
}
