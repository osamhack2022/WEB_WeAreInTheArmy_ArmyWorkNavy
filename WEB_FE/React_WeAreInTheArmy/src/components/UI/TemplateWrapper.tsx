import { HasChild } from '../../type';

export default function TemplateWrapper({ children }: HasChild) {
  return <div className="mb-[300px] mt-[50px]">{children}</div>;
}
