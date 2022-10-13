import { HasChild } from 'src/type';

export default function HLText({ children }: HasChild) {
  return (
    <div className="w-full box-content mx-4 p-4 flex-col bg-slate-200">
      <p>{children}</p>
    </div>
  );
}
