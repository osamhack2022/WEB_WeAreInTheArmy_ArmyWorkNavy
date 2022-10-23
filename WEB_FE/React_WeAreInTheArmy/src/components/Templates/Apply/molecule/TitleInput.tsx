import Input from '../../../UI/Input';
import DefaultInformation from '../../../UI/DefaultInformation';

interface TitleInputProps {
  label: string;
  placeholder: string;
  dispatch: any;
}

export default function TitleInput({
  label,
  placeholder,
  dispatch,
}: TitleInputProps) {
  return (
    <DefaultInformation label={label} isEssential>
      <Input
        type="text"
        className="w-3/4"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(event.target.value)
        }
        placeholder={placeholder}
      />
    </DefaultInformation>
  );
}
