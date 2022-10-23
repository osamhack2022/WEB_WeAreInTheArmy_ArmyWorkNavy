import Option from '../../../UI/Option';
import Select from '../../../UI/Select';
import DefaultInformation from '../../../UI/DefaultInformation';

interface RequestCategorySelectProps {
  label: string;
  options: Options[];
  dispatch: any;
}

type Options = {
  label: string;
  value: string;
};

export default function RequestCategorySelect({
  label,
  options,
  dispatch,
}: RequestCategorySelectProps) {
  return (
    <DefaultInformation label={label} isEssential>
      <Select className="w-3/4">
        {options.map(({ label, value }: Options) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </DefaultInformation>
  );
}
