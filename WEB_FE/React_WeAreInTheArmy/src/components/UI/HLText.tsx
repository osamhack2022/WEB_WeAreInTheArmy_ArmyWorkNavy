import { HasChild } from 'src/type';

export default function HTText({ children }: HasChild) {
  return (
    <div className="box-content mx-4 p-4 flex-col bg-slate-200">
      <p>{children}</p>
    </div>
  );
}
