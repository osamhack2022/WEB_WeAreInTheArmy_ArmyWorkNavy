interface InputProps {
  type: string;
}
export default function Input({ type }: InputProps) {
  return (
    <input
      type={type}
      className="border-[3px] p-2 rounded-md focus:border-indigo-700 focus:outline-0"
    />
  );
}
