import { HasChild } from '../../type';

type OptionProps = {
  value: string;
};

export default function Option({ value, children }: OptionProps & HasChild) {
  return (
    <option value={value} className="p-5">
      {children}
    </option>
  );
}
